webpackJsonp([5],{"2uFj":function(e,t,n){"use strict";t.a={server:{dev:"http://dev-voteservice.zhph.lan",prod:"http://voteservice.zhphfinance.com",local:"http://voteservice.zhphfinance.com"},wxUrl:"http://voteproject.zhphfinance.com",appid:"wx0d176f2b15375cea",isDebug:!1}},"3pBO":function(e,t){},"68Np":function(e,t){},"8vzP":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transitionName}},[t("router-view")],1)],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App",data:function(){return{transitionName:""}},watch:{$route:function(e,t){e.name;var n=e.meta.index,i=t.meta.index;this.transitionName=n<i?"slide-right":"slide-left"}}},s,!1,function(e){n("3pBO")},null,null).exports,a=n("/ocq"),r=n("//Fk"),c=n.n(r),u=n("mtWM"),p=n.n(u),d=n("2uFj"),l=p.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:2e4,withCredentials:!0});l.interceptors.request.use(function(e){return e.url=d.a.server[window.env]+e.url,console.log("config",e),e},function(e){return c.a.reject(e).catch(e)}),l.interceptors.response.use(function(e){return e},function(e){var t=n("MF5+").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问";break;case 404:e.message="请求地址出错: "+e.response.config.url;break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持"}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),new t.reject(e).catch(e)});var h=l,m=n("lbHh"),w=n.n(m),v=n("3BeM");i.a.use(v.a);i.a.use(a.a);var f=new a.a({mode:"history",base:"/vote-mobile/",routes:[{path:"/",title:"闪耀之星报名",name:"activity",meta:{index:0},component:function(){return n.e(1).then(n.bind(null,"Ek/6"))}},{path:"/enter",title:"闪耀之星报名",name:"activityEnter",meta:{index:1},component:function(){return n.e(0).then(n.bind(null,"imRg"))}},{path:"/success",title:"闪耀之星报名",meta:{index:2},name:"activityEnterSuccess",component:function(){return n.e(3).then(n.bind(null,"qRN3"))}},{path:"/rule",title:"闪耀之星报名",meta:{index:3},name:"activityRule",component:function(){return n.e(2).then(n.bind(null,"uKl6"))}}]});f.beforeEach(function(e,t,n){if(console.log("to",e),document.title=e.meta.title?e.meta.title:"闪耀之星报名","activityEnter"===e.name)if(w.a.get("wechatId")&&w.a.get("submitForm"))f.push({name:"activityEnterSuccess"});else{if(d.a.isDebug)return void n();if(console.log("code",e.query.code),e.query.code){if(w.a.get("wechatId"))return void n();h({method:"post",url:"/syzxEnterInfo/init",data:{code:e.query.code}}).then(function(e){e.data&&e.data.success&&e.data.msg?w.a.set("wechatId",e.data.msg,{expires:30}):window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+d.a.appid+"&redirect_uri="+encodeURIComponent(d.a.wxUrl)+"/vote-mobile/enter&response_type=code&scope=snsapi_base#wechat_redirect",n()}).catch(function(){i.a.$vux.toast.text("网络开小差啦，请稍后重试")})}else window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+d.a.appid+"&redirect_uri="+encodeURIComponent(d.a.wxUrl)+"/vote-mobile/enter&response_type=code&scope=snsapi_base#wechat_redirect"}else n()});var x=f,g=n("NYxO");i.a.use(g.a);var b=new g.a.Store({state:{isLogin:!1},mutations:{},actions:{},modules:{}}),y=(n("68Np"),n("zemR"),n("v5o6")),_=n.n(y),S=n("Lw6n"),k=n.n(S),N=n("63CM");_.a.attach(document.body),window.env="prod";new k.a;window.location.href.indexOf("dev-voteproject.zhph.lan/vote-mobile")>-1?window.env="dev":window.location.href.indexOf("voteproject.zhphfinance.com/vote-mobile")>-1&&(window.env="prod"),i.a.directive("transfer-dom",N.a),i.a.config.productionTip=!1,i.a.prototype.$ajax=h,i.a.prototype.Cookie=w.a,new i.a({store:b,router:x,render:function(e){return e(o)}}).$mount("#app")},rLAy:function(e,t,n){"use strict";var i=n("xNvf"),s=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(e){var t=this;e&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.show=!1,t.$emit("input",!1),t.$emit("on-hide"),t.fixSafariOverflowScrolling("touch")},this.time))},value:function(e){this.show=e}}}),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowMask&&e.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),e._v(" "),n("transition",{attrs:{name:e.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-toast",class:e.toastClass,style:{width:e.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==e.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),e._v(" "),e.text?n("p",{staticClass:"weui-toast__content",style:e.style,domProps:{innerHTML:e._s(e.text)}}):n("p",{staticClass:"weui-toast__content",style:e.style},[e._t("default")],2)])])],1)},staticRenderFns:[]};var a=n("VU/8")(s,o,!1,function(e){n("8vzP")},null,null);t.a=a.exports},zemR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9a405c5f86583103603c.js.map