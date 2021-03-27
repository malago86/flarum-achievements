<?php

/*
 * This file is part of fof/gamification.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Malago\Achievements\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Malago\Achievements\Achievement;

class AchievementSerializer extends AbstractSerializer
{
    /**
     * @var string
     */
    protected $type = 'achievements';

    /**
     * @param $group
     *
     * @return array
     */
    protected function getDefaultAttributes($ach)
    {
        if (!($ach instanceof Achievement)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.Achievement::class
            );
        }

        // app('log')->error("NEW: ".print_r($ach->pivot["new"],TRUE));

        return [
            'name' => $ach->name,
            'description'   => $ach->description,
            'computation'   => $ach->computation,
            'points'   => $ach->points,
            'image'   => $ach->image,
            'rectangle'   => $ach->rectangle,
            'active'   => $ach->active,
            'new'   => $ach->pivot["new"],
        ];
    }


    // protected function group($trustLevel)
    // {
    //     return $this->hasOne($trustLevel, GroupSerializer::class);
    // }

    protected function users($ach)
    {
        return $this->users($ach, BasicUserSerializer::class);
    }
}