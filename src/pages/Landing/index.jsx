import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 10px solid black;
  position: absolute;
`

const Landing = () => {
  return (
    <Wrapper>
      <div>Landing</div>
      <Link to="/1">이동</Link>
    </Wrapper>
  )
}

export default Landing
