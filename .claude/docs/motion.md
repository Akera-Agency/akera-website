# Motion (Framer Motion) Reference

## Installation
```bash
npm install motion
```

## Import
```tsx
import { motion, AnimatePresence } from 'motion/react'
```

## Basic Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Gesture Animations
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## Scroll-Triggered Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  Animates when scrolled into view
</motion.div>
```

## Exit Animations
```tsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Modal content
    </motion.div>
  )}
</AnimatePresence>
```

## Layout Animations
```tsx
// Automatic layout animation
<motion.div layout>
  {/* Animates position/size changes */}
</motion.div>

// Shared layout animation
<motion.div layoutId="underline" />
```

## Stagger Children
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.li key={i} variants={item}>{i}</motion.li>
  ))}
</motion.ul>
```

## Scroll Progress
```tsx
import { useScroll, motion } from 'motion/react'

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left"
    />
  )
}
```

## Page Transitions (App Router)
```tsx
// app/template.tsx
'use client'
import { motion } from 'motion/react'

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
```

## Reduced Motion
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    // Respects user preference automatically
  }}
/>
```

## Docs
- Full docs: https://motion.dev/docs/react
- Examples: https://motion.dev/examples
