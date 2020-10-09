import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Projects from './views/Projects.vue';
import code from './components/code.vue';
import designs from './components/designs.vue';
import art from './components/art.vue';

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
                    component: code
                },
                {
                    path: 'designs',
                    name: 'designs',
                    component: designs
                },
                {
                    path: 'art',
                    name: 'art',
                    component: art
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