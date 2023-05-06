const Board = () => import("@/components/Board.vue")
const Login = () => import("@/components/auth/Login.vue")
const Registration = () => import("@/components/auth/Registration.vue")
const MyGreeting = () => import("@/components/greet/MyGreeting.vue")
const AdvertOfJob = () => import("@/components/advert/AdvertOfJob.vue")
const JobAdvertInstance = () => import("@/components/advert/JobAdvertInstance.vue")
const PersonalPage = () => import("@/components/home/PersonalPage.vue")
const MyAdverts = () => import("@/components/home/advert/MyAdverts.vue")
const CreateAdvert = () => import("@/components/home/advert/CreateAdvert.vue")
const MyProfiles = () => import("@/components/home/expert/MyProfiles.vue")
const CreateProfile = () => import("@/components/home/expert/CreateProfile.vue")
const MyReplies = () => import("@/components/home/reply/MyReplies.vue")

const routes = [
    {
        path: "/",
        component: MyGreeting,
        meta: { needAuth: false }
    },
    {
        path: "/adverts",
        component: AdvertOfJob,
        meta: { needAuth: false }
    },
    {
        path: "/advert/test",
        component: JobAdvertInstance,
        meta: { needAuth: true }
    },
    {
        path: "/home",
        component: PersonalPage,
        name: "Home",
        meta: { needAuth: true },
        children: [
            {
                path: "/",
            },
            {
                path: "/home/my-adverts",
                component: MyAdverts
            },
            {
                path: "/home/create-advert",
                component: CreateAdvert
            },
            {
                path: "/home/my-profiles",
                component: MyProfiles
            },
            {
                path: "/home/create-profile",
                component: CreateProfile
            },
            {
                path: "/home/my-replies",
                component: MyReplies
            }
        ]
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
                meta: { needAuth: false }
            }
        ],
        meta: { needAuth: true}
    },
    {
        path: "/login",
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