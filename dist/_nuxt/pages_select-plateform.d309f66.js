(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(t,n,e){t.exports=e.p+"img/amd.fddea6b.jpg"},160:function(t,n,e){t.exports=e.p+"img/intel.fe5c812.png"},161:function(t,n,e){t.exports=e.p+"img/laptop.46d96c4.png"},163:function(t,n,e){var content=e(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(35).default)("5d1d6d78",content,!0,{sourceMap:!1})},167:function(t,n,e){"use strict";var c=e(163);e.n(c).a},168:function(t,n,e){(n=e(34)(!1)).push([t.i,".content-2-card[data-v-7aafb656]{width:360px}@media only screen and (max-width:970px){.content-2-card[data-v-7aafb656]{width:100%!important;margin-bottom:2.5rem!important}.content-2-container[data-v-7aafb656]{flex-wrap:wrap!important}.content-2-btn[data-v-7aafb656]{width:100%!important}}",""]),t.exports=n},174:function(t,n,e){"use strict";e(66);var c=e(160),o=e.n(c),r=e(159),l=e.n(r),d=e(161),m=e.n(d),f=e(6),h=e.n(f),v={props:{title:{required:!1,default:"Featured Products"}},data:function(){return{list:[{thumbnail:o.a,title:"Intel Gaming PC"},{thumbnail:l.a,title:"AMD Gaming PC"},{thumbnail:m.a,title:"Laptops"},{thumbnail:l.a,title:"AMD Gaming PC"}],style:{container:{}}}},methods:{plateform_selected:function(t){this.$router.push("/build-your-own-pc/"+t.split(" ").join("-").toLowerCase())}},mounted:function(){this.style.container.minHeight=h()(window).height()/2+"px"}},w=(e(167),e(8)),component=Object(w.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid mt-5",style:t.style.container},[e("h1",{staticClass:"w-100 text-center text-white ls-1"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"w-100 d-flex justify-content-center content-2-container align-items-end"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-5 content-2-card"},[e("img",{staticClass:"p-2",attrs:{src:n.thumbnail,width:"100%",alt:""}}),t._v(" "),e("div",{staticClass:"w-100 text-center mt-3"},[e("h4",{staticClass:"mt-5 text-white"},[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"mt-4 text-primary"},[t._v("Rs. 1,231.00")])])])})),0)])}),[],!1,null,"7aafb656",null);n.a=component.exports},198:function(t,n,e){"use strict";e.r(n);var c={components:{"content-2":e(174).a},methods:{select:function(t){this.$router.push("/build-your-own-pc/"+t)}}},o=e(8),component=Object(o.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container-fluid"},[this._m(0),this._v(" "),n("content-2",{attrs:{title:"Select your plateform"},on:{select:this.select}})],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"w-100"},[n("br"),n("br")])}],!1,null,null,null);n.default=component.exports}}]);