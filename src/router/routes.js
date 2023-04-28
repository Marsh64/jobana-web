const HelloWorld = () => import("@/components/HelloWorld.vue")
const Board = () => import("@/components/Board.vue")
const Login = () => import("@/components/auth/Login.vue")
const Registration = () => import("@/components/auth/Registration.vue")
const MyGreeting = () => import("@/components/greet/MyGreeting.vue")

const routes = [
    {
        path: "/",
        component: MyGreeting,
        meta: { needAuth: false}
    },
    {
        path: "/a",
        component: HelloWorld,
        meta: { needAuth: false}
    },
    {
        path: "/board",
        component: {
            render: (h) => h("div", ["Board Page", h("router-view")]),
        },
        children: [
            {
                path: '/board/:id',
                component: Board,
                meta: { needAuth: false}
            }
        ],
        meta: { needAuth: true}
    },
    {
        path: "/auth",
        component: Login,
        meta: { needAuth: false}
    },
    {
        path: "/registration",
        component: Registration,
        meta: { needAuth: false}
    },
    {
        path: "/page-not-found",
        alias: '*',
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
        meta: { needAuth: false}
    }
]

export default routes