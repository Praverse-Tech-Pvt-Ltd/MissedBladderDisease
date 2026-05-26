import React from 'react'

interface SectionBodyProps {
  children: React.ReactNode
  className?: string
  wide?: boolean
}

export function SectionBody({ children, className = '', wide = false }: SectionBodyProps) {
  return (
    <p
      className={`font-body text-base text-muted leading-relaxed font-light ${wide ? 'max-w-2xl' : 'max-w-xl'} ${className}`}
    >
      {children}
    </p>
  )
}
