import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
});

//const isAuthorized = () => true;
const isAuthorized = Object.prototype.hasOwnProperty.call(localStorage, 'token');

router.beforeEach((to, from, next) => {
    if (to.meta.needAuth && !isAuthorized){
        next({path: "/auth"});
    }else{
        next()
    }
});

export default router;