(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/add-or-update"],{"2aae":function(e,t,r){"use strict";r.r(t);var n=r("471e"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},"471e":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,u,i){try{var s=e[u](i),o=s.value}catch(c){return void r(c)}s.done?t(o):Promise.resolve(o).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,o,"next",e)}function o(e){u(i,n,a,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b0d3"))}.bind(null,r)).catch(r.oe)},o={data:function(){return{ruleForm:{userid:"",address:"",name:"",phone:"",isdefault:""},user:{}}},components:{wPicker:s},computed:{},onLoad:function(){var t=i(n.default.mark((function t(r){var a,u,i,s;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.userid=e.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid),!r.id){t.next=13;break}return this.ruleForm.id=r.id,t.next=11,this.$api.info("address",this.ruleForm.id);case 11:u=t.sent,this.ruleForm=u.data;case 13:if(!r.cross){t.next=35;break}i=e.getStorageSync("crossObj"),t.t0=n.default.keys(i);case 16:if((t.t1=t.t0()).done){t.next=35;break}if(s=t.t1.value,"userid"!=s){t.next=21;break}return this.ruleForm.userid=i[s],t.abrupt("continue",16);case 21:if("address"!=s){t.next=24;break}return this.ruleForm.address=i[s],t.abrupt("continue",16);case 24:if("name"!=s){t.next=27;break}return this.ruleForm.name=i[s],t.abrupt("continue",16);case 27:if("phone"!=s){t.next=30;break}return this.ruleForm.phone=i[s],t.abrupt("continue",16);case 30:if("isdefault"!=s){t.next=33;break}return this.ruleForm.isdefault=i[s],t.abrupt("continue",16);case 33:t.next=16;break;case 35:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),methods:{getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=i(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.address){e.next=6;break}return this.$utils.msg("地址不能为空"),e.abrupt("return");case 6:if(this.ruleForm.name){e.next=9;break}return this.$utils.msg("收货人不能为空"),e.abrupt("return");case 9:if(this.ruleForm.phone){e.next=12;break}return this.$utils.msg("电话不能为空"),e.abrupt("return");case 12:if(this.ruleForm.isdefault){e.next=15;break}return this.$utils.msg("是否默认地址[是/否]不能为空"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("address",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("address",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,r("543d")["default"])},"6e3f":function(e,t,r){"use strict";r.r(t);var n=r("c7f7"),a=r("2aae");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("c16d");var i,s=r("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"25bd4468",null,!1,n["a"],i);t["default"]=o.exports},"9aef":function(e,t,r){"use strict";(function(e){r("54d1"),r("921b");n(r("66fd"));var t=n(r("6e3f"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},a35d:function(e,t,r){},c16d:function(e,t,r){"use strict";var n=r("a35d"),a=r.n(n);a.a},c7f7:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},u=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}))}},[["9aef","common/runtime","common/vendor"]]]);