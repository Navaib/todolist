(function(){"use strict";var t={9644:function(t,e,n){var o=n(9242),a=n(3396);function s(t,e,n,s,i,l){const r=(0,a.up)("Navbar"),d=(0,a.up)("Notes"),c=(0,a.up)("AddBtn"),h=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{onGetSearch:e[0]||(e[0]=t=>i.search=t),lang:i.lang,onChangeLang:l.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(d,{notes:l.filterNotes,onChangeNote:l.changeNote,onDelNote:l.delNote,lang:i.lang,search:i.search},null,8,["notes","onChangeNote","onDelNote","lang","search"]),(0,a.wy)((0,a.Wm)(c,{onClick:l.openModal},null,8,["onClick"]),[[o.F8,!i.search]]),(0,a.wy)((0,a.Wm)(h,{onEditedNote:l.editedNote,onCloseModal:l.closeModal,onAddNote:l.addNote,edit:i.edit,currentId:i.currentId,editNote:i.editNote,lang:i.lang},null,8,["onEditedNote","onCloseModal","onAddNote","edit","currentId","editNote","lang"]),[[o.F8,i.modalWind]])],64)}n(7658);var i=n(7139),l=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/close.1d4d165f.svg";const d={class:"header"},c={class:"header__notes"},h={class:"container"},g={class:"header__change"},u={key:0,class:"header__p"},_=["placeholder"],p={key:0,src:l,alt:""},w={key:1,src:r,alt:""};function f(t,e,n,s,l,r){return(0,a.wg)(),(0,a.iD)("header",d,[(0,a._)("div",c,["ru"==n.lang?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:e[0]||(e[0]=(...t)=>r.changeLang&&r.changeLang(...t)),class:"header__lang"}," UZ ")):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:e[1]||(e[1]=(...t)=>r.changeLang&&r.changeLang(...t)),class:"header__lang"},"RU")),(0,a._)("div",h,[(0,a._)("div",g,[(0,a.Wm)(o.uT,{name:"opp"},{default:(0,a.w5)((()=>[l.header?((0,a.wg)(),(0,a.iD)("p",u,(0,i.zw)(r.words.appbartitle[n.lang]),1)):(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text",placeholder:r.words.appbarseacrch[n.lang],class:"header__input","onUpdate:modelValue":e[2]||(e[2]=t=>l.search=t)},null,8,_)),[[o.nr,l.search]])])),_:1})])]),(0,a._)("button",{class:"header__search",onClick:e[3]||(e[3]=(...t)=>r.showSearch&&r.showSearch(...t))},[l.header?((0,a.wg)(),(0,a.iD)("img",p)):((0,a.wg)(),(0,a.iD)("img",w))])])])}var m={name:"NavbarTodo",props:{lang:String},inject:["words"],data(){return{search:"",header:!0}},watch:{search(t){this.$emit("getSearch",t)}},methods:{showSearch(){this.header=!this.header},changeLang(){this.$emit("changeLang","ru"==this.lang?"uz":"ru")}}},v=n(89);const b=(0,v.Z)(m,[["render",f]]);var N=b,y=n.p+"img/flex.4ed3d4be.svg",k=n.p+"img/grid.dbae4039.svg";const C={class:"changer"},z={class:"container changer__wrap"},S={class:"all__notes"},D={key:0,class:"ch__cont"},M=(0,a._)("img",{src:y,alt:""},null,-1),O={key:1,class:"ch__cont"},j=(0,a._)("img",{src:k,alt:""},null,-1),L={class:"container"};function x(t,e,n,o,s,l){const r=(0,a.up)("Note");return(0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",z,[(0,a._)("h3",S,(0,i.zw)(n.notes.length>0?l.words.infobar[n.lang]:l.words.noinfobar[n.lang]),1),(0,a._)("button",{class:"ch__btn",onClick:e[0]||(e[0]=t=>s.change=!s.change)},[s.change?((0,a.wg)(),(0,a.iD)("div",D,[M,(0,a._)("span",null,(0,i.zw)(l.words.list[n.lang]),1)])):((0,a.wg)(),(0,a.iD)("div",O,[j,(0,a._)("span",null,(0,i.zw)(l.words.grid[n.lang]),1)]))])]),(0,a._)("div",L,[n.notes.length>0?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)([s.change?s.grid:s.flex])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.notes,((e,o)=>((0,a.wg)(),(0,a.j4)(r,{search:t.search,lang:n.lang,key:o,note:e,onChangeNote:n=>t.$emit("changeNote",e.id),onDelNote:n=>t.$emit("delNote",e.id)},null,8,["search","lang","note","onChangeNote","onDelNote"])))),128))],2)):(0,a.kq)("",!0)])])}var T=n.p+"img/pen.092f5b23.svg",W=n.p+"img/trash.f04c87ff.svg";const $={class:"note__item"},I={class:"note__top"},A={class:"note__title"},Z={class:"note__date"},E={class:"note__desc"},B={class:"note__btns"},U=(0,a._)("img",{src:T,alt:"",class:"redact__img"},null,-1),q={class:"redact__span"},F=(0,a._)("img",{src:W,alt:"",class:"redact__img"},null,-1),J={class:"redact__span"};function R(t,e,n,s,l,r){return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",I,[(0,a._)("h4",A,(0,i.zw)(n.note.title),1),(0,a._)("p",Z,(0,i.zw)(n.note.date),1)]),(0,a._)("p",E,(0,i.zw)(n.note.desc),1),(0,a.wy)((0,a._)("div",B,[(0,a._)("button",{class:"note__btn redact",onClick:e[0]||(e[0]=e=>t.$emit("changeNote",n.note.id))},[U,(0,a._)("span",q,(0,i.zw)(r.words.editbtn[n.lang]),1)]),(0,a._)("button",{class:"note__btn delete",onClick:e[1]||(e[1]=e=>t.$emit("delNote",n.note.id))},[F,(0,a._)("span",J,(0,i.zw)(r.words.deledit[n.lang]),1)])],512),[[o.F8,!n.search]])])}var H={name:"NoteItemTodo",inject:["words"],props:{search:String,lang:String,note:{typeof:Object,default:{title:"",desc:"",date:"",id:""}}},data(){return{}}};const V=(0,v.Z)(H,[["render",R]]);var G=V,P={name:"NotesTodo",components:{Note:G},props:{notes:{typeof:Array},lang:String},data(){return{change:!0,flex:"changer__flex",grid:"changer__grid"}},inject:["words"]};const Q=(0,v.Z)(P,[["render",x]]);var Y=Q;const K=(0,a._)("img",{src:T,alt:""},null,-1),X=[K];function tt(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("button",{class:"add__btn",onClick:e[0]||(e[0]=(...t)=>i.openModal&&i.openModal(...t))},X)}var et={name:"AddBtnTodo",methods:{openModal(){this.$emit("openModal",!0)}}};const nt=(0,v.Z)(et,[["render",tt]]);var ot=nt;const at={class:"form"},st={class:"add__h"},it={class:"form__input"},lt=(0,a._)("p",{class:"input__title"},"Title",-1),rt={class:"form__input"},dt=(0,a._)("p",{class:"input__title"},"Content",-1),ct={class:"modal__btns"};function ht(t,e,n,s,l,r){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"show"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal",onClick:e[6]||(e[6]=(...t)=>r.closeModal&&r.closeModal(...t))},[(0,a._)("div",{class:"modal__content",onClick:e[5]||(e[5]=(0,o.iM)((()=>{}),["stop"]))},[(0,a._)("form",at,[(0,a._)("h3",st,(0,i.zw)(n.edit?r.words.titlewindowedit[n.lang]:r.words.titlewindow[n.lang]),1),(0,a._)("div",it,[lt,(0,a.wy)((0,a._)("input",{type:"text",class:"input",placeholder:"Title","onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t)},null,512),[[o.nr,l.title]])]),(0,a._)("div",rt,[dt,(0,a.wy)((0,a._)("input",{type:"text",class:"input",placeholder:"Content","onUpdate:modelValue":e[1]||(e[1]=t=>l.content=t)},null,512),[[o.nr,l.content]])])]),(0,a._)("div",ct,[(0,a._)("button",{class:"modal__btn cansel",onClick:e[2]||(e[2]=(...t)=>r.closeModal&&r.closeModal(...t))},(0,i.zw)(r.words.closebtn[n.lang]),1),n.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"modal__btn add",onClick:e[4]||(e[4]=(...t)=>r.changeNote&&r.changeNote(...t))},(0,i.zw)(r.words.editwindowbtn[n.lang]),1)):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"modal__btn add",onClick:e[3]||(e[3]=(...t)=>r.addNote&&r.addNote(...t))},(0,i.zw)(r.words.addbtn[n.lang]),1))])])])])),_:1})}var gt={name:"ModalTodo",props:{edit:Boolean,currentId:Number,editNote:Object,lang:String},inject:["words"],data(){return{title:"",content:"",id:1}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.content=""},addNote(){if(""!=this.title&&""!=this.content){const t={id:this.id++,title:this.title,desc:this.content,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.title="",this.content=""}},changeNote(){if(""!=this.title&&""!=this.content){const t={id:this.editNote.id,title:this.title,desc:this.content,date:(new Date).toLocaleDateString()};this.$emit("editedNote",t),this.closeModal()}}}};const ut=(0,v.Z)(gt,[["render",ht]]);var _t=ut;const pt={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Еslatmalar yoq"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"}};var wt=pt,ft={name:"App",components:{Navbar:N,Notes:Y,AddBtn:ot,Modal:_t},data(){return{search:"",currentId:1,notes:[],modalWind:!1,editNote:{},edit:!1,lang:"ru",langwords:{}}},mounted(){this.getNotes(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langwords=wt,localStorage.words=JSON.stringify(this.langwords)},provide(){return{words:localStorage.words?JSON.parse(localStorage.words):wt}},computed:{filterNotes(){return this.search?this.notes.filter((t=>t.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}},methods:{addNote(t){this.notes.push(t),this.modalWind=!1},openModal(){this.edit=!1,this.modalWind=!0},closeModal(){this.modalWind=!1},changeNote(t){this.edit=this.modalWind=!0;let e=this.notes.find((e=>e.id==t));this.editNote=e},editedNote(t){this.notes.forEach((e=>{e.id==t.id&&(e.title=t.title,e.desc=t.desc,e.date=t.date)}))},delNote(t){let e=this.notes.findIndex((e=>e.id==t));this.notes.splice(e,1)},getNotes(){const t=localStorage.notes;t&&(this.notes=JSON.parse(t))},changeLang(t){this.lang=localStorage.lang=t}},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const mt=(0,v.Z)(ft,[["render",s]]);var vt=mt;(0,o.ri)(vt).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],s=t[c][2];for(var l=!0,r=0;r<o.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(l=!1,s<i&&(i=s));if(l){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/todolist/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,i=o[0],l=o[1],r=o[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(r)var c=r(n)}for(e&&e(o);d<i.length;d++)s=i[d],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9644)}));o=n.O(o)})();
//# sourceMappingURL=app.06220213.js.map