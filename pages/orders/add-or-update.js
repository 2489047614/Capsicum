(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/orders/add-or-update"],{"363c":function(t,e,r){"use strict";var n=r("98d3"),u=r.n(n);u.a},5588:function(t,e,r){"use strict";r.r(e);var n=r("ff20"),u=r("84b9");for(var i in u)"default"!==i&&function(t){r.d(e,t,(function(){return u[t]}))}(i);r("363c");var a,s=r("f0c5"),o=Object(s["a"])(u["default"],n["b"],n["c"],!1,null,"ad1317e2",null,!1,n["a"],a);e["default"]=o.exports},"76cf":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(r("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r,n,u,i,a){try{var s=t[i](a),o=s.value}catch(c){return void r(c)}s.done?e(o):Promise.resolve(o).then(n,u)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var a=t.apply(e,r);function s(t){i(a,n,u,s,o,"next",t)}function o(t){i(a,n,u,s,o,"throw",t)}s(void 0)}))}}var s=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b0d3"))}.bind(null,r)).catch(r.oe)},o={data:function(){return{ruleForm:{orderid:this.getUUID(),tablename:"",userid:"",goodid:"",goodname:"",picture:"",buynumber:"",price:"",discountprice:"",total:"",discounttotal:"",type:"",status:"",address:""},user:{}}},components:{wPicker:s},computed:{},onLoad:function(){var e=a(n.default.mark((function e(r){var u,i,a,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=t.getStorageSync("nowTable"),e.next=3,this.$api.session(u);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=t.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid),!r.id){e.next=13;break}return this.ruleForm.id=r.id,e.next=11,this.$api.info("orders",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(!r.cross){e.next=62;break}a=t.getStorageSync("crossObj"),e.t0=n.default.keys(a);case 16:if((e.t1=e.t0()).done){e.next=62;break}if(s=e.t1.value,"orderid"!=s){e.next=21;break}return this.ruleForm.orderid=a[s],e.abrupt("continue",16);case 21:if("tablename"!=s){e.next=24;break}return this.ruleForm.tablename=a[s],e.abrupt("continue",16);case 24:if("userid"!=s){e.next=27;break}return this.ruleForm.userid=a[s],e.abrupt("continue",16);case 27:if("goodid"!=s){e.next=30;break}return this.ruleForm.goodid=a[s],e.abrupt("continue",16);case 30:if("goodname"!=s){e.next=33;break}return this.ruleForm.goodname=a[s],e.abrupt("continue",16);case 33:if("picture"!=s){e.next=36;break}return this.ruleForm.picture=a[s],e.abrupt("continue",16);case 36:if("buynumber"!=s){e.next=39;break}return this.ruleForm.buynumber=a[s],e.abrupt("continue",16);case 39:if("price"!=s){e.next=42;break}return this.ruleForm.price=a[s],e.abrupt("continue",16);case 42:if("discountprice"!=s){e.next=45;break}return this.ruleForm.discountprice=a[s],e.abrupt("continue",16);case 45:if("total"!=s){e.next=48;break}return this.ruleForm.total=a[s],e.abrupt("continue",16);case 48:if("discounttotal"!=s){e.next=51;break}return this.ruleForm.discounttotal=a[s],e.abrupt("continue",16);case 51:if("type"!=s){e.next=54;break}return this.ruleForm.type=a[s],e.abrupt("continue",16);case 54:if("status"!=s){e.next=57;break}return this.ruleForm.status=a[s],e.abrupt("continue",16);case 57:if("address"!=s){e.next=60;break}return this.ruleForm.address=a[s],e.abrupt("continue",16);case 60:e.next=16;break;case 62:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),methods:{pictureTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture=t.$base.url+"upload/"+e.file,t.$forceUpdate()}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=a(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.orderid){t.next=3;break}return this.$utils.msg("订单id不能为空"),t.abrupt("return");case 3:if(this.ruleForm.userid){t.next=6;break}return this.$utils.msg("用户id不能为空"),t.abrupt("return");case 6:if(this.ruleForm.goodid){t.next=9;break}return this.$utils.msg("商品id不能为空"),t.abrupt("return");case 9:if(this.ruleForm.buynumber){t.next=12;break}return this.$utils.msg("购买数量不能为空"),t.abrupt("return");case 12:if(!this.ruleForm.buynumber||this.$validate.isIntNumer(this.ruleForm.buynumber)){t.next=15;break}return this.$utils.msg("购买数量应输入整数"),t.abrupt("return");case 15:if(this.ruleForm.price){t.next=18;break}return this.$utils.msg("价格/积分不能为空"),t.abrupt("return");case 18:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){t.next=21;break}return this.$utils.msg("价格/积分应输入数字"),t.abrupt("return");case 21:if(!this.ruleForm.discountprice||this.$validate.isNumber(this.ruleForm.discountprice)){t.next=24;break}return this.$utils.msg("折扣价格应输入数字"),t.abrupt("return");case 24:if(this.ruleForm.total){t.next=27;break}return this.$utils.msg("总价格/总积分不能为空"),t.abrupt("return");case 27:if(!this.ruleForm.total||this.$validate.isNumber(this.ruleForm.total)){t.next=30;break}return this.$utils.msg("总价格/总积分应输入数字"),t.abrupt("return");case 30:if(!this.ruleForm.discounttotal||this.$validate.isNumber(this.ruleForm.discounttotal)){t.next=33;break}return this.$utils.msg("折扣总价格应输入数字"),t.abrupt("return");case 33:if(!this.ruleForm.type||this.$validate.isIntNumer(this.ruleForm.type)){t.next=36;break}return this.$utils.msg("支付类型（1：现金 2：积分）应输入整数"),t.abrupt("return");case 36:if(!this.ruleForm.id){t.next=41;break}return t.next=39,this.$api.update("orders",this.ruleForm);case 39:t.next=43;break;case 41:return t.next=43,this.$api.add("orders",this.ruleForm);case 43:this.$utils.msgBack("提交成功");case 44:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),n=e.getMonth()+1,u=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),n=n>9?n:"0"+n,u=u>9?u:"0"+u,"".concat(r,"-").concat(n,"-").concat(u)},toggleTab:function(t){this.$refs[t].show()}}};e.default=o}).call(this,r("543d")["default"])},"84b9":function(t,e,r){"use strict";r.r(e);var n=r("76cf"),u=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=u.a},"98d3":function(t,e,r){},fbbb:function(t,e,r){"use strict";(function(t){r("54d1"),r("921b");n(r("66fd"));var e=n(r("5588"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},ff20:function(t,e,r){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))}},[["fbbb","common/runtime","common/vendor"]]]);