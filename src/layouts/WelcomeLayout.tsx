import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})// useRef存储一个map使得每次渲染后，map不会被发生重新赋值
  const location = useLocation()// 获取当前地址
  const outlet = useOutlet()// 获取当前的outlet
  map.current[location.pathname] = outlet// 让每一个pathname对应渲染的outlet,比如/welcome/1对应显示Welcome1.tsx
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' }, // 判断一下，要做到让Welcome1显示时，不触发动画效果
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
  })
  return transitions((style, pathname) =>
    <animated.div key={pathname} style={style}>
      {map.current[pathname]}
    </animated.div>,
  )
}
