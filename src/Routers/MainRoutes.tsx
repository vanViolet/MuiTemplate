import { MainLayout } from 'Layouts/MainLayout'
import { lazy } from 'react'
import Loadable from './Loadable'

const Dashboard = Loadable(lazy(() => import('Views/Dashboard')))

const ManajemenAkun = Loadable(lazy(() => import('Views/ManajemenAkun')))

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Dashboard /> },

    { path: '/manajemen-akun', element: <ManajemenAkun /> },

    //Seed Path Router Dont Delete This Comment
  ],
}

export default MainRoutes
