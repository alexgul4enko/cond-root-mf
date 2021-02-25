import AuthLayout from 'condLayouts/AuthLayout'
import NotFound from 'pages/fallbacks'
import { access } from 'common/session'
import auth from 'condAuthPages/routes'


const appRoutes = [
  {
    path: '/',
    exact: true,
    name: 'root',
    redirectTo: 'auth',
  },
  {
    path: '/',

    routes: [
      {
        layout: AuthLayout,
        path: '/auth',
        name: 'auth',
        routes: auth,
      },
      {
        path: '/dashboard',
        component: NotFound,
        name: 'dashboard',
      },
      {
        component: NotFound,
      },
    ],
  },
]

export default appRoutes
