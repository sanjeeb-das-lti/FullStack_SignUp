import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Posts from './components/Posts.jsx'
import MainNavigation from './components/MainNavigation.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import SecureNavigation from './components/SecureNavigation.jsx'
import Dashboard from './components/Dashboard.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}
const Root1 = () => {
  return (
    <>
      <SecureNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ]
  },
  {
    path: '/posts',
    element: <Root1 />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/posts', element: <Posts /> },
      { path: '/posts/dashboard', element: <Dashboard /> }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
