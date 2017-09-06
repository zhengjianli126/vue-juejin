import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            component: resolve => require(['../components/pages/page1.vue'], resolve)
        },
        {
            path: '/page2',
            component: resolve => require(['../components/pages/page2.vue'], resolve)
        },
        {
            path: '/page3',
            component: resolve => require(['../components/pages/page3.vue'], resolve)
        },
        {
            path: '/page4',
            component: resolve => require(['../components/pages/page4.vue'], resolve)
        },
        {
            path: '/page5',
            component: resolve => require(['../components/pages/page5.vue'], resolve)
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