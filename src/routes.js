import App from './App'
import LandingPage from "./components/marketing/LandingPage";
import About from './components/marketing/About'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import TestTodosVariable from './components/marketing/TestTodosVariable'


const routes = [

/*  {path: '/', component: LandingPage},
  {path: '/todo', component: App},
  {path: '/about', component: About},
  {path: '/login', component: Login},
  {path: '/register', component: Register},*/

  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/todo',
    name: 'todo',
    component: App,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/about',
  //  path: '/about-us',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/todos/:id',
    name: 'todos',
    component: TestTodosVariable
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
]

export default routes
