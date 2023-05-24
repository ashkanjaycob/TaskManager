import { createRouter ,  createWebHistory } from "vue-router";
import HomeComp from './components/HomeComp.vue'
import TaskIndex from './components/Tasks/TaskIndex.vue'
const routes = [
    {name : 'home' , path:'/' , component : HomeComp },
    {name : 'tasks' , path:'/tasks' , component : TaskIndex }
];

const router = createRouter({

    history : createWebHistory() , 
    routes

});

export default router ;