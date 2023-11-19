import React from 'react'

export const useResizeWindow = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 768)
    })
  }, [])

  return {
    isSmallScreen
  }
}