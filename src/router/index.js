import {createWebHistory, createRouter} from "vue-router";
import Login from "@/components/login.vue"
import Signup from "@/components/signup.vue"
const routes = [
 {
    path: "/",
    name: "Login",
    component: Login
 },
 {
    path: "/signup",
    name: "Signup",
    component: Signup
 }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;