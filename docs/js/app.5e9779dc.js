(function(e){function t(t){for(var i,s,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-videojs7/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3:function(e,t){},"432d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("3a0f"),n("a3a3"),n("4d0b");var i=n("329b"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("7c55"),n("048f")),o={},l=Object(s["a"])(o,r,a,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,c=n("b8e5"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player"},[n("h3",[e._v("Using Html5 to play m3u8 media file with video.js 7")]),e._m(0),n("div",[n("button",{on:{click:e.switchPlayer}},[e._v("Play")]),e._v("  \n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.src,expression:"src"}],staticStyle:{width:"500px"},attrs:{type:"text"},domProps:{value:e.src},on:{input:function(t){t.target.composing||(e.src=t.target.value)}}})]),n("br"),n("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions},on:{play:function(t){e.onPlayerPlay(t)},ready:function(t){e.onPlayerReady(t)}}})],1)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[e._v("Free m3u8 test resource: "),n("a",{attrs:{href:"https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/"}},[e._v("https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/")])])}],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.reseted?n("div",[n("video",{ref:"video",staticClass:"video-js"},[e._l(e.trackList,function(e,t){return n("track",{key:t,attrs:{kind:e.kind,label:e.label,src:e.src,srcLang:e.srcLang,default:e.default}})}),e._m(0)],2)]):e._e()},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"vjs-no-js"},[e._v("\n      To view this video please enable JavaScript, and consider upgrading to a web browser that\n      "),n("a",{attrs:{href:"https://videojs.com/html5-video-support/",target:"_blank"}},[e._v("supports HTML5 video")])])}],h=n("da47"),v=(n("20a2"),n("7cc8"),n("c47f")),m=window.videojs||v["a"],b={name:"videoplayer",props:{crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{autoplay:!0,controls:!0,language:"zh",inactivityTimeout:0,preload:"auto",fluid:!1,techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}},trackList:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},methods:{initialize:function(){var e=this,t=this,n=this.$refs.video,i=Object.assign({},this.globalOptions,this.options);this.playsinline&&(n.setAttribute("playsinline",this.playsinline),n.setAttribute("webkit-playsinline",this.playsinline),n.setAttribute("x5-playsinline",this.playsinline),n.setAttribute("x5-video-player-type","h5"),n.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(n.crossOrigin=this.crossOrigin,n.setAttribute("crossOrigin",this.crossOrigin)),i.plugins&&delete i.plugins.__ob__;var r=function(t,n){t&&e.$emit(t,e.player),n&&e.$emit(e.customEventName,Object(h["a"])({},t,n))};this.player=m(n,i,function(){for(var e=this,n=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"],i=n.concat(t.events).concat(t.globalEvents),a={},s=0;s<i.length;s++)"string"===typeof i[s]&&void 0===a[i[s]]&&function(t){a[t]=null,e.on(t,function(){r(t,!0)})}(i[s]);t.$emit("ready",this)})},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick(function(){t.reseted=!1,t.$nextTick(function(){t.reseted=!0,t.$nextTick(function(){e&&e()})})}))}},watch:{options:{deep:!0,handler:function(e,t){var n=this;this.dispose(function(){e&&e.sources&&e.sources.length&&n.initialize()})}}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()}},g=b,_=(n("80f7"),Object(s["a"])(g,f,y,!1,null,"dce5bc22",null));_.options.__file="VideoPlayer.vue";var w=_.exports,O={name:"home",components:{VideoPlayer:w},data:function(){return{src:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",playerOptions:{autoplay:!0,controls:!0,controlBar:{timeDivider:!1,durationDisplay:!1}}}},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(e){console.log("player play!",e)},onPlayerReady:function(e){console.log("player ready!",e),this.player.play()},playVideo:function(e){var t={withCredentials:!1,type:"application/x-mpegurl",src:e};this.player.reset(),this.player.src(t),this.player.play()},switchPlayer:function(){this.playVideo(this.src)}},mounted:function(){var e="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";this.playVideo(e)}},j=O,x=(n("d36a"),Object(s["a"])(j,p,d,!1,null,"bcb290fc",null));x.options.__file="Home.vue";var P=x.exports;i["a"].use(c["a"]);var k=new c["a"]({mode:"history",base:"/vue-videojs7/",routes:[{path:"/",name:"home",component:P}]}),$=n("f2de");i["a"].use($["a"]);var A=new $["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:k,store:A,render:function(e){return e(u)}}).$mount("#app")},"741a":function(e,t,n){},"7c55":function(e,t,n){"use strict";var i=n("432d"),r=n.n(i);r.a},"80f7":function(e,t,n){"use strict";var i=n("741a"),r=n.n(i);r.a},c4d8:function(e,t,n){},d36a:function(e,t,n){"use strict";var i=n("c4d8"),r=n.n(i);r.a}});
//# sourceMappingURL=app.5e9779dc.js.map