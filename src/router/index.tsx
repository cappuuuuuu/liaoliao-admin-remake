import { createRef } from 'react'
import Login from '@/pages/login'
import Manage from '@/pages/manage'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import {
  createBrowserRouter,
  useLocation,
  useOutlet
} from 'react-router-dom'
import './transition.css'

const routes = [
  { path: '/', name: 'Login', element: <Login />, nodeRef: createRef() },
  { path: '/manage', name: 'Manage', element: <Manage />, nodeRef: createRef() }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element
    }))
  }
])

function Index () {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
      <div className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  )
}

export default router
