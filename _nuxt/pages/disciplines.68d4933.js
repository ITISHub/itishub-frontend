(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{371:function(t,n,e){var content=e(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("a86f9896",content,!0,{sourceMap:!1})},397:function(t,n,e){"use strict";var l=e(371);e.n(l).a},398:function(t,n,e){(n=e(13)(!1)).push([t.i,".greeting[data-v-a9c7b0f6]{text-align:center;margin-top:2em}.description[data-v-a9c7b0f6]{max-width:600px;margin:auto}.menu-content[data-v-a9c7b0f6]{max-width:700px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr))}.menu-content__card[data-v-a9c7b0f6]{margin:5px}",""]),t.exports=n},406:function(t,n,e){"use strict";e.r(n);var l=e(373),o=e(362),c={name:"Disciplines",transitions:"disciplines",components:{MenuContainer:l.default,DynamicCard:o.default},data:function(){return{disciplines:[{id:2,title:"Матанализ",url:"https://www.youtube.com/playlist?list=PLsoqA_9bazReZopDB8TxA9Zo4gajnEXx0"},{id:4,title:"Дискретная математика",url:"https://www.youtube.com/playlist?list=PLsoqA_9bazRcJltdojN1tlJzaqh7orrES"},{id:1,title:"Сети",url:"https://youtube.com/playlist?list=PLsoqA_9bazRcy3x8CYVifhJe8LtomSY73&si=p1nLM8-sjXxx9Msc"},{id:3,title:"Алгебра и Геометрия",url:"https://www.youtube.com/playlist?list=PLsoqA_9bazReQB4B3teAoorTTl6UDxQnX"}]}}},r=(e(397),e(43)),d=e(51),m=e.n(d),f=e(401),component=Object(r.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("v-container",{staticClass:"greeting"},[n("h1",{staticClass:"mb-3"},[this._v("Выберите предмет")]),this._v(" "),n("p",{staticClass:"description"},[this._v("\n      На сайте есть разборы теоретических и практических задач первого курса\n      ИТИСа, конспекты и прочие полезные материалы\n    ")]),this._v(" "),n("div",[n("v-container",{staticClass:"menu-content"},this._l(this.disciplines,(function(t){return n("DynamicCard",{key:t.id,staticClass:"menu-content__card",attrs:{title:t.title,link:t.url,"title-size":"20",target:"__blank"}})})),1)],1)])],1)}),[],!1,null,"a9c7b0f6",null);n.default=component.exports;m()(component,{DynamicCard:e(362).default}),m()(component,{VContainer:f.a})}}]);