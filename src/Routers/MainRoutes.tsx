import { MainLayout } from 'Layouts/MainLayout'
import DashboardPage from 'Views/Dashboard'
import loadable from '@loadable/component'

// const Dashboard = Loadable(lazy(() => import('Views/Dashboard')))

const ManajemenAkun = loadable(() => import('Views/ManajemenAkun'))

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <DashboardPage /> },

    { path: '/manajemen-akun', element: <ManajemenAkun /> },

    //Seed Path Router Dont Delete This Comment
  ],
}

export default MainRoutes
