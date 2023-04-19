const HelloWorld = () => import("@/components/HelloWorld.vue")
const Board = () => import("@/components/Board.vue")


const routes = [
    {
        path: "/a",
        component: HelloWorld,
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
            }
        ]
    },
    {
        path: "/page-not-found",
        alias: '*',
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    },
]

export default routes