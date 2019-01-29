import Vue from 'vue';
import Router from 'vue-router';

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
  document.title = to.meta.title ? to.meta.title : '闪耀之星报名';
  if (to.name === "activityEnterSuccess" && !localStorage.getItem("submitForm")) {
    router.push({
      name: "activity"
    })
  } else if (to.name === "activityEnter" && localStorage.getItem("submitForm")) {
    router.push({
      name: "activityEnterSuccess"
    })
  } else {
    next()
  }
})

export default router
