import { createRouter ,  createWebHistory } from "vue-router";
import HomeComp from './components/HomeComp.vue'
const routes = [
    {name : 'home' , path:'/' , component : HomeComp }
];

const router = createRouter({

    history : createWebHistory() , 
    routes

});

export default router ;