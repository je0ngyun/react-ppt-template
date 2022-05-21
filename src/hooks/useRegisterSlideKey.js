import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { directionState } from '@stores/direction'
import { appRoutes } from '@routes/Router'

const getCurrentPageIdx = (path) => {
  return appRoutes.findIndex((routeObj) => routeObj.path === path)
}

const useRegisterSlideKey = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const setDirection = useSetRecoilState(directionState)
  const pageIndex = getCurrentPageIdx(location.pathname)

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
