import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/timeline',
           
        },
        {
            path: '/timeline',
            component: resolve => require(['../components/pages/timeline.vue'], resolve),
            children: [
                {
                    path: 'subscribe',
                    component: resolve => require(['../components/common/Fcontent.vue'], resolve),
                    alias: '/timeline'
                },
                {
                    path: '/timeline/:title',
                    component: resolve => require(['../components/common/Fcontent.vue'], resolve)
                }
            ]
        },
        {
            path: '/zhuanlan',
            component: resolve => require(['../components/pages/zhuanlan.vue'], resolve)
        },
        {
            path: '/collections',
            component: resolve => require(['../components/pages/collections.vue'], resolve)
        },
        {
            path: '/explore',
            component: resolve => require(['../components/pages/explore.vue'], resolve)
        },
        {
            path: '/repos',
            component: resolve => require(['../components/pages/repos.vue'], resolve)
        },
        {
            path: '/page6',
            component: resolve => require(['../components/pages/page6.vue'], resolve)
        },
        {
            path: '/page7',
            component: resolve => require(['../components/pages/page7.vue'], resolve)
        }
    ],
    linkActiveClass :'active'
})