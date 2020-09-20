import { lazy } from 'react'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const routes = {
  signup: {
    path: '/signup',
    exact: true,
    component: lazy(() => import('../pages/Signuppage/Signuppage')),
  },
  login: {
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/Loginpage/Loginpage')),
  },
  forgetpassword: {
    path: '/forgetpassword',
    exact: true,
    component: lazy(() => import('../pages/Forgetpasswordpage/Forgetpasswordpage')),
  },
  chat: {
    path: '/chat',
    exact: true,
    component: lazy(() => import('../pages/Chatpage/Chatpage')),
  },
}
