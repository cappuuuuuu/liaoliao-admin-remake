import { createBrowserRouter } from 'react-router-dom'
import Login from '@/pages/login'
import Manage from '@/pages/manage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/manage',
    element: <Manage/>
    // TODO: add two child menu
    // children: [
    //   {
    //     path: "message",
    //     element: <Message />,
    //   },
    //   {
    //     path: "sticker",
    //     element: <Sticker />,
    //   },
    // ],
  }
])

export default router
