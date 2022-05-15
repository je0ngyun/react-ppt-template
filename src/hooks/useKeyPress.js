import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useKeyPress = (targetKey) => {
  const navigation = useNavigate()
  const [keyPressed, setKeyPressed] = useState(false)
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true)
      navigation('/1')
    }
  }
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])
  return keyPressed
}

export default useKeyPress
