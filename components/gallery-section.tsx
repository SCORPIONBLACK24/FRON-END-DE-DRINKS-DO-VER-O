"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Sparkles } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    image: "/drinks/lime-drink.png",
    title: "Limao Tropical",
    category: "Citricos",
    color: "from-lime-500/50 to-emerald-500/30",
    borderColor: "border-lime-400/50",
    textColor: "text-lime-400",
  },
  {
    id: 2,
    image: "/drinks/kiwi-drink.png",
    title: "Kiwi Exotico",
    category: "Exoticos",
    color: "from-green-500/50 to-teal-500/30",
    borderColor: "border-green-400/50",
    textColor: "text-green-400",
  },
  {
    id: 3,
    image: "/drinks/watermelon-drink.png",
    title: "Melancia Splash",
    category: "Frutas Vermelhas",
    color: "from-pink-500/50 to-red-500/30",
    borderColor: "border-pink-400/50",
    textColor: "text-pink-400",
  },
  {
    id: 4,
    image: "/drinks/passionfruit-drink.png",
    title: "Maracuja Sunset",
    category: "Tropicais",
    color: "from-orange-500/50 to-yellow-500/30",
    borderColor: "border-orange-400/50",
    textColor: "text-orange-400",
  },
  {
    id: 5,
    image: "/drinks/strawberry-drink.png",
    title: "Morango Bliss",
    category: "Frutas Vermelhas",
    color: "from-red-500/50 to-rose-500/30",
    borderColor: "border-red-400/50",
    textColor: "text-red-400",
  },
  {
    id: 6,
    image: "/drinks/coconut-drink.png",
    title: "Coco Paradise",
    category: "Tropicais",
    color: "from-white/30 to-neutral-300/20",
    borderColor: "border-white/40",
    textColor: "text-white",
  },
  {
    id: 7,
    image: "/drinks/mango-drink.png",
    title: "Manga Sunrise",
    category: "Tropicais",
    color: "from-amber-500/50 to-orange-500/30",
    borderColor: "border-amber-400/50",
    textColor: "text-amber-400",
  },
  {
    id: 8,
    image: "/drinks/pineapple-drink.png",
    title: "Abacaxi Breeze",
    category: "Tropicais",
    color: "from-yellow-500/50 to-amber-500/30",
    borderColor: "border-yellow-400/50",
    textColor: "text-yellow-400",
  },
  {
    id: 9,
    image: "/drinks/pitaya-drink.png",
    title: "Pitaya Magic",
    category: "Exoticos",
    color: "from-fuchsia-500/50 to-pink-500/30",
    borderColor: "border-fuchsia-400/50",
    textColor: "text-fuchsia-400",
  },
  {
    id: 10,
    image: "/drinks/orange-drink.png",
    title: "Laranja Vitality",
    category: "Citricos",
    color: "from-orange-500/50 to-amber-500/30",
    borderColor: "border-orange-500/50",
    textColor: "text-orange-500",
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-watermelon/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pineapple/10 rounded-full blur-3xl" />

      <div
        className="container mx-auto px-4 relative z-10"
        ref={containerRef}
      >
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30">
            <Sparkles className="w-4 h-4" />
            Galeria Premium
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Arte em
            <span className="text-gradient-summer"> Cada Copo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Uma colecao visual que celebra a beleza e a sofisticacao dos nossos
            10 drinks tropicais unicos.
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {galleryItems.map((item, index) => {
            const isLarge = index === 0 || index === 4 || index === 7
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 80}ms`,
                  aspectRatio: isLarge ? '1' : '3/4'
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
                    className="object-contain p-4"
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
                    className={`text-lg md:text-xl lg:text-2xl font-bold text-foreground transition-all duration-500 ${
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
                <div className={`absolute top-4 right-4 z-30 w-10 h-10 rounded-full glass-strong flex items-center justify-center transition-all duration-500 ${hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <span className={`text-sm font-bold ${item.textColor}`}>{String(item.id).padStart(2, '0')}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
