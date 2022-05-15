import React, { useRef } from 'react'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Landing from '@pages/Landing'
import Home from '@pages/Home'

const Router = () => {
  const nodeRef = useRef(null)
  const location = useLocation()
  const timeout = { enter: 800, exit: 800 }
  return (
    <>
      <Suspense fallback={<></>}>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={false}
            timeout={timeout}
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/1" element={<Home />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </>
  )
}

export default Router
