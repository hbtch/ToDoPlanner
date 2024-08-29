import React, { useRef, useEffect } from 'react'
import butterflyImage from '../Canvas/bee-bottom-left.svg'

const ButterflyAnimation = () => {
  const canvasRef = useRef(null)
  const butterflyImg = new Image()
  butterflyImg.src = butterflyImage

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const butterflies = []
    const numButterflies = 10

    for (let i = 0; i < numButterflies; i++) {
      butterflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
      })
    }

    const drawButterflies = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      butterflies.forEach((butterfly) => {
        ctx.drawImage(butterflyImg, butterfly.x, butterfly.y, 50, 50) // Рисуем изображение бабочки

        butterfly.x += butterfly.dx
        butterfly.y += butterfly.dy

        // Отражение бабочек от границ экрана
        if (butterfly.x > canvas.width || butterfly.x < 0) butterfly.dx *= -1
        if (butterfly.y > canvas.height || butterfly.y < 0) butterfly.dy *= -1
      })
    }

    const animate = () => {
      drawButterflies()
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animate)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: 'block' }} />
}

export default ButterflyAnimation
