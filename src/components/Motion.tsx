import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

/** Lands like a sticker being slapped on: springs in from a tilt and a slight zoom. */
export function DropIn({
  children,
  className = '',
  rotate = 0,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  rotate?: number
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.82, rotate: rotate - 12, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, rotate, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 160, damping: 16, delay }}
      style={reduce ? { rotate } : undefined}
    >
      {children}
    </motion.div>
  )
}

/** Drifts its content vertically while it passes through the viewport. */
export function Parallax({ children, className = '', speed = 60 }: { children: ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : speed, reduce ? 0 : -speed])
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
