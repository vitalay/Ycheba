import {createRouter, createWebHashHistory} from 'vue-router'
import AppOne from './compo/AppOne.vue'
import AppTwo from './compo/AppTwo.vue'
import AppThree from './compo/AppThree.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/one',
            component: AppOne,
            alias: '/'

        },
        {
            path: '/two',
            component: AppTwo

        },
        {
            path: '/three',
            component: AppThree
            
        }
    ]
})