(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(t,e,n){var content=n(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("9782a440",content,!0,{sourceMap:!1})},377:function(t,e,n){var content=n(400);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("06630a30",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n.r(e);var r={name:"Meetup",props:{meetup:Object},computed:{currentBaseUrl:function(){return"https://itishub.pythonanywhere.com/".slice(0,"https://itishub.pythonanywhere.com/".length-1)}}},o=(n(394),n(43)),c=n(51),l=n.n(c),m=n(354),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"meetup-container"},[n("h2",{staticClass:"meetup-title"},[t._v(t._s(t.meetup.title))]),t._v(" "),n("p",[t._v(t._s(t.meetup.date))]),t._v(" "),n("p",[t._v(t._s(t.meetup.description))]),t._v(" "),n("h3",{staticClass:"meetup-program-title"},[t._v("Программа митапа:")]),t._v(" "),t.meetup.speakers.length>0?n("ul",{staticClass:"meetup-program"},t._l(t.meetup.speakers,(function(e){return n("li",{key:e.name,staticClass:"speaker"},[n("div",{staticClass:"speaker-avatar-container"},[n("div",{staticClass:"speaker-avatar",style:{"background-image":"url("+e.avatar+")"}}),t._v(" "),n("img",{attrs:{src:e.avatar,alt:""}})]),t._v(" "),n("div",{staticClass:"speaker-description"},[n("p",{staticClass:"speaker-name"},[t._v("\n          "+t._s(e.name)+",\n          "),n("span",{staticClass:"speaker-company"},[t._v(t._s(e.company))])]),t._v(" "),n("p",[t._v(t._s(e.description))])])])})),0):n("p",{staticClass:"empty-program-message"},[t._v("В разработке")]),t._v(" "),n("div",{staticClass:"timepad-info"},[n("p",[t._v("Зарегистрироваться на мероприятие можно здесь:")]),t._v(" "),n("v-btn",{staticClass:"timepad-button",attrs:{color:"#33aade",link:"",depressed:"",href:t.meetup.link,target:"_blank"}},[t._v("\n      записаться\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a})},394:function(t,e,n){"use strict";var r=n(376);n.n(r).a},395:function(t,e,n){(e=n(13)(!1)).push([t.i,".meetup-container{margin-top:40px;margin-bottom:10px;border-radius:20px;transition:background-color .5s;padding:15px}.meetup-title{font-size:30px}.empty-program-message{height:200px;display:flex;justify-content:center;align-items:center}.meetup-program-title{font-size:22px;margin-bottom:20px}.meetup-program{list-style-type:none;padding:0!important}.speaker{display:flex;flex-direction:row;grid-gap:20px;gap:20px;margin-bottom:20px}.speaker-avatar-container{width:100px;height:100px;border:3px solid #fff;border-radius:50%;overflow:hidden}.speaker-avatar{background-size:cover;background-color:#d3d3d3;width:100%;height:100%}.speaker-name{font-size:25px}.speaker-description{width:60%}.speaker-company{font-weight:700}.meetup-container:hover{background-color:var(--lighten_bg)}.timepad-info{display:flex;flex-direction:row;justify-content:space-between;align-items:center;grid-gap:20px;gap:20px}.timepad-info>p{margin-bottom:0}.timepad-button{font-size:15px;letter-spacing:normal;text-transform:none;color:#fff!important}@media screen and (max-width:568px){.meetup-title{font-size:25px}}@media screen and (max-width:390px){.meetup-container{margin-top:30px}.meetup-title{font-size:22px}.speaker-description{font-size:13px}.meetup-program-title{font-size:18px}.speaker-avatar-container{width:70px;height:70px}.speaker-name{font-size:18px}.timepad-info{flex-wrap:wrap}}",""]),t.exports=e},396:function(t,e,n){t.exports=n.p+"img/danya.fd6b090.png"},397:function(t,e,n){t.exports=n.p+"img/adelya.b9e7e0a.png"},398:function(t,e,n){t.exports=n.p+"img/rasim.cee8f86.png"},399:function(t,e,n){"use strict";var r=n(377);n.n(r).a},400:function(t,e,n){(e=n(13)(!1)).push([t.i,".meetup-name[data-v-3e1940c9]{margin:30px auto 20px;text-align:center;width:70%}.info-container[data-v-3e1940c9]{width:100%;padding:10px 20px 0}.contact-info[data-v-3e1940c9]{display:flex;flex-direction:row;align-items:center;grid-gap:20px;gap:20px}.info-icon[data-v-3e1940c9]{font-size:40px}.meetup-list[data-v-3e1940c9]{list-style-type:none;padding:0!important}.meetup[data-v-3e1940c9]{display:flex;flex-direction:column}.email[data-v-3e1940c9]{color:var(--color);text-decoration:underline}@media screen and (max-width:568px){.meetup-name[data-v-3e1940c9]{font-size:25px}.info-icon[data-v-3e1940c9]{font-size:35px}}@media screen and (max-width:390px){.meetup-name[data-v-3e1940c9]{font-size:20px}.info-icon[data-v-3e1940c9]{font-size:30px}}",""]),t.exports=e},420:function(t,e,n){"use strict";n.r(e);var r={components:{Meetup:n(387).default},data:function(){return{meetups:[{title:"SDA, пилотный митап",date:"03.06.2022",description:"Собрали доклады ребят про опыт работы в продуктовых компаниях, интересных задачах, постороении процессов внутри команд.",speakers:[{name:"Даниил Трофимов",avatar:n(396),company:"Sbermarket",description:"Кто такой FrontOps? Расскажу про команду платформы фронтенда"},{name:"Аделя Сабирзянова",avatar:n(397),company:"Tinkoff",description:"Почему важен системный анализ? Расскажу про Системную аналитику в команде лояльности"},{name:"Расим Гарипов",avatar:n(398),company:"Piano",description:"Несколько инструментов DataOps, которые могут вам пригодиться: Flyway, Pecona Toolkit"}],link:"https://forms.gle/2SpmruWHj6Ri6nucA"}]}}},o=(n(399),n(43)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-container"},[e("h1",{staticClass:"meetup-name"},[this._v("Student Developer Academy")]),this._v(" "),this._m(0),this._v(" "),e("ul",{staticClass:"meetup-list"},this._l(this.meetups,(function(t){return e("Meetup",{key:t.title,attrs:{meetup:t}})})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-container"},[e("p",{staticClass:"description"},[this._v("\n      Площадка на которой студенты могут поделиться промышленным опытом\n      разработки и попробовать себя в роли спикера. Встречи проводятся в\n      формате митапов.\n    ")]),this._v(" "),e("div",{staticClass:"contact-info"},[e("p",{staticClass:"info-icon"},[this._v("ℹ️")]),this._v(" "),e("p",{staticClass:"info-description"},[this._v("\n        Подать заявку на доклад можно написав нам на\n        "),e("a",{staticClass:"email",attrs:{href:"mailto:itis-hub@gmail.com"}},[this._v("itishub.adm@gmail.com")])])])])}],!1,null,"3e1940c9",null);e.default=component.exports;installComponents(component,{Meetup:n(387).default})}}]);