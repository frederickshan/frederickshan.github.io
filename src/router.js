import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Projects from './views/Projects.vue';
import Code from './views/Code.vue';
import Designs from './views/Designs.vue';
import Art from './views/Art.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/projects/',
            name: 'projects',
            component: Projects,
            children: [{
                    path: 'code',
                    name: 'code',
                    component: Code
                },
                {
                    path: 'designs',
                    name: 'designs',
                    component: Designs
                },
                {
                    path: 'art',
                    name: 'art',
                    component: Art
                }
            ]
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});