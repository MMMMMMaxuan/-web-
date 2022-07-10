import VueRouter from "vue-router"
import Home from "../pages/home/home"
import IconShow from "../pages/Identity/IconShow"
import Register from "../pages/register/register"
import Login from "../pages/login/login"

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{
                title: '注册'
            },
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{
                title: '登录'
            },
        },
        {
            path: '/identity',
            name:'identity',
            component: IconShow,
            meta: {
                title: '身份认证'
            },
        },
        {
            path: '/',
            component: Home,
            meta: {
                title: '首页'
            },
        }
    ]
})