import { createRouter, createWebHistory} from "vue-router";

import MainSite from '../components/MainSite.vue'
import MyWorks from '../components/MyWorks.vue'
import MyGame from '../components/game/MyGame.vue'
import MyContacts from '../components/MyContacts.vue'
import WorkDoct24 from '../components/works/WorkDoct24.vue'
import WorkVideotek from '../components/works/WorkVideotek.vue'
import WorkShop from '../components/works/WorkShop.vue'
import WorkFirst from '../components/works/WorkFirst.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component: MainSite,
        alias: '/*'
    },
    {
        path: '/works',
        name: "Works",
        component: MyWorks,
        children: [
            {
                path: 'doct24',
                name: "WorkDoct24",
                component: WorkDoct24,
            },
            {
                path: 'videotek',
                name: "WorkVideotek",
                component: WorkVideotek,
            },
            {
                path: 'WorkShop',
                name: "WorkShop",
                component: WorkShop,
            },
            {
                path: 'WorkFirst',
                name: "WorkFirst",
                component: WorkFirst
            },
      
    ],
    },
    {
        path: '/game',
        name: "Game",
        component: MyGame
    },
    {
        path: '/contacts',
        name: "Contacts",
        component: MyContacts
    },
    {
        path: "/*",
        name: "404",
        alias: '/'
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;