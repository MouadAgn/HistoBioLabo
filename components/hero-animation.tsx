"use client"

import { useEffect, useState, useRef } from "react"

export function HeroAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 50
        const y = (e.clientY - rect.top - rect.height / 2) / 50
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full min-h-[500px] lg:min-h-[600px] transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Main microscope view circle */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out"
        }}
      >
        {/* Outer ring - microscope lens effect */}
        <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 animate-pulse" />
          
          {/* Microscope ring */}
          <div className="absolute inset-2 rounded-full border-4 border-primary/30 shadow-[0_0_60px_rgba(14,90,107,0.3)]" />
          <div className="absolute inset-4 rounded-full border-2 border-primary/20" />
          
          {/* Inner viewing area */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
            {/* Petri dish effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
            
            {/* Animated cells inside microscope view */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Large red blood cell */}
              <g className="animate-float-slow">
                <ellipse cx="180" cy="150" rx="45" ry="20" fill="rgba(14, 90, 107, 0.15)" transform="rotate(-20 180 150)">
                  <animate attributeName="cx" values="180;200;180" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="150;170;150" dur="6s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="180" cy="150" rx="25" ry="10" fill="rgba(14, 90, 107, 0.25)" transform="rotate(-20 180 150)">
                  <animate attributeName="cx" values="180;200;180" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="150;170;150" dur="6s" repeatCount="indefinite" />
                </ellipse>
              </g>

              {/* Cell 1 - Large with nucleus */}
              <g>
                <circle cx="120" cy="200" r="40" fill="rgba(14, 90, 107, 0.1)" stroke="rgba(14, 90, 107, 0.3)" strokeWidth="2">
                  <animate attributeName="cx" values="120;150;120" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="200;230;200" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="130" cy="190" r="15" fill="rgba(14, 90, 107, 0.2)">
                  <animate attributeName="cx" values="130;160;130" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="190;220;190" dur="7s" repeatCount="indefinite" />
                </circle>
                <circle cx="135" cy="185" r="5" fill="rgba(14, 90, 107, 0.3)">
                  <animate attributeName="cx" values="135;165;135" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="185;215;185" dur="7s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Cell 2 - Medium */}
              <g>
                <circle cx="280" cy="180" r="30" fill="rgba(14, 90, 107, 0.08)" stroke="rgba(14, 90, 107, 0.25)" strokeWidth="2">
                  <animate attributeName="cx" values="280;260;280" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="180;200;180" dur="11s" repeatCount="indefinite" />
                </circle>
                <circle cx="275" cy="175" r="12" fill="rgba(14, 90, 107, 0.15)">
                  <animate attributeName="cx" values="275;255;275" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="175;195;175" dur="11s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Cell 3 - Small */}
              <g>
                <circle cx="200" cy="280" r="25" fill="rgba(14, 90, 107, 0.12)" stroke="rgba(14, 90, 107, 0.2)" strokeWidth="1.5">
                  <animate attributeName="cx" values="200;220;200" dur="12s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="280;260;280" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="195" cy="275" r="8" fill="rgba(14, 90, 107, 0.2)">
                  <animate attributeName="cx" values="195;215;195" dur="12s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="275;255;275" dur="8s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* DNA Helix */}
              <g className="animate-spin-slow" style={{ transformOrigin: "320px 280px" }}>
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <g key={i}>
                    <circle 
                      cx={320 + Math.sin(i * 0.9) * 15} 
                      cy={250 + i * 10} 
                      r="4" 
                      fill="rgba(14, 90, 107, 0.3)"
                    />
                    <circle 
                      cx={320 - Math.sin(i * 0.9) * 15} 
                      cy={250 + i * 10} 
                      r="4" 
                      fill="rgba(14, 90, 107, 0.2)"
                    />
                    <line 
                      x1={320 + Math.sin(i * 0.9) * 15} 
                      y1={250 + i * 10}
                      x2={320 - Math.sin(i * 0.9) * 15} 
                      y2={250 + i * 10}
                      stroke="rgba(14, 90, 107, 0.15)"
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </g>

              {/* Floating molecules */}
              {[
                { cx: 80, cy: 120, delay: 0 },
                { cx: 320, cy: 100, delay: 2 },
                { cx: 350, cy: 200, delay: 4 },
                { cx: 100, cy: 320, delay: 1 },
                { cx: 250, cy: 350, delay: 3 },
              ].map((mol, idx) => (
                <g key={idx}>
                  <circle cx={mol.cx} cy={mol.cy} r="3" fill="rgba(14, 90, 107, 0.4)">
                    <animate 
                      attributeName="cx" 
                      values={`${mol.cx};${mol.cx + 20};${mol.cx}`} 
                      dur={`${6 + mol.delay}s`} 
                      repeatCount="indefinite" 
                    />
                    <animate 
                      attributeName="cy" 
                      values={`${mol.cy};${mol.cy - 15};${mol.cy}`} 
                      dur={`${5 + mol.delay}s`} 
                      repeatCount="indefinite" 
                    />
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}

              {/* Bacteria/bacillus shapes */}
              <g>
                <ellipse cx="150" cy="100" rx="20" ry="8" fill="rgba(14, 90, 107, 0.15)" transform="rotate(30 150 100)">
                  <animate attributeName="cx" values="150;170;150" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="100;120;100" dur="9s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="rotate" values="30 150 100;45 170 120;30 150 100" dur="7s" repeatCount="indefinite" />
                </ellipse>
              </g>

              {/* Tissue pattern in background */}
              <pattern id="tissue" patternUnits="userSpaceOnUse" width="40" height="40">
                <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(14, 90, 107, 0.05)" strokeWidth="1" />
              </pattern>
              <rect x="0" y="0" width="400" height="400" fill="url(#tissue)" opacity="0.5" />
            </svg>

            {/* Center crosshair for microscope effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] bg-primary/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-[1px] bg-primary/10" />
            </div>
          </div>

          {/* Lens reflection */}
          <div className="absolute top-8 left-8 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-sm" />
          
          {/* Measurement marks around the lens */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-3 bg-primary/30"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 30}deg) translateY(-${160}px) translateX(-50%)`,
                transformOrigin: "center center"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating elements around the microscope */}
      <div className="absolute top-10 left-10 w-8 h-8 rounded-full border-2 border-primary/20 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-accent/30 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.5s" }} />
      <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full border border-primary/30 animate-bounce" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
      <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-primary/20 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "2s" }} />

      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M10,90 Q50,70 90,90" stroke="rgba(14, 90, 107, 0.1)" strokeWidth="0.5" fill="none" />
        <path d="M10,10 Q50,30 90,10" stroke="rgba(14, 90, 107, 0.1)" strokeWidth="0.5" fill="none" />
      </svg>
    </div>
  )
}
