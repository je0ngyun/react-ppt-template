import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { directionState, pageIndexState } from '@stores/direction'
import { useRecoilValue, useRecoilState } from 'recoil'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Landing from '@pages/Landing'
import Home from '@pages/Home'
import Other from '@pages/Other'

// Routing info
export const appRoutes = [
  { path: '/', Component: Landing },
  { path: '/home', Component: Home },
  { path: '/other', Component: Other },
]

const getCurrentPageIdx = (path) => {
  return appRoutes.findIndex((routeObj) => routeObj.path === path)
}

const Router = () => {
  useRegisterSlideKey()
  const location = useLocation()
  const timeout = { enter: 800, exit: 800 }
  const direction = useRecoilValue(directionState)
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexState)
  const currentIndex = getCurrentPageIdx(location.pathname)

  useEffect(() => {
    setTimeout(() => {
      setPageIndex(currentIndex)
    }, 800)
  }, [location.pathname])

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
                <Route
                  key={idx}
                  path={path}
                  element={<Component key={pageIndex} />}
                />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </>
  )
}

export default Router
