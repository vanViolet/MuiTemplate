import { MinimalLayout } from 'Layouts/_MinimalLayout'
import { LoginPage } from 'Views/Auth/LoginPage'
import { TestingPage } from 'Views/Auth/TestingPage'

export const AuthRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    { path: '/login', element: <LoginPage /> },
    { path: '/testing', element: <TestingPage /> },
  ],
}
