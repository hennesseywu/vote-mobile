import Vue from 'vue';
import Router from 'vue-router';


const Index = () =>
    import ('@/pages/index/index')

const Activity = () =>
    import ('@/pages/activity/index')
const ActivityEnter = () =>
    import ('@/pages/activity/enter')
const ActivityRule = () =>
    import ('@/pages/activity/rule')
const Video = () =>
    import ('@/pages/video')

const Upload = () =>
    import ('@/pages/upload')

const ActivityEnterSuccess = () =>
    import ('@/pages/activity/success')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            title: '',
            name: 'index',
            component: Index,
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
            path: '/activity/rule',
            title: '闪耀之星活动规则',
            name: 'activityRule',
            component: ActivityRule,
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
    next()
})

export default router