webpackJsonp([4],{"68Np":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transitionName}},[t("router-view")],1)],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App",data:function(){return{transitionName:""}},watch:{$route:function(e,t){e.name;var n=e.meta.index,a=t.meta.index;this.transitionName=n<a?"slide-right":"slide-left"}}},s,!1,function(e){n("Q/3e")},null,null).exports,o=n("/ocq"),i=function(){return n.e(1).then(n.bind(null,"Ek/6"))};a.a.use(o.a);var c=new o.a({mode:"history",base:"/vote-mobile/",routes:[{path:"/",title:"闪耀之星报名",name:"index",meta:{index:0},component:i},{path:"/",title:"闪耀之星报名",name:"activity",meta:{index:1},component:i},{path:"/enter",title:"闪耀之星报名",name:"activityEnter",meta:{index:2},component:function(){return n.e(0).then(n.bind(null,"imRg"))}},{path:"/success",title:"闪耀之星活动",meta:{index:3},name:"activityEnterSuccess",component:function(){return n.e(2).then(n.bind(null,"qRN3"))}}]});c.beforeEach(function(e,t,n){console.log("beforeEach",e),document.title=e.meta.title?e.meta.title:"闪耀之星报名","activityEnterSuccess"!==e.name||localStorage.getItem("userId")?"activityEnter"===e.name&&localStorage.getItem("userId")?c.push({name:"activityEnterSuccess"}):n():c.push({name:"activity"})}),c.afterEach(function(e){console.log("afterEach")});var u=c,m=n("NYxO");a.a.use(m.a);var l=new m.a.Store({state:{isLogin:!1},mutations:{},actions:{},modules:{}}),p=n("//Fk"),d=n.n(p),f=n("mtWM"),g=n.n(f).a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:15e3,withCredentials:!0});g.interceptors.request.use(function(e){return console.log("config",e),e},function(e){return d.a.reject(e).catch(e)}),g.interceptors.response.use(function(e){return e},function(e){var t=n("MF5+").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问";break;case 404:e.message="请求地址出错: "+e.response.config.url;break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持"}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),new t.reject(e).catch(e)});var h=g,b=(n("68Np"),n("zemR"),n("v5o6")),v=n.n(b),E=(n("Lw6n"),n("63CM"));v.a.attach(document.body),a.a.directive("transfer-dom",E.a),a.a.config.productionTip=!1,a.a.prototype.$ajax=h,new a.a({store:l,router:u,render:function(e){return e(r)}}).$mount("#app")},"Q/3e":function(e,t){},zemR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9b92e42ff6e829d32d75.js.map