(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("9782a440",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(408);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("8ff9e0f8",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.r(e);n(221),n(47);var o=n(23),r={};!function main(t,e,n,o){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function c(){}function l(n){var o=e.exports.Promise,r=void 0!==o?o:t.Promise;return"function"==typeof r?new r(n):(n(c,c),null)}var d,f,h,m,v,x,k,w,_,y=(h=Math.floor(1e3/60),m={},v=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(d=function(t){var e=Math.random();return m[e]=requestAnimationFrame((function n(time){v===time||v+h-1<time?(v=time,delete m[e],t()):m[e]=requestAnimationFrame(n)})),e},f=function(t){m[t]&&cancelAnimationFrame(m[t])}):(d=function(t){return setTimeout(t,h)},f=function(t){return clearTimeout(t)}),{frame:d,cancel:f}),C=(w={},function(){if(x)return x;if(!n&&r){var code=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{x=new Worker(URL.createObjectURL(new Blob([code])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(canvas){var e=canvas.transferControlToOffscreen();t.postMessage({canvas:e},[e])},t.fire=function(n,o,r){if(k)return e(n,null),k;var c=Math.random().toString(36).slice(2);return k=l((function(o){function l(e){e.data.callback===c&&(delete w[c],t.removeEventListener("message",l),k=null,r(),o())}t.addEventListener("message",l),e(n,c),w[c]=l.bind(null,{data:{callback:c}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),w)w[e](),delete w[e]}}(x)}return x}),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:M[e],n)}function z(t){return t<0?0:Math.floor(t)}function S(t){return parseInt(t,16)}function E(t){return t.map(O)}function O(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:S(e.substring(0,2)),g:S(e.substring(2,4)),b:S(e.substring(4,6))}}function j(canvas){canvas.width=document.documentElement.clientWidth,canvas.height=document.documentElement.clientHeight}function A(canvas){var rect=canvas.getBoundingClientRect();canvas.width=rect.width,canvas.height=rect.height}function animate(canvas,t,e,r,c){var d,f,h=t.slice(),m=canvas.getContext("2d"),v=l((function(t){function l(){d=f=null,m.clearRect(0,0,r.width,r.height),c(),t()}d=y.frame((function t(){!n||r.width===o.width&&r.height===o.height||(r.width=canvas.width=o.width,r.height=canvas.height=o.height),r.width||r.height||(e(canvas),r.width=canvas.width,r.height=canvas.height),m.clearRect(0,0,r.width,r.height),(h=h.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var progress=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,r=e.wobbleX+e.random*e.tiltCos,c=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-progress)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(r-n)*e.ovalScalar,Math.abs(c-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,o,r,c,l,d,f){t.save(),t.translate(e,n),t.rotate(c),t.scale(o,r),t.arc(0,0,1,l,d,f),t.restore()}(t,e.x,e.y,Math.abs(r-n)*e.ovalScalar,Math.abs(c-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(o)),t.lineTo(Math.floor(r),Math.floor(c)),t.lineTo(Math.floor(n),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(m,t)}))).length?d=y.frame(t):l()})),f=l}));return{addFettis:function(t){return h=h.concat(t),v},canvas:canvas,promise:v,reset:function(){d&&y.cancel(d),f&&f()}}}function F(canvas,e){var n,o=!canvas,c=!!T(e||{},"resize"),d=T(e,"disableForReducedMotion",Boolean),f=r&&!!T(e||{},"useWorker")?C():null,h=o?j:A,m=!(!canvas||!f)&&!!canvas.__confetti_initialized,v="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function x(t,e,o){for(var r,c,l,d,f,m=T(t,"particleCount",z),v=T(t,"angle",Number),x=T(t,"spread",Number),k=T(t,"startVelocity",Number),w=T(t,"decay",Number),_=T(t,"gravity",Number),y=T(t,"drift",Number),C=T(t,"colors",E),M=T(t,"ticks",Number),S=T(t,"shapes"),O=T(t,"scalar"),j=function(t){var e=T(t,"origin",Object);return e.x=T(e,"x",Number),e.y=T(e,"y",Number),e}(t),A=m,F=[],B=canvas.width*j.x,I=canvas.height*j.y;A--;)F.push((r={x:B,y:I,angle:v,spread:x,startVelocity:k,color:C[A%C.length],shape:S[(d=0,f=S.length,Math.floor(Math.random()*(f-d))+d)],ticks:M,decay:w,gravity:_,drift:y,scalar:O},c=void 0,l=void 0,c=r.angle*(Math.PI/180),l=r.spread*(Math.PI/180),{x:r.x,y:r.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*r.startVelocity+Math.random()*r.startVelocity,angle2D:-c+(.5*l-Math.random()*l),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*r.gravity,ovalScalar:.6,scalar:r.scalar}));return n?n.addFettis(F):(n=animate(canvas,F,h,e,o)).promise}function k(e){var r=d||T(e,"disableForReducedMotion",Boolean),k=T(e,"zIndex",Number);if(r&&v)return l((function(t){t()}));o&&n?canvas=n.canvas:o&&!canvas&&(canvas=function(t){var canvas=document.createElement("canvas");return canvas.style.position="fixed",canvas.style.top="0px",canvas.style.left="0px",canvas.style.pointerEvents="none",canvas.style.zIndex=t,canvas}(k),document.body.appendChild(canvas)),c&&!m&&h(canvas);var w={width:canvas.width,height:canvas.height};function _(){if(f){var t={getBoundingClientRect:function(){if(!o)return canvas.getBoundingClientRect()}};return h(t),void f.postMessage({resize:{width:t.width,height:t.height}})}w.width=w.height=null}function y(){n=null,c&&t.removeEventListener("resize",_),o&&canvas&&(document.body.removeChild(canvas),canvas=null,m=!1)}return f&&!m&&f.init(canvas),m=!0,f&&(canvas.__confetti_initialized=!0),c&&t.addEventListener("resize",_,!1),f?f.fire(e,w,y):x(e,w,y)}return k.reset=function(){f&&f.reset(),n&&n.reset()},k}function B(){return _||(_=F(null,{useWorker:!0,resize:!0})),_}e.exports=function(){return B().apply(this,arguments)},e.exports.reset=function(){B().reset()},e.exports.create=F}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);var c=r.exports,l=(r.exports.create,{name:"Meetup",props:{meetup:Object},data:function(){return{isMeetupHover:!1,showFlash:!1}},methods:{onMeetupHover:function(){this.isMeetupHover=!0},onMeetupLeave:function(){this.isMeetupHover=!1},onCopyClick:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText("https://itishub.github.io/itishub-frontend"+$nuxt.$route.path+"#"+t.meetup.anchor);case 2:t.showFlash=!0,n=Date.now()+300,o=["#33aade","#ffffff"],r=n,function t(){c({particleCount:3,angle:60,spread:55,origin:{x:0},colors:o}),c({particleCount:4,angle:120,spread:55,origin:{x:1},colors:o}),Date.now()<r&&requestAnimationFrame(t)}();case 6:case"end":return e.stop()}var o,r}),e)})))()}}}),d=(n(397),n(46)),f=n(55),h=n.n(f),m=n(357),v=(n(37),n(41),n(0)),x=(n(10),n(399),n(56)),k=n(30),w=n(24),_=n(44),y=n(72),C=n(11),M=n(1),T=n(13),z=Object(C.a)(x.a,k.a,_.a,Object(y.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:w.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(M.f)(n+footer+o),paddingLeft:this.app?Object(M.f)(r):void 0,paddingRight:this.app?Object(M.f)(c):void 0,paddingTop:Object(M.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(T.e)("auto-height",this),0==this.timeout&&Object(T.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(M.l)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(v.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(M.l)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:x.a.options.computed.classes.call(this),style:x.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"meetup-container",on:{mouseover:t.onMeetupHover,mouseleave:t.onMeetupLeave}},[n("h2",{staticClass:"meetup-title",attrs:{id:t.meetup.anchor}},[t._v("\n    "+t._s(t.meetup.title)+"\n  ")]),t._v(" "),n("p",[t._v("\n    "+t._s(t.meetup.date)+"\n    "),n("v-btn",{class:t.isMeetupHover?"meetup-link":"meetup-link meetup-link__title-hover",attrs:{icon:"",color:"grey"},on:{click:t.onCopyClick}},[t._v("\n      🔗\n    ")])],1),t._v(" "),n("p",[t._v(t._s(t.meetup.description))]),t._v(" "),n("h3",{staticClass:"meetup-program-title"},[t._v("Программа митапа:")]),t._v(" "),t.meetup.speakers.length>0?n("ul",{staticClass:"meetup-program"},t._l(t.meetup.speakers,(function(e){return n("li",{key:e.name,staticClass:"speaker"},[n("div",{staticClass:"speaker-avatar-container"},[n("div",{staticClass:"speaker-avatar",style:{"background-image":"url("+e.avatar+")"}}),t._v(" "),n("img",{attrs:{src:e.avatar,alt:""}})]),t._v(" "),n("div",{staticClass:"speaker-description"},[n("p",{staticClass:"speaker-name"},[t._v("\n          "+t._s(e.name)+",\n          "),n("span",{staticClass:"speaker-company"},[t._v(t._s(e.company))])]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("a",{staticClass:"slides-link",attrs:{href:e.slides,target:"_blank"}},[t._v("слайды")])])])})),0):n("p",{staticClass:"empty-program-message"},[t._v("В разработке")]),t._v(" "),t.meetup.active?n("div",{staticClass:"timepad-info"},[n("p",[t._v("Зарегистрироваться на мероприятие можно здесь:")]),t._v(" "),n("v-btn",{staticClass:"timepad-button",attrs:{color:"#33aade",link:"",depressed:"",href:t.meetup.link,target:"_blank"}},[t._v("\n      записаться\n    ")])],1):t._e(),t._v(" "),n("v-snackbar",{staticClass:"mb-5",attrs:{timeout:"2500","content-class":"flash-content",outlined:"",dark:"","min-width":200},model:{value:t.showFlash,callback:function(e){t.showFlash=e},expression:"showFlash"}},[t._v("\n    ссылка скопирована в буфер 👍\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:m.a,VSnackbar:z})},397:function(t,e,n){"use strict";var o=n(379);n.n(o).a},398:function(t,e,n){(e=n(15)(!1)).push([t.i,".meetup-container{margin-top:10px;margin-bottom:10px;border-radius:10px;transition:background-color .5s;padding:15px 15px 5px}.meetup-title{font-size:30px}.meetup-link{opacity:1;transition:opacity .3s;border-radius:50%;font-size:25px!important}.meetup-link__title-hover{opacity:0}.empty-program-message{height:200px;display:flex;justify-content:center;align-items:center}.meetup-program-title{font-size:22px;margin-bottom:20px}.meetup-program{list-style-type:none;padding:0!important}.speaker{display:flex;flex-direction:row;grid-gap:20px;gap:20px;margin-bottom:20px}.speaker-avatar-container{width:100px;height:100px;border:3px solid #fff;border-radius:50%;overflow:hidden}.speaker-avatar{background-size:cover;background-color:#d3d3d3;width:100%;height:100%}.speaker-name{font-size:25px}.speaker-description{width:65%}.speaker-company{font-weight:700}.slides-link{color:#000!important;background-color:#e0e0e0;padding:5px 10px;border-radius:20px;transition:background-color .3s;transition:border-radius .3s;border:1px solid #bcbcbc}.slides-link:hover{background-color:#bbb9b9;border:1px solid #bcbcbc}.timepad-info{display:flex;flex-direction:row;justify-content:space-between;align-items:center;grid-gap:20px;gap:20px;padding-bottom:5px}.timepad-info>p{margin-bottom:0}.timepad-button{font-size:15px;letter-spacing:normal;text-transform:none;color:#fff!important}.flash-content{display:flex;justify-content:center}@media screen and (max-width:568px){.meetup-title{font-size:25px}}@media screen and (max-width:390px){.meetup-container{margin-top:30px}.meetup-title{font-size:22px}.speaker-description{font-size:13px}.meetup-program-title{font-size:18px}.speaker-avatar-container{width:70px;height:70px}.speaker-name{font-size:18px}.timepad-info{flex-wrap:wrap}}",""]),t.exports=e},399:function(t,e,n){var content=n(400);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63c9496b",content,!0,{sourceMap:!1})},400:function(t,e,n){(e=n(15)(!1)).push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=e},401:function(t,e,n){t.exports=n.p+"img/danya.fd6b090.png"},402:function(t,e,n){t.exports=n.p+"img/adelya.b9e7e0a.png"},403:function(t,e,n){t.exports=n.p+"img/rasim.cee8f86.png"},404:function(t,e,n){t.exports=n.p+"img/azat.03b996b.png"},405:function(t,e,n){t.exports=n.p+"img/chulpan.e2f5727.png"},406:function(t,e,n){t.exports=n.p+"img/lenya.e18028b.png"},407:function(t,e,n){"use strict";var o=n(380);n.n(o).a},408:function(t,e,n){(e=n(15)(!1)).push([t.i,".meetup-name[data-v-7fb35cf8]{margin:30px auto 20px;text-align:center;width:70%}.info-container[data-v-7fb35cf8]{width:100%;padding:10px 20px 0}.contact-info[data-v-7fb35cf8]{display:flex;flex-direction:row;align-items:center;grid-gap:20px;gap:20px}.info-icon[data-v-7fb35cf8]{font-size:40px}.meetup-list[data-v-7fb35cf8]{list-style-type:none;padding:0!important}.meetup[data-v-7fb35cf8]{display:flex;flex-direction:column}.email[data-v-7fb35cf8]{color:var(--color);text-decoration:underline}@media screen and (max-width:568px){.meetup-name[data-v-7fb35cf8]{font-size:25px}.info-icon[data-v-7fb35cf8]{font-size:35px}}@media screen and (max-width:390px){.meetup-name[data-v-7fb35cf8]{font-size:20px}.info-icon[data-v-7fb35cf8]{font-size:30px}}",""]),t.exports=e},429:function(t,e,n){"use strict";n.r(e);var o={components:{Meetup:n(389).default},data:function(){return{meetups:[{anchor:"pilot",title:"SDA, пилотный митап",date:"03.06.2022",description:"Собрали доклады ребят про опыт работы в продуктовых компаниях, интересных задачах, постороении процессов внутри команд.",speakers:[{name:"Даниил Трофимов",avatar:n(401),company:"Sbermarket",description:"Кто такой FrontOps? Расскажу про команду платформы фронтенда",slides:"https://docs.google.com/presentation/d/1eeDpo9tHFd_ssuYdE9okoooqpJAzf84kwungoqRynLU/edit?usp=sharing"},{name:"Аделя Сабирзянова",avatar:n(402),company:"Tinkoff",description:"Почему важен системный анализ? Расскажу про Системную аналитику в команде лояльности",slides:"https://docs.google.com/presentation/d/1-CZzxIFvvNMK5iOhWzfCIzaGwO28wtb2mv0T9pEnDEA/edit?usp=sharing"},{name:"Расим Гарипов",avatar:n(403),company:"Piano",description:"Несколько инструментов DataOps, которые могут вам пригодиться: Flyway, Pecona Toolkit",slides:"https://files.sberdisk.ru/s/zHdNrx4Ag6ocYKo"}],link:"https://forms.gle/2SpmruWHj6Ri6nucA",active:!1},{anchor:"autumn22",title:"SDA, autumn'22 🍁",date:"23.09.2022",description:"Возвращаемся этой осенью с новым митапом SDA! В программе доклады про Soft Skills, Android- и Backend-разработку.",speakers:[{name:"Азат Гилязов",avatar:n(404),company:"Mircod",description:"Расскажу про Jetpack Compose, познакомимся с технологией и ее устройством под капотом",slides:"https://docs.google.com/presentation/d/1btIrFLbKHCba8ntYQf3eQjQemxgu9bCSo_q4SqD6KB4/edit?usp=sharing"},{name:"Чулпан Хайруллина",avatar:n(405),company:"Stackers",description:"Что такое WLB и почему о нем все говорят? Коротко о том, как устроен наш организм, почему важно переключаться на разные сферы и как найти СВОЙ баланс",slides:"https://docs.google.com/presentation/d/1WHodTj3m2hmdbgMb0lOgrVx6CGXAj430_cjRJ1Gp63w/edit?usp=sharing"},{name:"Леонид Тыщенко",avatar:n(406),company:"Micord",description:"Micronaut vs Spring Boot, киллер-фичи, разбор контекстов, рассмотрим вместе возможность расширения фреймворков",slides:"https://docs.google.com/presentation/d/144Ty2tf4vThPFpLarzSVUEZ12H0MYQmh/edit?usp=sharing&ouid=107955849639318665979&rtpof=true&sd=true"}],link:"https://forms.gle/3eAEkEJZtaMGQ1xZ8",active:!1}]}}},r=(n(407),n(46)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-container"},[e("h1",{staticClass:"meetup-name"},[this._v("Student Developer Academy")]),this._v(" "),this._m(0),this._v(" "),e("ul",{staticClass:"meetup-list"},this._l(this.meetups,(function(t){return e("Meetup",{key:t.title,attrs:{meetup:t}})})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-container"},[e("p",{staticClass:"description"},[this._v("\n      Площадка на которой студенты могут поделиться промышленным опытом\n      разработки и попробовать себя в роли спикера. Встречи проводятся в\n      формате митапов.\n    ")]),this._v(" "),e("div",{staticClass:"contact-info"},[e("p",{staticClass:"info-icon"},[this._v("ℹ️")]),this._v(" "),e("p",{staticClass:"info-description"},[this._v("\n        Подать заявку на доклад можно написав нам на\n        "),e("a",{staticClass:"email",attrs:{href:"mailto:itis-hub@gmail.com"}},[this._v("itishub.adm@gmail.com")])])])])}],!1,null,"7fb35cf8",null);e.default=component.exports;installComponents(component,{Meetup:n(389).default})}}]);