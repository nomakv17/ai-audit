// Unified animation system - modern, snappy, world-class

// Spring-like ease curve for premium feel
export const ease = [0.22, 1, 0.36, 1] as const

// Faster, snappier durations
export const duration = {
  fast: 0.35,
  normal: 0.5,
  slow: 0.7,
}

export const stagger = {
  fast: 0.06,
  normal: 0.1,
  slow: 0.12,
}

// Subtle fade + small translate - consistent across all sections
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: duration.normal, ease },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: duration.slow, ease },
}

// Viewport settings for whileInView
export const viewport = {
  once: true,
  margin: "-80px",
}

// Card stagger animation for lists
export const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease,
      delay: i * stagger.normal,
    },
  }),
}

// Section header animation
export const headerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
}
