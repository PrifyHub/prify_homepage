import React, { useEffect, useState } from 'react'

const useMedia = (initialWidth = 0) => {
  const [windowWidth, setWindowWidth] = useState({
    width: process.browser ? window.innerWidth : initialWidth
  })

  useEffect(() => {
    function getSize() {
      return {
        width: process.browser ? window.innerWidth : initialWidth
      }
    }

    function handleResize() {
      setWindowWidth(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return windowWidth
}

export default useMedia
