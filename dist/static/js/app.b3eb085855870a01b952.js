webpackJsonp([5],{"2uFj":function(e,t,n){"use strict";t.a={server:{dev:"http://dev-voteservice.zhph.lan",prod:"http://voteservice.zhph.lan",local:"http://dev-voteservice.zhph.lan"},wxLogin:"http://192.168.18.109:1111/vote-mobile/enter",appid:"wx0d176f2b15375cea"}},"3pBO":function(e,t){},"68Np":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transitionName}},[t("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App",data:function(){return{transitionName:""}},watch:{$route:function(e,t){e.name;var n=e.meta.index,a=t.meta.index;this.transitionName=n<a?"slide-right":"slide-left"}}},r,!1,function(e){n("3pBO")},null,null).exports,o=n("/ocq");a.a.use(o.a);var i=new o.a({mode:"history",base:"/vote-mobile/",routes:[{path:"/",title:"闪耀之星报名",name:"activity",meta:{index:0},component:function(){return n.e(1).then(n.bind(null,"Ek/6"))}},{path:"/enter",title:"闪耀之星报名",name:"activityEnter",meta:{index:1},component:function(){return n.e(0).then(n.bind(null,"imRg"))}},{path:"/success",title:"闪耀之星报名",meta:{index:2},name:"activityEnterSuccess",component:function(){return n.e(2).then(n.bind(null,"qRN3"))}},{path:"/rule",title:"闪耀之星报名",meta:{index:3},name:"activityRule",component:function(){return n.e(3).then(n.bind(null,"uKl6"))}}]});i.beforeEach(function(e,t,n){document.title=e.meta.title?e.meta.title:"闪耀之星报名","activityEnterSuccess"!==e.name||localStorage.getItem("submitForm")?"activityEnter"===e.name&&localStorage.getItem("submitForm")?i.push({name:"activityEnterSuccess"}):n():i.push({name:"activity"})});var c=i,u=n("NYxO");a.a.use(u.a);var m=new u.a.Store({state:{isLogin:!1},mutations:{},actions:{},modules:{}}),l=n("//Fk"),p=n.n(l),d=n("mtWM"),v=n.n(d),h=n("2uFj"),f=v.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:2e4,withCredentials:!0});f.interceptors.request.use(function(e){return e.url=h.a.server[window.env]+e.url,console.log("config",e),e},function(e){return p.a.reject(e).catch(e)}),f.interceptors.response.use(function(e){return e},function(e){var t=n("MF5+").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问";break;case 404:e.message="请求地址出错: "+e.response.config.url;break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持"}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),new t.reject(e).catch(e)});var b=f,g=(n("68Np"),n("zemR"),n("v5o6")),w=n.n(g),x=n("Lw6n"),k=n.n(x),y=n("63CM");w.a.attach(document.body);new k.a;window.env="local",window.location.href.indexOf("dev-voteproject.zhph.lan/vote-mobile")>-1?window.env="dev":window.location.href.indexOf("voteproject.zhph.lan/vote-mobile")>-1&&(window.env="prod"),console.log(env),a.a.directive("transfer-dom",y.a),a.a.config.productionTip=!1,a.a.prototype.$ajax=b,new a.a({store:m,router:c,render:function(e){return e(s)}}).$mount("#app")},zemR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b3eb085855870a01b952.js.map