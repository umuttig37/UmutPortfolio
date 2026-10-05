import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  color: string
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    let width = 0
    let height = 0
    let animationFrame = 0
    let isRunning = false
    let particles: Particle[] = []
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')

    const createParticles = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio
      height = canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      let seed = 37
      const random = () => {
        seed = (seed * 16807) % 2147483647
        return (seed - 1) / 2147483646
      }

      const count = Math.min(190, Math.floor(window.innerWidth / 7))
      particles = Array.from({ length: count }, (_, index) => ({
        x: random() * width,
        y: random() * height,
        vx: (random() - 0.5) * 0.22 * window.devicePixelRatio,
        vy: (random() - 0.5) * 0.18 * window.devicePixelRatio,
        color: index % 9 === 0 ? '#ff4d67' : '#3f9ee8',
      }))
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      context.fillStyle = '#1a1a1a'
      context.fillRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1
        }

        context.beginPath()
        context.arc(particle.x, particle.y, index % 6 === 0 ? 2.1 : 1.4, 0, Math.PI * 2)
        context.fillStyle = particle.color
        context.globalAlpha = index % 9 === 0 ? 0.9 : 0.72
        context.fill()
      })

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const first = particles[i]
          const second = particles[j]
          const dx = first.x - second.x
          const dy = first.y - second.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 128 * window.devicePixelRatio) {
            context.beginPath()
            context.moveTo(first.x, first.y)
            context.lineTo(second.x, second.y)
            context.strokeStyle = '#3f9ee8'
            context.globalAlpha = (1 - distance / (128 * window.devicePixelRatio)) * 0.34
            context.lineWidth = 1
            context.stroke()
          }
        }
      }

      context.globalAlpha = 1
      if (isRunning) {
        animationFrame = requestAnimationFrame(draw)
      }
    }

    const start = () => {
      if (isRunning || document.hidden || motionPreference.matches) {
        return
      }

      isRunning = true
      draw()
    }

    const stop = () => {
      isRunning = false
      cancelAnimationFrame(animationFrame)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        stop()
      } else {
        start()
      }
    }

    const handleMotionPreference = () => {
      stop()
      draw()
      start()
    }

    const handleResize = () => {
      createParticles()
      if (motionPreference.matches) {
        draw()
      }
    }

    createParticles()
    if (motionPreference.matches) {
      draw()
    } else {
      start()
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)
    motionPreference.addEventListener('change', handleMotionPreference)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      motionPreference.removeEventListener('change', handleMotionPreference)
      stop()
    }
  }, [])

  return <canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" />
}
