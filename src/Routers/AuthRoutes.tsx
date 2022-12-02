import { MinimalLayout } from 'Layouts/_MinimalLayout'
import { LoginPage } from 'Views/Auth/LoginPage'

export const AuthRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [{ path: '/login', element: <LoginPage /> }],
}
