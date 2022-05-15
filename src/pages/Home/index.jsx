import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 10px solid black;
  position: absolute;
`
const Home = () => {
  return (
    <Wrapper>
      <div>Home</div>
      <Link to="/">이동</Link>
    </Wrapper>
  )
}

export default Home
