import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 10px solid black;
  position: absolute;
`

const Landing = () => {
  useRegisterSlideKey()
  return (
    <Wrapper>
      <div>Landing</div>
      <Link to="/1">이동</Link>
    </Wrapper>
  )
}

export default Landing
