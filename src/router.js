import Vue from 'vue';
import Router from 'vue-router';
import axio from './utils/axio'
import config from "./config"
import Cookie from 'js-cookie'

import {
  ToastPlugin,
} from "vux";

Vue.use(ToastPlugin);

const Activity = () => import('@/pages/activity/index')
const ActivityEnter = () => import('@/pages/activity/enter')
const ActivityEnterSuccess = () => import('@/pages/activity/success')
const ActivityRule = () => import('@/pages/activity/rule')


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/vote-mobile/',
  routes: [{
      path: '/',
      title: '闪耀之星报名',
      name: 'activity',
      meta: {
        index: 0 //动画效果顺序
      },
      component: Activity,
    },
    {
      path: '/enter',
      title: '闪耀之星报名',
      name: 'activityEnter',
      meta: {
        index: 1
      },
      component: ActivityEnter,
    },
    {
      path: '/success',
      title: '闪耀之星报名',
      meta: {
        index: 2
      },
      name: 'activityEnterSuccess',
      component: ActivityEnterSuccess,
    },
    {
      path: '/rule',
      title: '闪耀之星报名',
      meta: {
        index: 3
      },
      name: 'activityRule',
      component: ActivityRule,
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log("to", to)
  document.title = to.meta.title ? to.meta.title : '闪耀之星报名';
  if (to.name === "activityEnterSuccess" && !Cookie.get("submitForm")) {
    router.push({
      name: "activity"
    })
  } else if (to.name === "activityEnter") {
    if (Cookie.get("wechatId") && Cookie.get("submitForm")) {
      router.push({
        name: "activityEnterSuccess"
      })
    } else {
      if (config.isDebug) {
        next()
        return;
      }
      console.log("code", to.query.code)
      if (to.query.code) {
        if (Cookie.get("wechatId")) {
          next();
          return;
        }
        axio({
          method: "post",
          url: "/syzxEnterInfo/init",
          data: {
            code: to.query.code
          }
        }).then(result => {
          if (result.data && result.data.success && result.data.msg) {
            Cookie.set("wechatId", result.data.msg, {
              expires: 30
            });
          } else {
            window.location.href =
              `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=${encodeURIComponent(config.wxUrl)}/vote-mobile/enter&response_type=code&scope=snsapi_base#wechat_redirect`;
          }
          next();
        }).catch(() => {
          Vue.$vux.toast.text("网络开小差啦，请稍后重试");
        })
      } else {
        window.location.href =
          `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=${encodeURIComponent(config.wxUrl)}/vote-mobile/enter&response_type=code&scope=snsapi_base#wechat_redirect`;
      }
    }
  } else {
    next()
  }
})

export default router
