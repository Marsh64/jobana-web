import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
});

const isAuthenticated = () => true;

router.beforeEach((to, from, next) => {
    if (to.matched.some((route) => route.meta?.requiresAuth)) {
        if (isAuthenticated()) {
            next();
        } else {
            next("/auth-required");
        }
    } else {
        next();
    }
});

export default router;