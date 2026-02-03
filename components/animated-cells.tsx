"use client"

import { useEffect, useRef } from "react"

interface Cell {
  x: number
  y: number
  radius: number
  speed: number
  angle: number
  opacity: number
  type: "cell" | "dna" | "molecule"
}

export function AnimatedCells() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const cells: Cell[] = []
    const numCells = 25

    for (let i = 0; i < numCells; i++) {
      cells.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.3 + 0.1,
        type: ["cell", "dna", "molecule"][Math.floor(Math.random() * 3)] as Cell["type"],
      })
    }

    const drawCell = (cell: Cell) => {
      ctx.save()
      ctx.globalAlpha = cell.opacity
      ctx.translate(cell.x, cell.y)

      if (cell.type === "cell") {
        // Draw cell body
        ctx.beginPath()
        ctx.arc(0, 0, cell.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(14, 90, 107, 0.15)"
        ctx.fill()
        ctx.strokeStyle = "rgba(14, 90, 107, 0.3)"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw nucleus
        ctx.beginPath()
        ctx.arc(cell.radius * 0.2, -cell.radius * 0.1, cell.radius * 0.35, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(14, 90, 107, 0.25)"
        ctx.fill()
      } else if (cell.type === "dna") {
        // Draw DNA helix simplified
        ctx.strokeStyle = "rgba(14, 90, 107, 0.3)"
        ctx.lineWidth = 2
        for (let i = 0; i < 6; i++) {
          const y = (i - 3) * cell.radius * 0.4
          const xOffset = Math.sin(i * 0.8 + cell.angle) * cell.radius * 0.5
          ctx.beginPath()
          ctx.arc(xOffset, y, 3, 0, Math.PI * 2)
          ctx.fill()
          ctx.beginPath()
          ctx.arc(-xOffset, y, 3, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(14, 90, 107, 0.2)"
          ctx.fill()
          ctx.beginPath()
          ctx.moveTo(xOffset, y)
          ctx.lineTo(-xOffset, y)
          ctx.stroke()
        }
      } else {
        // Draw molecule
        const points = 6
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2 + cell.angle
          const x = Math.cos(angle) * cell.radius * 0.6
          const y = Math.sin(angle) * cell.radius * 0.6
          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(14, 90, 107, 0.25)"
          ctx.fill()
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(x, y)
          ctx.strokeStyle = "rgba(14, 90, 107, 0.2)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
        ctx.beginPath()
        ctx.arc(0, 0, 5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(14, 90, 107, 0.3)"
        ctx.fill()
      }

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      cells.forEach((cell) => {
        cell.x += Math.cos(cell.angle) * cell.speed
        cell.y += Math.sin(cell.angle) * cell.speed
        cell.angle += 0.002

        if (cell.x < -cell.radius) cell.x = canvas.width + cell.radius
        if (cell.x > canvas.width + cell.radius) cell.x = -cell.radius
        if (cell.y < -cell.radius) cell.y = canvas.height + cell.radius
        if (cell.y > canvas.height + cell.radius) cell.y = -cell.radius

        drawCell(cell)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
