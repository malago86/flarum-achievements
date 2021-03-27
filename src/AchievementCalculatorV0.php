<?php

/*
 * This file is part of askvortsov/flarum-trust-levels
 *
 *  Copyright (c) 2021 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Malago\Achievements;

use Flarum\User\User;
use Flarum\Post\Post;
use Illuminate\Support\Arr;
use Malago\Achievements\AchievementUser;

class AchievementCalculator
{

    public function recalculate(User $user, $type_array)
    {

        $achievements = Achievement::all();

        $new = Achievement::all()->filter(function (Achievement $ach) use ($user,$type_array){
            if($ach->getActive()){
                $split = explode(":",$ach->getComputation());
                if(count($split)==1){
                    $split=array($split[0],1);
                }
                foreach($type_array as $computation){
                    $type=$computation["type"];
                    $number=$computation["count"];
                    
                    if($split[0]==$type){
                        $minmax=explode(",",$split[1]);
                        if(count($minmax)==1){
                            return $number>=$minmax[0];
                        }else if(count($minmax)==2){
                            return $number>=$minmax[0] && $number<=$minmax[1];
                        }
                    }
                    
                    if($type=="posts"){
                        if($split[0]=="contains"){
                            $minmax=explode(",",$split[1]);
                            $count =  Post::where('user_id', $user->id)->select('id')->where("content","like","%".$minmax[0]."%")->get()->count();
                            if(count($minmax)==2){
                                return $count>=$minmax[1];
                            }else if(count($minmax)==3){
                                return $count>=$minmax[1] && $count<=$minmax[2];
                            }
                        }elseif($split[0]=="tagposts"){
                            $minmax=explode(",",$split[1]);
                            $count = Post::where('user_id', $user->id)
                                ->rightjoin('discussion_tag', 'posts.discussion_id', '=', 'discussion_tag.discussion_id')
                                ->leftjoin('tags', 'discussion_tag.tag_id', '=', 'tags.id')
                                ->groupBy("discussion_tag.tag_id")
                                ->where('name',$minmax[0])->count();
                                
                            if(count($minmax)==2){
                                return $count>=$minmax[1];
                            }else if(count($minmax)==3){
                                return $count>=$minmax[1] && $count<=$minmax[2];
                            }
                        }
                    }
                }
            }
        });

        $remove = Achievement::all()->filter(function (Achievement $ach) use ($type_array){
            if($ach->getActive()){
                $split = explode(":",$ach->getComputation());
                if(count($split)==1){
                    $split=array($split[0],1);
                }
                foreach($type_array as $computation){
                    $type=$computation["type"];
                    $number=$computation["count"];
                    // app('log')->error(print_r($numbers,TRUE));
                    if($split[0]==$type){
                        $minmax=explode(",",$split[1]);
                        if(count($minmax)==1){
                            return !($number>=$minmax[0]);
                        }else{
                            return !($number>=$minmax[0] && $number<=$minmax[1]);
                        }
                    }
                }
            }
        });

        $current = $this->toAssoc($user->achievements->toArray());

        $new_ids = $this->adjustAchievements($user, $current, $this->toAssoc($new->toArray()), $this->toAssoc($remove->toArray()));

        $unseen_achievements = AchievementUser::where("user_id",$user->id)->where("new",1);
        $unseen_ids = $unseen_achievements->get()->pluck('achievement_id')->toArray();
        $unseen_achievements->update(array('new' => 0));

        // app('log')->error(print_r($unseen_ids,TRUE));
        if($new_ids != null && $unseen_ids != null)
            $all_new = array_merge($new_ids,$unseen_ids);
        elseif($new_ids != null)
            $all_new = $new_ids;
        else
            $all_new = $unseen_ids;
    
        $new_achievements=[];
        if($all_new!=null)
            $new_achievements = Achievement::select("name","description","image","rectangle")->whereIn("id",$all_new)->get();


            // app('log')->error(print_r($new_achievements,TRUE));
        return $new_achievements;
        // app('log')->error(print_r(,TRUE));

        // $this->adjustUserGroups($user, $prevLevels, $currLevels);
    }

    protected function getUserStats(User $user)
    {
        $stats = [];

        // foreach ($this->metrics->getDrivers() as $name => $driver) {
        //     $stats[$name] = $driver->getValue($user);
        // }

        return $stats;
    }

    protected function getAchievements($type)
    {
        return Achievement::all()->filter(function (Achievement $ach) {
            $computation = $ach->getComputation();

            $withinMetric = ($min === -1 || $val >= $min) && ($max === -1 || $val <= $max);

            if (!$withinMetric) {
                return false;
            }

            return true;
        })->toArray();
    }

    protected function adjustAchievements($user, $current, $new, $remove)
    {
        // $removedLevels = array_diff_key($prevLevels, $currLevels);
        $currentIds = Arr::pluck($current, 'id');
        $newIds = Arr::pluck($new, 'id');
        $removeIds = Arr::pluck($remove, 'id');

        // $allGroupIds = Arr::pluck($user->achievements()->select('id')->get()->toArray(), 'id');

        // app('log')->error(print_r($currentIds,TRUE));
        // app('log')->error(print_r($newIds,TRUE));
        // app('log')->error(print_r($removeIds,TRUE));

        $allGroupIds = array_diff($currentIds, $removeIds);
        $allGroupIds = array_unique(array_merge($allGroupIds, $newIds));
        
        // app('log')->error(print_r($allGroupIds,TRUE));


        $user->achievements()->sync($allGroupIds);
        $user->save();

        return array_diff($allGroupIds,$currentIds);
    }

    /**
     * Converts model query results into an associative array with the ID as the key.
     */
    protected function toAssoc($arr)
    {
        $newArr = [];

        foreach ($arr as $model) {
            $newArr[$model['id']] = $model;
        }

        return $newArr;
    }
}