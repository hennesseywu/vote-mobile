import Vue from 'vue';
import Router from 'vue-router';

const Activity = () => import('@/pages/activity/index')
const ActivityEnter = () => import('@/pages/activity/enter')

const ActivityEnterSuccess = () =>
  import('@/pages/activity/success')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/vote-mobile/',
  routes: [{
      path: '/',
      title: '闪耀之星报名',
      name: 'index',
      meta: {
        index: 0
      },
      component: Activity,
    }, {
      path: '/',
      title: '闪耀之星报名',
      name: 'activity',
      meta: {
        index: 1
      },
      component: Activity,
    },
    {
      path: '/enter',
      title: '闪耀之星报名',
      name: 'activityEnter',
      meta: {
        index: 2
      },
      component: ActivityEnter,
    },
    {
      path: '/success',
      title: '闪耀之星活动',
      meta: {
        index: 3
      },
      name: 'activityEnterSuccess',
      component: ActivityEnterSuccess,
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to)
  document.title = to.meta.title ? to.meta.title : '闪耀之星报名';
  if (to.name === "activityEnterSuccess" && !localStorage.getItem("userId")) {
    router.push({
      name: "activity"
    })
  } else if (to.name === "activityEnter" && localStorage.getItem("userId")) {
    router.push({
      name: "activityEnterSuccess"
    })
  } else {
    next()
  }
})

router.afterEach(route => {
  console.log("afterEach")

})

export default router
