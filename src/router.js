import Vue from 'vue';
import Router from 'vue-router';

const Activity = () => import('@/pages/activity/index')
const ActivityEnter = () => import('@/pages/activity/enter')
const Video = () => import('@/pages/video')
const Upload = () => import('@/pages/upload')

const ActivityEnterSuccess = () =>
  import('@/pages/activity/success')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      title: '闪耀之星报名',
      name: 'index',
      component: Activity,
    }, {
      path: '/activity',
      title: '闪耀之星报名',
      name: 'activity',
      component: Activity,
    },
    {
      path: '/activity/enter',
      title: '闪耀之星报名',
      name: 'activityEnter',
      component: ActivityEnter,
    },
    {
      path: '/activity/success',
      title: '闪耀之星活动规则',
      name: 'activityEnterSuccess',
      component: ActivityEnterSuccess,
    },

    {
      path: "/video",
      name: "video",
      component: Video
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : '闪耀之星报名';
  if (to.name === "activityEnterSuccess" && !localStorage.getItem("userId")) {
    router.push({
      name: "activity"
    })
  } else {
    next()
  }
})

export default router
