import { createBrowserRouter } from 'react-router'
import Root from './components/Root'
import Home from './pages/Home'
import Store from './pages/Store'
import Checkout from './pages/Checkout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'store', Component: Store },
      { path: 'checkout', Component: Checkout },
    ],
  },
])
