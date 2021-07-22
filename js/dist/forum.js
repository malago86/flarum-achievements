module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t){e.exports=flarum.core.compat.Model},,function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}n.d(t,"a",(function(){return i}))},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["components/Tooltip"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["utils/ItemList"]},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),i=n.n(a),s=n(8),o=n.n(s);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=n(2),m=(n(13),function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t}(i.a));r(m.prototype,{id:i.a.attribute("id"),name:i.a.attribute("name"),description:i.a.attribute("description"),computation:i.a.attribute("computation"),points:i.a.attribute("points"),rectangle:i.a.attribute("rectangle"),image:i.a.attribute("image"),new:i.a.attribute("new"),active:i.a.attribute("active"),hidden:i.a.attribute("hidden")});var l=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t}(i.a);function u(){o.a.prototype.achievements=i.a.hasMany("achievements","achievement_user"),o.a.prototype.achievement_user=i.a.hasMany("achievement_user"),app.store.models.achievements=m,app.store.models.achievement_user=l}r(l.prototype,{achievement_id:i.a.attribute("achievement_id"),user_id:i.a.attribute("user_id"),new:i.a.attribute("new")})},function(e,t){e.exports=flarum.core.compat["utils/mixin"]},function(e,t){e.exports=flarum.core.compat.app},,,function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},function(e,t){e.exports=flarum.core.compat["common/Application"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["common/components/Page"]},function(e,t){e.exports=flarum.core.compat["helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["components/UserCard"]},,,,,function(e,t){e.exports=flarum.core.compat["components/Link"]},function(e,t){e.exports=flarum.core.compat["helpers/humanTime"]},,function(e,t,n){"use strict";n.r(t);var a=n(10),i=n(17),s=n.n(i),o=n(18),r=n.n(o),c=n(2),l=n(14),u=n.n(l),p=n(9),h=n.n(p),d=n(6),v=n.n(d),f=n(7),g=n.n(f),b=n(3),x=n.n(b),y=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var n=t.prototype;return n.title=function(){return u.a.translator.trans("malago-achievements.forum.new_achievement_title")},n.oninit=function(t){e.prototype.oninit.call(this,t)},n.fields=function(){for(var e=new g.a,t=0;t<this.attrs.achievements.length;t++){var n=this.attrs.achievements[t].rectangle.split(",");if(this.attrs.achievements[t].image.includes("http")){var a="background:url("+this.attrs.achievements[t].image+");                    background-position:-"+n[0]+"px -"+n[1]+"px;                    height:"+n[2]+"px;                    width:"+n[3]+"px;";e.add("image"+t,m("div",{className:"Form-group"},m("span",{class:"Badge Achievement",style:a})),-10)}else e.add("image"+t,m("div",{className:"Form-group"},m("span",{class:"Badge Achievement--Icon"},h()(this.attrs.achievements[t].image))),-10);e.add("name"+t,m("div",{className:"Form-group"},m("h1",null,this.attrs.achievements[t].name)),-10),e.add("description"+t,m("div",{className:"Form-group"},m("h3",null,this.attrs.achievements[t].description)),-10)}return e.add("close",m("div",{className:"NewAchievementModal--Button"},x.a.component({type:"button",className:"Button Button--primary",onclick:this.hide.bind(this)},u.a.translator.trans("malago-achievements.forum.new_achievement_close"))),-10),e},n.footer=function(){return null},n.content=function(){return this.loading?m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"container"},m(LoadingIndicator,null)))):m("div",{className:"Modal-body"},m("div",{className:"Modal--New-Achievement"},this.fields().toArray()))},t}(v.a),_=n(11),A=n.n(_),N=n(19),w=n.n(N),O=n(20),L=n.n(O),j=(n(28),n(5)),P=n.n(j),I=n(21),k=n.n(I),B=(n(29),n(4)),M=n.n(B),T=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var n=t.prototype;return n.oninit=function(t){var n=this;this.loading=!0,e.prototype.oninit.call(this,t),app.session.user||m.route.set("/"),this.achievements_ids=[],app.data.resources.map((function(e){"achievements"==e.type&&n.achievements_ids.push(e.id)})),this.achievements_all=[],this.html_user="",this.html_all="",this.points=0,this.hidden_count=0,app.store.find("achievements").then((function(e){n.achievements_all=e,n.achievements_all.map((function(e){var t=e.rectangle().split(","),a="";e.image().includes("http")?a='<li>              <div class="AchievementsList-Item">                <div class="Badge Achievement" style="'+("background:url("+e.image()+");            background-position:-"+t[0]+"px -"+t[1]+"px;            height:"+t[2]+"px;            width:"+t[3]+"px;")+'" data-toggle="tooltip" title='+e.name()+'></div>                  <table class="AchievementsList-info"><tr><td class="AchievementsList-name">'+e.name()+'</td><td class="AchievementsList-points">'+app.translator.trans("malago-achievements.forum.achievement_points")+": "+e.points()+'</td></tr></table>                  <div class="AchievementsList-description">'+e.description()+"</div>              </div>            </li>":a='<li>              <div class="AchievementsList-Item">                <div class="Badge Achievement--Icon"><i class="icon '+e.image()+'"></i></div>                <table class="AchievementsList-info"><tr><td class="AchievementsList-name">'+e.name()+'</td><td class="AchievementsList-points">'+app.translator.trans("malago-achievements.forum.achievement_points")+": "+e.points()+'</td></tr></table>                <div class="AchievementsList-description">'+e.description()+"</div>              </div>            </li>";-1!==n.achievements_ids.indexOf(e.data.id)?(n.html_user+=a,n.points+=parseFloat(e.points())):0==e.hidden()?n.html_all+=a:n.hidden_count+=1})),n.loading=!1,m.redraw()}))},n.view=function(){return this.loading?m(P.a,null):m("div",{className:"IndexPage"},A.a.prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,k()(A.a.prototype.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("h2",null,app.translator.trans("malago-achievements.forum.your_achievements")),m("div",{className:"AchievementsList"},m("ul",{className:"AchievementsList-achievements"},m.trust(this.html_user),m("li",null,m("div",{class:"AchievementsList-Item"},m("div",{className:"AchievementsList-points AchievementsList-total",style:"color: black; border: 2px solid black;"},app.translator.trans("malago-achievements.forum.achievement_total_points")+": "+this.points))))),m("h2",null,app.translator.trans("malago-achievements.forum.other_achievements")),m("div",{className:"AchievementsList AchievementsList-Other"},m("ul",{className:"AchievementsList-achievements"},m.trust(this.html_all))),m("div",{className:"AchievementsHidden"},this.hidden_count>0?app.translator.trans("malago-achievements.forum.hidden_achievements")+": "+this.hidden_count:"")))))},n.oncreate=function(t){e.prototype.oncreate.call(this,t),app.setTitle(app.translator.trans("malago-achievements.forum.list_heading")),app.setTitleCount(0)},t}(L.a),C=n(22),F=n.n(C),S=n(23),U=n.n(S),E=n(12).default;app.initializers.add("malago-achievements",(function(e){e.routes.achievements={path:"/achievements",component:T},Object(a.extend)(A.a.prototype,"navItems",(function(t){e.session.user&&t.add("achievements",m(F.a,{icon:"fas fa-trophy",href:e.route("achievements")},e.translator.trans("malago-achievements.forum.list_heading")),-11)})),E(),Object(a.extend)(U.a.prototype,"view",(function(t){var n=0,a=e.forum.attribute("malago-achievements.show-user-card"),i=m("div.UserCard-Achievement-list");if("1"==a&&t.attrs.className.includes("UserCard--popover")){var s=this.attrs.user.achievements();void 0!==s&&(Object.keys(s).forEach((function(e){var t=s[e].data.attributes,a=t.rectangle.split(",");if(t.image.includes("http")){var o="background:url("+t.image+");              background-position:-"+a[0]+"px -"+a[1]+"px;              height:"+a[2]+"px;              width:"+a[3]+"px;              margin: -"+(a[3]/4-4)+"px;";i.children.push(m(M.a,{text:t.name},m("span.Badge.Achievement",{style:o},"")))}else i.children.push(m(M.a,{text:t.name},m("span.Badge.Achievement--Icon",m("i.icon."+t.image))));n+=t.points})),i.children.length>0&&n>0&&i.children.push(m(M.a,{text:e.translator.trans("malago-achievements.forum.achievement_points")},m("span.Achievement--Points",e.translator.trans("malago-achievements.forum.achievement_points")+": ",m("span.Achievement--Points--Number",n)))),t.children.push(i))}})),Object(a.extend)(s.a.prototype,"view",(function(t){var n=0;"1"!=e.forum.attribute("malago-achievements.show-post-footer")||this.attrs.post.data.attributes.isHidden||(this.attrs.post.data.attributes.achievements.forEach((function(e,a){var i=e.rectangle.split(",");if(e.image.includes("http")){var s="background:url("+e.image+");            background-position:-"+i[0]+"px -"+i[1]+"px;            height:"+i[2]+"px;            width:"+i[3]+"px;            margin: -"+(i[3]/4-4)+"px;";t.children[0].children[2].children[0].children.push(m(M.a,{text:e.name},m("span.Badge.Achievement",{style:s},"")))}else t.children[0].children[2].children[0].children.push(m(M.a,{text:e.name},m("span.Badge.Achievement--Icon",m("i.icon."+e.image))));n+=e.points})),t.children[0].children[2].children[0].children.length>0&&n>0&&t.children[0].children[2].children[0].children.push(m(M.a,{text:e.translator.trans("malago-achievements.forum.achievement_points")},m("span.Achievement--Points",e.translator.trans("malago-achievements.forum.achievement_points")+": ",m("span.Achievement--Points--Number",n)))))})),Object(a.extend)(r.a.prototype,"request",(function(t){t&&t.then((function(t){t&&void 0!==t.new_achievements&&null!==t.new_achievements&&JSON.parse(t.new_achievements).length>0&&e.modal.show(y,{achievements:t.new_achievements})}))})),Object(a.extend)(w.a.prototype,"oncreate",(function(t){void 0!==e.session.user&&setTimeout((function(){var t=e.session.user.achievements();if(null!=t&&t.length>0){for(var n=[],a=0;a<t.length;a++)1==t[a].data.attributes.new&&(n.push(t[a].data.attributes),t[a].save({new:0,user_id:e.session.user.data.id}));n.length>0&&e.modal.show(y,{achievements:n})}}),1e3)}))}))}]);
//# sourceMappingURL=forum.js.map