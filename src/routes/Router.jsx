import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { directionState } from '@stores/direction'
import { useRecoilValue } from 'recoil'
import Landing from '@pages/Landing'
import Home from '@pages/Home'
import Other from '@pages/Other'

// Routing info
export const appRoutes = [
  { path: '/', Component: Landing },
  { path: '/home', Component: Home },
  { path: '/other', Component: Other },
]

const Router = () => {
  const location = useLocation()
  const timeout = { enter: 800, exit: 800 }
  const direction = useRecoilValue(directionState)

  return (
    <>
      <Suspense fallback={<></>}>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            classNames={`page${direction}`}
            mountOnEnter={false}
            unmountOnExit={false}
            timeout={timeout}
          >
            <Routes location={location}>
              {appRoutes.map(({ path, Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </>
  )
}

export default Router
