import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { directionState } from '@stores/direction'
import { useSetRecoilState } from 'recoil'

const useKeyPress = (targetKey) => {
  const navigation = useNavigate()
  const setDirection = useSetRecoilState(directionState)

  const downHandler = ({ key }) => {
    if (key === 'ArrowLeft' || key === 'Escape') {
      setDirection('left')
      setTimeout(() => {
        navigation('/1')
      }, 0)
    }
    if (key === 'ArrowRight' || key === 'Enter') {
      setDirection('right')
      setTimeout(() => {
        navigation('/1')
      }, 0)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])
  return null
}

export default useKeyPress
