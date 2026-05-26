'use client'

// Re-export Framer Motion primitives from a single 'use client' boundary.
// Import from here instead of 'framer-motion' directly in server component trees.
export { motion, useInView, AnimatePresence } from 'framer-motion'
