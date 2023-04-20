import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
});

const isAuthorized = Object.prototype.hasOwnProperty.call(localStorage, 'token');
    //localStorage.hasOwnProperty('token');//() => true;

router.beforeEach((to, from, next) => {
    if (to.meta.needAuth && !isAuthorized){
        next({path: "/login"});
    }else{
        next()
    }
});

export default router;