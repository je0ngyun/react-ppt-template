import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 10px solid black;
  position: absolute;
`
const Home = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  const navi = useLocation()
  return (
    <Wrapper>
      <div>Home</div>
      <div>current Path : {navi.pathname}</div>
    </Wrapper>
  )
}

export default Home
