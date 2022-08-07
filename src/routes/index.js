

// 导入自定义页面组件
import Login from '../pages/Login'
import Home from '../pages/Home'
import Error from '../pages/Error'
import About from '../pages/About'
import CurNet from '../pages/CurNet'


export const mainRoutes = [
    {
        path: '/login',
        title: '登陆',
        component: Login
    },
    {
        path: '/404',
        title: '错误',
        component: Error
    }
]


export const adminRoutes = [
    {
        path: '/admin/curnet',
        title: '当前网络',
        component: CurNet,
        exact: true,
        show: false,
    }
]