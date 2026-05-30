"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Zap } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    image: "/drinks/lime-drink.png",
    title: "Limão Tropical",
    category: "Cítricos",
    color: "from-lime-500/50 to-emerald-500/30",
    borderColor: "border-lime-400/50",
    textColor: "text-lime-400",
  },
  {
    id: 2,
    image: "/drinks/kiwi-drink.png",
    title: "Kiwi Exótico",
    category: "Exóticos",
    color: "from-green-500/50 to-teal-500/30",
    borderColor: "border-green-400/50",
    textColor: "text-green-400",
  },
]

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-500/5 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div
        className="container mx-auto px-4 relative z-10"
        ref={containerRef}
      >
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 rounded-full border border-amber-500/30">
            <Zap className="w-4 h-4" />
            Galeria Premium
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Energia em
            <span className="text-gradient-gold"> Cada Copo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Uma coleção visual que celebra a potência e a sofisticação dos nossos
            3 drinks explosivos.
          </p>
        </div>

        {/* Gallery Grid - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {galleryItems.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 aspect-[3/4] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 transition-opacity duration-500 ${hoveredId === item.id ? 'opacity-90' : 'opacity-60'}`} />

                {/* Image */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    hoveredId === item.id ? "scale-110 rotate-3" : "scale-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-8"
                  />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <span
                    className={`text-xs font-semibold tracking-wider uppercase ${item.textColor} mb-2 transition-all duration-500 ${
                      hoveredId === item.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {item.category}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl lg:text-3xl font-bold text-foreground transition-all duration-500 ${
                      hoveredId === item.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-80 translate-y-0"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Hover indicator */}
                  <div
                    className={`mt-4 flex items-center gap-2 transition-all duration-500 ${
                      hoveredId === item.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className={`text-sm ${item.textColor} font-medium`}>Ver detalhes</span>
                    <span className={item.textColor}>→</span>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 ${item.borderColor} transition-all duration-500 ${
                    hoveredId === item.id ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />
                
                {/* Number badge */}
                <div className={`absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/30 transition-all duration-500 ${hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-70 scale-90'}`}>
                  <span className="text-lg font-bold text-black">{String(item.id).padStart(2, '0')}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
