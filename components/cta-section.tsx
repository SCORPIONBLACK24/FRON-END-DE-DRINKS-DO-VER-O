"use client"

import { useEffect, useRef } from "react"
import { Heart, Sparkles } from "lucide-react"
import Image from "next/image"

const drinks = [
  {
    name: "Limao",
    subtitle: "Frescor citrico",
    image: "/drinks/lime-drink.png",
    color: "text-lime-400",
    borderColor: "border-lime-500/40",
    bgColor: "bg-lime-500/10",
    glowColor: "shadow-lime-500/20",
  },
  {
    name: "Morango",
    subtitle: "Doce paixao",
    image: "/drinks/strawberry-drink.png",
    color: "text-red-400",
    borderColor: "border-red-500/40",
    bgColor: "bg-red-500/10",
    glowColor: "shadow-red-500/20",
  },
  {
    name: "Kiwi",
    subtitle: "Sabor exotico",
    image: "/drinks/kiwi-drink.png",
    color: "text-green-400",
    borderColor: "border-green-500/40",
    bgColor: "bg-green-500/10",
    glowColor: "shadow-green-500/20",
  },
]

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
            entry.target.classList.remove("opacity-0")
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
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background - romantic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-background to-rose-500/10" />

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-4 h-4 text-red-400/30 animate-float">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute top-40 right-[15%] w-6 h-6 text-rose-400/20 animate-float animation-delay-400">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-32 left-[20%] w-5 h-5 text-red-400/25 animate-float animation-delay-200">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-20 right-[25%] w-4 h-4 text-rose-400/30 animate-float animation-delay-600">
          <Heart className="w-full h-full fill-current" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      </div>

      <div
        className="container mx-auto px-4 relative z-10 opacity-0"
        ref={containerRef}
      >
        <div className="max-w-6xl mx-auto">
          {/* Glass card */}
          <div className="glass-strong rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 border border-red-500/20">
            <div className="text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-red-500/30 to-rose-500/30 text-red-400 rounded-full border border-red-500/30">
                <Heart className="w-4 h-4 fill-current" />
                Especial Dia dos Namorados
                <Sparkles className="w-4 h-4" />
              </span>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 leading-tight">
                Celebre o Amor
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-8">
                <span className="text-gradient-gold">Neste Verao</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Momentos especiais merecem sabores especiais. Compartilhe 
                <span className="text-red-400 font-semibold"> amor e paixao </span>
                com drinks que aquecem o coracao e refrescam a alma.
              </p>

              {/* Drinks showcase - romantic presentation */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-foreground/80 mb-6 flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Sabores do Amor
                  <Heart className="w-5 h-5 text-red-400" />
                </h3>
                
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {drinks.map((drink, index) => (
                    <div
                      key={drink.name}
                      className={`group flex flex-col items-center p-4 rounded-2xl ${drink.bgColor} border ${drink.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-xl ${drink.glowColor}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Drink image */}
                      <div className="relative w-24 h-32 md:w-32 md:h-40 mb-3 group-hover:-translate-y-2 transition-transform duration-300">
                        <Image
                          src={drink.image}
                          alt={`Drink de ${drink.name}`}
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                      
                      {/* Drink info */}
                      <h4 className={`font-bold ${drink.color} text-lg`}>{drink.name}</h4>
                      <p className="text-xs text-muted-foreground">{drink.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Romantic message */}
              <div className="max-w-xl mx-auto mb-10 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 border border-red-500/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-red-400 fill-current" />
                  <span className="text-red-400 font-semibold">Para Casais Apaixonados</span>
                  <Heart className="w-5 h-5 text-red-400 fill-current" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brinde ao amor com nossos drinks especiais. Perfeitos para um encontro romantico, 
                  um piquenique ao por do sol ou qualquer momento a dois que mereca ser inesquecivel.
                </p>
              </div>

              {/* Bottom accent */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/30 bg-amber-500/5">
                  <div className="relative w-8 h-8">
                    <Image src="/images/logo.png" alt="zoom.energia" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase text-amber-400">zoom.energia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
