(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5019224d"],{"0e0c":function(t,e,n){},"3b43":function(t,e,n){"use strict";var a=n("8933"),i=n.n(a);i.a},"70dd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"calendar"}},[n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"header-start"}},[n("div",{ref:"dropdown",attrs:{id:"date"}},[t._v("\n        "+t._s(t.$t("layouts-calendar-months."+t.monthNames[t.date.getMonth()]))+"\n        "+t._s(t.date.getFullYear())+"\n        "),n("transition",{attrs:{name:"months"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMonthSelect,expression:"showMonthSelect"}],attrs:{id:"date-select"}},[n("div",{attrs:{id:"date-header"}},[n("button",{on:{click:function(e){return t.decreaseYear()}}},[n("v-icon",{attrs:{name:"arrow_back"}})],1),t._v("\n              "+t._s(t.date.getFullYear())+"\n              "),n("button",{on:{click:function(e){return t.increaseYear()}}},[n("v-icon",{attrs:{name:"arrow_forward"}})],1)]),n("div",{attrs:{id:"date-months"}},t._l(12,function(e){return n("div",{key:e,class:t.date.getMonth()+1==e?"mark-month":"",on:{click:function(n){t.setMonth(t.monthDistance-t.date.getMonth()+(e-1))}}},[t._v("\n                "+t._s(t.monthNames[e-1].substr(0,3))+"\n              ")])}),0)])])],1),n("div",{attrs:{id:"arrows"}},[n("button",{on:{click:function(e){return t.decreaseMonth()}}},[n("v-icon",{staticClass:"icon",attrs:{name:"arrow_back"}})],1),n("button",{on:{click:function(e){return t.increaseMonth()}}},[n("v-icon",{staticClass:"icon",attrs:{name:"arrow_forward"}})],1)])]),n("div",{attrs:{id:"header-end"}},[n("div",{staticClass:"button style-btn",class:{hidden:0==t.monthDistance},attrs:{id:"today"},on:{click:function(e){return t.resetMonth()}}},[t._v("\n        "+t._s(t.$t("layouts-calendar-today"))+"\n      ")])])]),n("div",{attrs:{id:"display"}},[n("transition",{attrs:{name:t.swipeTo}},[n("Calendar",{key:t.monthDistance,attrs:{month:t.monthDistance,items:t.items},on:{day:t.openPopup},nativeOn:{wheel:function(e){return t.scroll(e)}}})],1)],1),n("Popup",{attrs:{open:t.showPopup,date:t.popupDate},on:{close:function(e){t.showPopup=!1}}})],1)},i=[],s=(n("55dd"),n("c3ff")),r=n.n(s),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view"}},t._l(42,function(e){return n("Day",{key:e,attrs:{display:t.display(e),week:t.renderWeek(e),date:t.renderDate(e),events:t.events(e)},on:{popup:function(n){t.$emit("day",t.getDate(e))}},nativeOn:{click:function(n){t.$emit("day",t.getDate(e))}}})}),1)},d=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"day",class:{hidden:t.hidden,today:t.today}},[n("div",{staticClass:"header"},[t.isWeek?n("div",{staticClass:"header-week"},[t._v(t._s(t.week.substr(0,3)))]):t._e(),n("div",{staticClass:"header-day"},[t._v(t._s(t.date))])]),n("div",{staticClass:"events"},t._l(t.eventList,function(e){return n("a",{key:e.id,on:{click:function(n){n.stopPropagation(),e.to&&t.$router.push(e.to)}}},[n("div",{staticClass:"event",class:-1==e.id?"event-more":"",style:e.color,on:{click:function(n){-1==e.id&&t.$emit("popup")}}},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),n("span",{staticClass:"time"},[t._v(t._s(e.time.substr(0,5)))])])])}),0)])},h=[],u={props:["week","display","date","events"],data:function(){return{}},computed:{hidden:function(){return"hidden"==this.display},today:function(){return"today"==this.display},isWeek:function(){return null!=this.week},eventList:function(){if(this.events){var t=this.events,e=(this.$parent.innerHeight-120)/6;e-=32,this.isWeek&&(e-=15),this.today&&(e-=5);var n=Math.floor(e/22);return t.length>n&&(t=t.slice(0,n-1),t.push({id:-1,title:this.$t("layouts-calendar-moreEvents",{amount:this.events.length-n+1}),time:""})),t}}}},l=u,p=(n("fe9d"),n("2877")),v=Object(p["a"])(l,c,h,!1,null,"f4168026",null),m=v.exports,f={props:["month","items"],components:{Day:m},data:function(){return{innerHeight:window.innerHeight}},computed:{date:function(){var t=new Date;return t=new Date(t.getFullYear(),t.getMonth()+this.month,1),t},monthBegin:function(){var t=new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay();return 0==t?7:t},monthLength:function(){return new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate()},today:function(){var t=new Date;return t.getDate()}},methods:{events:function(t){var e=new Date(this.date.getFullYear(),this.date.getMonth(),t-this.monthBegin+1);return this.$parent.eventsAtDay(e)},renderWeek:function(t){return t<8?this.$t("layouts-calendar-weeks."+this.$parent.weekNames[t-1]):null},renderDate:function(t){var e=new Date(this.date.getFullYear(),this.date.getMonth(),t-this.monthBegin+1);return e.getDate()},getDate:function(t){var e=new Date(this.date.getFullYear(),this.date.getMonth(),t-this.monthBegin+1);return e},display:function(t){return t<this.monthBegin||t>=this.monthBegin+this.monthLength?"hidden":0==this.month&&t-this.monthBegin+1==this.today?"today":t-this.monthBegin<this.monthLength?"default":void 0},updateHeight:function(){this.innerHeight=window.innerHeight}},created:function(){var t=this;this.updateHeight=this.$lodash.throttle(this.updateHeight,100),window.addEventListener("resize",function(){t.updateHeight()})},destroyed:function(){var t=this;window.removeEventListener("resize",function(){t.updateHeight()})}},y=f,w=(n("3b43"),Object(p["a"])(y,o,d,!1,null,"c21f469c",null)),g=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"popup"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],attrs:{id:"wrapper"}},[n("div",{attrs:{id:"background"},on:{click:function(e){return t.close()}}}),n("div",{attrs:{id:"popup"}},[n("div",{attrs:{id:"sidebar-header"}},[t._v("\n        "+t._s(t.$t("layouts-calendar-months."+t.$parent.monthNames[t.date.getMonth()]))+"\n        "+t._s(t.date.getFullYear())+"\n      ")]),n("div",{attrs:{id:"sidebar"},on:{wheel:t.scroll}},[n("transition",{attrs:{name:t.moveSidebar}},[n("div",{key:t.days,attrs:{id:"dates-container"}},t._l(t.days,function(e){return n("div",{key:e.date.getDate(),staticClass:"dates",on:{click:function(n){return t.changeDay(e.index)}}},[n("span",{staticClass:"dates-day"},[t._v(t._s(t.weekname(e.date.getDay())))]),n("span",{staticClass:"dates-date"},[t._v(t._s(e.date.getDate()))]),n("div",{class:t.getEventCount(e.date)>0?"date-counter":"date-counter-hidden"},[t._v("\n                "+t._s(t.getEventCount(e.date))+"\n              ")])])}),0)])],1),n("div",{attrs:{id:"header"}},[n("span",[t._v(t._s(t.$t("layouts-calendar-events")))]),n("button",{on:{click:t.close}},[n("v-icon",{attrs:{name:"close"}})],1)]),n("div",{attrs:{id:"events"}},[t._l(t.events,function(e){return n("div",{key:e.title,staticClass:"event",style:e.color,on:{click:function(n){return t.$router.push(e.to)}}},[n("span",[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.time.substr(0,5)))])])}),0==t.getEventCount(t.date)?n("div",{attrs:{id:"events-none"}},[n("span",[t._v(t._s(t.randomEmoji()))]),n("br"),n("br"),n("span",[t._v(t._s(t.$t("layouts-calendar-noEvents")))])]):t._e()],2),n("a",{attrs:{id:"add",href:t.addItemURL}},[n("v-icon",{attrs:{name:"add"}})],1)])])])},D=[],k={props:["open","date"],components:{},data:function(){return{moveSidebar:"move-0"}},computed:{days:function(){for(var t=new Array,e=-4;e<=4;e++){var n=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+e);t.push({date:n,index:e})}return t},events:function(){return this.$parent.eventsAtDay(this.date)},addItemURL:function(){var t=this.$root._router.currentRoute.path;return"#"+t+"/+"}},methods:{weekname:function(t){return this.$t("layouts-calendar-weeks."+this.$parent.weekNames[0==t?6:t-1]).substr(0,3)},changeDay:function(t){this.moveSidebar="move-"+t;var e=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+t);this.date=e,this.$parent.popupDate=e},close:function(){this.$emit("close"),this.moveSidebar="move-0"},getEventCount:function(t){var e=0,n=this.$parent.viewOptions.date;if(n){for(var a=0;a<this.$parent.items.length;a++){var i=this.$parent.items[a],s=new Date(i[n]+"T00:00:00");this.$parent.isSameDay(t,s)&&e++}return e}},randomEmoji:function(){var t=["(≧︿≦)","¯\\(°_o)/¯","(⌐⊙_⊙)","( º﹃º )","¯\\_(ツ)_/¯","(·.·)","\\(°Ω°)/"],e=Math.floor(Math.random()*t.length);return t[e]},scroll:function(t){t.deltaY>0?this.changeDay(1):this.changeDay(-1)}},created:function(){this.scroll=this.$lodash.throttle(this.scroll,150)}},b=k,$=(n("a6f1"),Object(p["a"])(b,_,D,!1,null,"0e3b3d16",null)),M=$.exports,C={props:["items"],components:{Calendar:g,Popup:M},data:function(){return{monthDistance:0,swipeTo:"left",showPopup:!1,popupDate:new Date,showMonthSelect:!1,monthNames:["january","february","march","april","may","june","july","august","september","october","november","december"],weekNames:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]}},mixins:[r.a],computed:{date:function(){var t=new Date;return t=new Date(t.getFullYear(),t.getMonth()+this.monthDistance,1),t}},methods:{increaseYear:function(){this.swipeTo="right",this.monthDistance+=12},decreaseYear:function(){this.swipeTo="left",this.monthDistance-=12},increaseMonth:function(){this.swipeTo="right",this.monthDistance++},decreaseMonth:function(){this.swipeTo="left",this.monthDistance--},resetMonth:function(){this.swipeTo=this.monthDistance>0?"left":"right",this.monthDistance=0},setMonth:function(t){this.swipeTo=this.monthDistance-t>0?"left":"right",this.monthDistance=t},openPopup:function(t){this.showPopup=!0,this.popupDate=t},eventsAtDay:function(t){var e=[],n=this.viewOptions.date,a=this.viewOptions.title,i=this.viewOptions.time,s=this.viewOptions.color;if(n&&a){for(var r=0;r<this.$parent.items.length;r++){var o=this.$parent.items[r],d=new Date(o[n]+"T00:00:00"),c=o[i]&&0!=i?o[i]:"",h=o[s];if(d&&(h||(h="accent"),h="background-color: var(--".concat(h,")"),this.isSameDay(t,d))){var u={id:o.id,title:o[a],to:o.__link__,time:c,color:h};e.push(u)}}return 0!=i&&e.sort(this.compareTime),e}},compareTime:function(t,e){var n=this.viewOptions.time;if(""==t[n]&&""==e[n])return 0;if(""!=t[n]&&""==e[n])return-1;if(""==t[n]&&""!=e[n])return 1;var a=new Date("1970-01-01T"+t[n]),i=new Date("1970-01-01T"+e[n]);return a>i?1:a<i?-1:0},isSameDay:function(t,e){return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()},documentClick:function(t){var e=this.$refs.dropdown,n=t.target;this.showMonthSelect=n===e&&!this.showMonthSelect||e.contains(n)&&n!==e},keyPress:function(t){switch(t.key){case"Escape":this.showPopup=!1;break;case"ArrowRight":this.increaseMonth();break;case"ArrowLeft":this.decreaseMonth();break;default:break}},scroll:function(t){t.deltaY>0?this.increaseMonth():this.decreaseMonth()}},created:function(){this.scroll=this.$lodash.throttle(this.scroll,200),document.addEventListener("click",this.documentClick),document.addEventListener("keypress",this.keyPress)},destroyed:function(){document.removeEventListener("click",this.documentClick),document.removeEventListener("keypress",this.keyPress)}},Y=C,E=(n("b091"),Object(p["a"])(Y,a,i,!1,null,"ca636764",null));e["default"]=E.exports},8933:function(t,e,n){},a489:function(t,e,n){},a6f1:function(t,e,n){"use strict";var a=n("0e0c"),i=n.n(a);i.a},b091:function(t,e,n){"use strict";var a=n("f286"),i=n.n(a);i.a},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null}}}},f286:function(t,e,n){},fe9d:function(t,e,n){"use strict";var a=n("a489"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-5019224d.6e0fb70b.js.map