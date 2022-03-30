import Vue from 'vue'
import VueRouter from 'vue-router';
import HomeRecommend from '../views/HomeRecommend.vue';
import HomeHot from '../views/HomeHot.vue';
import HomeSearch from '../views/HomeSearch.vue';
import SongList from '../views/SongList.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomeRecommend',
        component: HomeRecommend,
        meta: { showNav: true, }

    },
    {
        path: '/hot',
        name: 'HomeHot',
        component: HomeHot,
        meta: { showNav: true }
    },
    {
        path: '/search',
        name: 'HomeSearch',
        component: HomeSearch,
        meta: { showNav: true }
    },
    {
        path: '/songlist',
        name: 'SongList',
        component: SongList,
    },

    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router