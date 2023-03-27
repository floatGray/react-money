import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Config {
  onTouchStart?: (e: TouchEvent) => void
  onTouchMove?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
}

export const useSwipe = (elemRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
  const x = useRef(-1)

  const onTouchStart = (e: TouchEvent) => {
    config?.onTouchStart?.(e)
    x.current = e.touches[0].clientX
  }
  const onTouchMove = (e: TouchEvent) => {
    config?.onTouchMove?.(e)
    const newX = e.touches[0].clientX
    const distance = newX - x.current
    if (Math.abs(distance) < 3)
      setDirection('')
    else if (distance < 0)
      setDirection('left')
    else
      setDirection('right')
  }
  const onTouchEnd = (e: TouchEvent) => {
    config?.onTouchEnd?.(e)
    setDirection('')
  }

  useEffect(() => {
    if (!elemRef.current)
      return
    elemRef.current.addEventListener('touchstart', onTouchStart)
    elemRef.current.addEventListener('touchmove', onTouchMove)
    elemRef.current.addEventListener('touchend', onTouchEnd)

    return () => {
      if (!elemRef.current)
        return
      elemRef.current.removeEventListener('touchstart', onTouchStart)
      elemRef.current.removeEventListener('touchmove', onTouchMove)
      elemRef.current.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return { direction }
}
