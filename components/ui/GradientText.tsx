'use client'

import { ReactNode, useState, useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  pauseOnHover?: boolean
}

export default function GradientText({
  children,
  className = '',
  colors = ['#8aab8a', '#b8cdb8', '#f8f6f1', '#8aab8a'],
  animationSpeed = 6,
  pauseOnHover = false,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const animationDuration = animationSpeed * 1000

  useAnimationFrame(time => {
    if (isPaused) { lastTimeRef.current = null; return }
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return }
    elapsedRef.current += time - lastTimeRef.current
    lastTimeRef.current = time
    const fullCycle = animationDuration * 2
    const cycleTime = elapsedRef.current % fullCycle
    progress.set(cycleTime < animationDuration ? (cycleTime / animationDuration) * 100 : 100 - ((cycleTime - animationDuration) / animationDuration) * 100)
  })

  const backgroundPosition = useTransform(progress, p => `${p}% 50%`)
  const gradientColors = [...colors, colors[0]].join(', ')

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientColors})`,
        backgroundSize: '300% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundPosition,
      }}
      onMouseEnter={() => { if (pauseOnHover) setIsPaused(true) }}
      onMouseLeave={() => { if (pauseOnHover) setIsPaused(false) }}
    >
      {children}
    </motion.span>
  )
}
