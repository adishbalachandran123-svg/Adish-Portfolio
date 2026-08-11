import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight custom cursor — a small dot plus a lagging ring.
 * Only mounted on desktop (see App.jsx) and disabled entirely under
 * prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isPointer, setIsPointer] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    document.body.classList.add('cursor-enabled')

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      const target = e.target
      setIsPointer(!!target.closest('a, button, [role="button"], input, textarea'))
    }

    let raf
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', handleMove)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('cursor-enabled')
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
      />
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ${
          isPointer ? 'h-9 w-9 border-cyan' : 'h-6 w-6 border-white/30'
        }`}
      />
    </div>
  )
}
