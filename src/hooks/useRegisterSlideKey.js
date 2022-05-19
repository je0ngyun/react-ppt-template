import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { directionState, pageIndexState } from '@stores/direction'
import { appRoutes } from '@routes/Router'

const useRegisterSlideKey = () => {
  const navigation = useNavigate()
  const setDirection = useSetRecoilState(directionState)
  const pageIndex = useRecoilValue(pageIndexState)

  const handleKeyDown = ({ key }) => {
    if (key === 'ArrowLeft' || key === 'Escape') {
      setDirection('left')
      if (pageIndex > 0) {
        setTimeout(() => {
          navigation(appRoutes[pageIndex - 1].path)
        }, 0)
      }
    }
    if (key === 'ArrowRight' || key === 'Enter') {
      setDirection('right')
      if (pageIndex !== -1 && pageIndex < appRoutes.length - 1) {
        setTimeout(() => {
          navigation(appRoutes[pageIndex + 1].path)
        }, 0)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return null
}

export default useRegisterSlideKey
