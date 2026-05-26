'use client'

import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'

interface CountUpProps {
  to: number
  from?: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  separator?: string
  prefix?: string
  suffix?: string
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  separator = '',
  prefix = '',
  suffix = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? to : from)
  const damping = 20 + 40 * (1 / duration)
  const stiffness = 100 * (1 / duration)
  const springValue = useSpring(motionValue, { damping, stiffness })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const getDecimalPlaces = (num: number) => {
    const str = num.toString()
    if (str.includes('.')) {
      const decimals = str.split('.')[1]
      if (parseInt(decimals) !== 0) return decimals.length
    }
    return 0
  }
  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to))

  const formatValue = useCallback(
    (latest: number) => {
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: maxDecimals > 0 ? maxDecimals : 0,
        maximumFractionDigits: maxDecimals > 0 ? maxDecimals : 0,
      }
      const formatted = Intl.NumberFormat('en-US', options).format(latest)
      return `${prefix}${separator ? formatted.replace(/,/g, separator) : formatted}${suffix}`
    },
    [maxDecimals, separator, prefix, suffix]
  )

  useEffect(() => {
    if (ref.current) ref.current.textContent = formatValue(direction === 'down' ? to : from)
  }, [from, to, direction, formatValue])

  useEffect(() => {
    if (!isInView) return
    const t1 = setTimeout(() => motionValue.set(direction === 'down' ? from : to), delay * 1000)
    return () => clearTimeout(t1)
  }, [isInView, motionValue, direction, from, to, delay])

  useEffect(() => {
    return springValue.on('change', (latest: number) => {
      if (ref.current) ref.current.textContent = formatValue(latest)
    })
  }, [springValue, formatValue])

  return <span className={className} ref={ref} />
}
