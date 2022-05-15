import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from '@pages/Landing'
import Home from '@pages/Home'

const Router = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/1" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Router
