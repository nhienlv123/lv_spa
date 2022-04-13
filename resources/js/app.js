
require('./bootstrap');
window.Vue = require('vue').default;

import App from './App'
import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent"
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskEditComponent from "./components/TaskEditComponent"

Vue.use(VueRouter);

const routes = [
    {
        path: '/tasks', 
        name: 'task.list',
        component: TaskListComponent
    },   
    {
        path: '/tasks/create',
        name: 'task.create',
        component: TaskCreateComponent
    }, 
    {
        path: '/tasks/:taskId',
        name: 'task.show',
        component: TaskShowComponent,
        props: true
    },
    {
        path: '/tasks/:taskId/edit',
        name: 'task.edit',
        component: TaskEditComponent,
        props: true
    },
    
]

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue( Vue.util.extend({ router }, App)).$mount('#app');
