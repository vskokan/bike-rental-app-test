(function(e){function t(t){for(var n,c,r=t[0],o=t[1],u=t[2],d=0,p=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,r=1;r<i.length;r++){var o=i[r];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=i[0]))}return e}var n={},a={app:0},s=[];function c(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=e,c.c=n,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(i,n,function(t){return e[t]}.bind(null,n));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=o;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"46a5":function(e,t,i){},5371:function(e,t,i){"use strict";i("be09")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),i("AddBikeForm"),i("RentedList"),i("AvailableList")],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("i",{staticClass:"fas fa-bicycle"}),e._v("Bike Rental!")])}],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._m(0),i("div",{staticClass:"form"},[i("div",{staticClass:"input-container"},[i("div",{staticClass:"label",class:{error:!e.isNameValid}},[e._v("Bike name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.bike.name,expression:"bike.name"}],staticClass:"name",attrs:{type:"text"},domProps:{value:e.bike.name},on:{input:[function(t){t.target.composing||e.$set(e.bike,"name",t.target.value)},e.validateName]}})]),i("div",{staticClass:"input-container"},[i("div",{staticClass:"label"},[e._v("Bike type")]),i("div",{staticClass:"select type",on:{click:function(t){e.showTypes=!e.showTypes}}},[e._v(" "+e._s(e.bike.type)+" "),i("i",{staticClass:"fas",class:{"fa-chevron-down":!e.showTypes,"fa-chevron-up":e.showTypes}})]),e.showTypes?i("div",{staticClass:"options"},e._l(e.types,(function(t,n){return i("div",{key:n,staticClass:"option",class:{chosen:e.bike.type==t},on:{click:function(i){e.bike.type=t,e.showTypes=!e.showTypes}}},[e._v(" "+e._s(t)+" ")])})),0):e._e()]),i("div",{staticClass:"input-container"},[i("div",{staticClass:"label",class:{error:!e.isPriceValid}},[e._v(" Price per hour, $ ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.bike.price,expression:"bike.price"}],staticClass:"price",attrs:{type:"number",step:"0.01",min:"0",placeholder:"00,00"},domProps:{value:e.bike.price},on:{input:[function(t){t.target.composing||e.$set(e.bike,"price",t.target.value)},e.validatePrice]}})]),i("button",{staticClass:"submit",on:{click:e.submit}},[e.isSending?i("i",{staticClass:"fas fa-sync"}):i("span",[e._v("Submit")])])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h2",{staticClass:"header"},[i("i",{staticClass:"fas fa-plus"}),e._v("Add new bike")])}],o=i("5530"),u=(i("b0c0"),i("b680"),i("2f62")),l={data:function(){return{bike:{name:"",type:"Custom",price:""},types:["Custom","Mountain","Road","Children"],showTypes:!1,isNameValid:!0,isPriceValid:!0}},computed:Object(u["c"])(["isSending","isAdded"]),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["addBike"])),{},{validateName:function(){0==this.bike.name.length?this.isNameValid=!1:this.isNameValid=!0},validatePrice:function(){0==this.bike.price?this.isPriceValid=!1:this.isPriceValid=!0},validate:function(){return this.validateName(),this.validatePrice(),!(!this.isNameValid||!this.isPriceValid)},submit:function(){this.validate()&&(this.bike.price=(+this.bike.price).toFixed(2),this.addBike(this.bike),this.bike.name="",this.bike.type="Custom",this.bike.price=0)}})},d=l,p=(i("7abd"),i("2877")),f=Object(p["a"])(d,c,r,!1,null,"1552e8a6",null),b=f.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h2",{staticClass:"header"},[i("i",{staticClass:"fas fa-biking"}),e._v("Rented bikes ($"+e._s(e.totalSum.toFixed(2))+") ")]),e.isLoading?i("div",{staticClass:"loadblock"},[i("i",{staticClass:"fas fa-sync"})]):i("div",{staticClass:"list"},[0==e.rentedBikes.length?i("span",{staticClass:"empty"},[e._v("No rented bikes")]):e._e(),e._l(e.rentedBikes,(function(e){return i("Bike",{key:e.id,attrs:{bike:e}})}))],2)])},h=[],m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bike"},[i("div",{staticClass:"main"},[i("div",{staticClass:"info"},[i("span",{staticClass:"name"},[e._v(e._s(e.bike.name))]),i("span",{staticClass:"type"},[e._v(e._s(e.bike.type))]),i("span",{staticClass:"price"},[e._v("$"+e._s(e.bike.price)+"/h")])]),e.isExpanded?e._e():i("div",{staticClass:"buttons"},[e.available?e._e():i("span",{staticClass:"total"},[e._v("$"+e._s(e.bike.sum)+" for "+e._s(e.bike.hours)+"h")]),e.available?i("button",{staticClass:"simple",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[e._v(" Rent ")]):e._e(),e.available?i("button",{staticClass:"delete",on:{click:function(t){return e.deleteBike(e.bike.id)}}},[e._v(" Delete ")]):e._e(),e.available?e._e():i("button",{staticClass:"delete",on:{click:function(t){return e.cancelRent(e.bike.id)}}},[e._v(" Cancel rent ")])])]),e.isExpanded?i("div",{staticClass:"hidden"},[i("div",{staticClass:"calculator"},[i("div",{staticClass:"time noselect"},[i("i",{staticClass:"fas fa-minus",on:{click:function(){1!==e.time&&e.time--}}}),e._v(" "+e._s(e.time)+" h "),i("i",{staticClass:"fas fa-plus",on:{click:function(t){e.time++}}})]),i("div",{staticClass:"price"},[e._v(" Total price: "),i("span",[e._v(" $"+e._s(e.totalPrice.toFixed(2))+" ")])])]),i("div",{staticClass:"buttons"},[i("button",{staticClass:"submit",on:{click:e.rent}},[e._v("Submit")]),i("button",{staticClass:"delete",on:{click:function(t){e.isExpanded=!e.isExpanded,e.time=1}}},[e._v(" Cancel ")])])]):e._e()])},k=[],_={props:["bike","available"],data:function(){return{isExpanded:!1,time:1}},computed:{totalPrice:function(){return this.time<=20?this.time*this.bike.price:20*this.bike.price+this.bike.price/2*(this.time-20)}},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["rentBike","deleteBike","cancelRent"])),{},{decreaseTime:function(){1!==this.time&&--this.time},rent:function(){var e={bike:this.bike.id,time:this.time};this.rentBike(e),this.time=1,this.isExpanded=!this.isExpanded}})},g=_,C=(i("5371"),Object(p["a"])(g,m,k,!1,null,"53079ad9",null)),y=C.exports,B={components:{Bike:y},data:function(){return{}},computed:Object(u["c"])(["rentedBikes","isLoading","totalSum"]),methods:Object(o["a"])({},Object(u["b"])(["fetchRentedBikes"])),mounted:function(){this.fetchRentedBikes()}},x=B,w=(i("9614"),Object(p["a"])(x,v,h,!1,null,"6a810cdb",null)),O=w.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h2",{staticClass:"header"},[i("i",{staticClass:"fas fa-check-circle"}),e._v("Available bikes ("+e._s(e.availableBikes.length)+")")]),e.isLoading?i("div",{staticClass:"loadblock"},[i("i",{staticClass:"fas fa-sync"})]):i("div",{staticClass:"list"},[0==e.availableBikes.length?i("span",{staticClass:"empty"},[e._v("No available bikes")]):e._e(),e._l(e.availableBikes,(function(e){return i("Bike",{key:e.id,attrs:{bike:e,available:!0}})}))],2)])},T=[],S={components:{Bike:y},data:function(){return{}},computed:Object(u["c"])(["availableBikes","isLoading"]),methods:Object(o["a"])({},Object(u["b"])(["fetchAvailableBikes"])),mounted:function(){this.fetchAvailableBikes()}},P=S,R=(i("8220"),Object(p["a"])(P,j,T,!1,null,"27bb3fdb",null)),A=R.exports,E={name:"App",components:{AddBikeForm:b,RentedList:O,AvailableList:A}},L=E,$=(i("034f"),Object(p["a"])(L,a,s,!1,null,null,null)),N=$.exports,V=i("1da1"),H=(i("96cf"),i("d3b7"),i("e9c4"),{actions:{fetchAvailableBikes:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.next=3,fetch("/api/bikes/",{method:"GET"});case 3:if(n=t.sent,!n.ok){t.next=11;break}return t.next=7,n.json();case 7:a=t.sent,setTimeout((function(){var e=a.data;i("updateAvailableBikes",e),i("updateLoadingStatus")}),1e3),t.next=12;break;case 11:console.log("Ошибка HTTP: "+n.status);case 12:case"end":return t.stop()}}),t)})))()},fetchRentedBikes:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.next=3,fetch("/api/bikes/rent",{method:"GET"});case 3:if(n=t.sent,!n.ok){t.next=11;break}return t.next=7,n.json();case 7:a=t.sent,setTimeout((function(){var e=a.data;i("updateRentedBikes",e)}),1e3),t.next=12;break;case 11:console.log("Ошибка HTTP: "+n.status);case 12:case"end":return t.stop()}}),t)})))()},addBike:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function i(){var n,a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.commit,a=e.dispatch,n("updateSendingStatus",!0),n("updateAddingStatus",!1),i.next=5,fetch("/api/bikes/",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 5:s=i.sent,s.ok?(setTimeout((function(){n("updateSendingStatus",!1),n("updateAddingStatus",!0)}),1e3),a("fetchAvailableBikes")):alert("Ошибка HTTP: "+s.status);case 7:case"end":return i.stop()}}),i)})))()},rentBike:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.dispatch,i.next=3,fetch("/api/bikes/rent",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 3:a=i.sent,a.ok?(n("fetchRentedBikes"),n("fetchAvailableBikes")):alert("Ошибка HTTP: "+a.status);case 5:case"end":return i.stop()}}),i)})))()},deleteBike:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.dispatch,i.next=3,fetch("/api/bikes/".concat(t),{method:"DELETE"});case 3:a=i.sent,a.ok?n("fetchAvailableBikes"):alert("Ошибка HTTP: "+a.status);case 5:case"end":return i.stop()}}),i)})))()},cancelRent:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.dispatch,i.next=3,fetch("/api/bikes/rent/".concat(t),{method:"DELETE"});case 3:a=i.sent,a.ok?(n("fetchAvailableBikes"),n("fetchRentedBikes")):alert("Ошибка HTTP: "+a.status);case 5:case"end":return i.stop()}}),i)})))()}},mutations:{updateAvailableBikes:function(e,t){e.availableBikes=t},updateRentedBikes:function(e,t){e.rentedBikes=t},updateLoadingStatus:function(e){e.isLoading=!1},updateSendingStatus:function(e,t){e.isSending=t},updateAddingStatus:function(e,t){e.isAdded=t}},state:{availableBikes:[],rentedBikes:[],isLoading:!0,isSending:!1,isAdded:!1},getters:{availableBikes:function(e){return e.availableBikes},rentedBikes:function(e){return e.rentedBikes},isLoading:function(e){return e.isLoading},isSending:function(e){return e.isSending},isAdded:function(e){return e.isAdded},totalSum:function(e){return console.log(e.rentedBikes.reduce((function(e,t){return e+t}),0)),e.rentedBikes.reduce((function(e,t){return e+ +t.sum}),0)}}});n["a"].use(u["a"]);var F=new u["a"].Store({modules:{bikes:H}});n["a"].config.productionTip=!1,new n["a"]({store:F,render:function(e){return e(N)}}).$mount("#app")},"7abd":function(e,t,i){"use strict";i("b0bf")},8220:function(e,t,i){"use strict";i("bd2f")},"85ec":function(e,t,i){},9614:function(e,t,i){"use strict";i("46a5")},b0bf:function(e,t,i){},bd2f:function(e,t,i){},be09:function(e,t,i){}});
//# sourceMappingURL=app.344bd218.js.map