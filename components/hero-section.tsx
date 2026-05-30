"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Zap } from "lucide-react"

const drinks = [
  {
    id: 1,
    name: "Limão",
    subtitle: "Refrescante & Cítrico",
    image: "/drinks/lime-drink.png",
    color: "from-lime-400/30 to-emerald-500/20",
    glowClass: "glow-lime",
    accent: "bg-lime-400",
  },
  {
    id: 2,
    name: "Morango",
    subtitle: "Doce & Sedutor",
    image: "/drinks/strawberry-drink.png",
    color: "from-red-400/30 to-rose-500/20",
    glowClass: "glow-strawberry",
    accent: "bg-red-400",
  },
  {
    id: 3,
    name: "Kiwi",
    subtitle: "Exótico & Vibrante",
    image: "/drinks/kiwi-drink.png",
    color: "from-green-400/30 to-teal-500/20",
    glowClass: "glow-kiwi",
    accent: "bg-green-400",
  },
]

export function HeroSection() {
  const [currentDrink, setCurrentDrink] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentDrink((prev) => (prev + 1) % drinks.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = () => {
    document.getElementById("drinks")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${drinks[currentDrink].color} transition-all duration-1000`}
      />

      {/* Energy decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow orbs - gold themed */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl animate-pulse-glow animation-delay-600" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        
        {/* Floating bubbles - gold */}
        <div className="absolute bottom-0 left-[10%] w-4 h-4 bg-amber-400/30 rounded-full animate-bubble" />
        <div className="absolute bottom-0 left-[25%] w-3 h-3 bg-yellow-400/30 rounded-full animate-bubble animation-delay-200" />
        <div className="absolute bottom-0 left-[40%] w-5 h-5 bg-amber-500/30 rounded-full animate-bubble animation-delay-400" />
        <div className="absolute bottom-0 left-[60%] w-3 h-3 bg-yellow-500/30 rounded-full animate-bubble animation-delay-600" />
        <div className="absolute bottom-0 left-[75%] w-4 h-4 bg-amber-400/30 rounded-full animate-bubble animation-delay-800" />
        <div className="absolute bottom-0 left-[90%] w-3 h-3 bg-yellow-400/30 rounded-full animate-bubble animation-delay-1000" />
        
        {/* Rotating decorative ring - gold */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-500/10 animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-yellow-500/5 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div
            className={`text-center lg:text-left ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-400 rounded-full border border-amber-500/30 animate-shimmer">
              <Zap className="w-4 h-4" />
              <span>Especial Dia dos Namorados</span>
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold mb-8 leading-none">
              <span className="text-foreground block">zoom</span>
              <span className="text-gradient-gold block mt-2">.energia</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Celebre o amor neste verão com sabores vibrantes.
              <span className="text-red-400 font-medium"> Energia e paixão </span>
              em cada gole para momentos especiais a dois.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToSection}
                className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105 text-lg animate-electric-pulse"
              >
                <span className="flex items-center gap-2 justify-center">
                  Explorar Sabores
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="px-10 py-5 glass-strong text-foreground font-semibold rounded-full hover:bg-amber-500/10 transition-all duration-300 text-lg">
                Sobre o Projeto
              </button>
            </div>

            {/* Flavor count badge */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {drinks.map((drink) => (
                  <div
                    key={drink.id}
                    className={`w-10 h-10 rounded-full ${drink.accent} border-2 border-background flex items-center justify-center text-xs font-bold text-background`}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">3 Sabores</p>
                <p className="text-sm text-muted-foreground">Energia natural</p>
              </div>
            </div>
          </div>

          {/* Drink Image */}
          <div
            className={`relative flex justify-center ${isVisible ? "animate-scale-in animation-delay-400" : "opacity-0"}`}
          >
            <div className={`relative ${drinks[currentDrink].glowClass}`}>
              {/* Rotating glow rings - gold */}
              <div className="absolute inset-0 -m-12 rounded-full border-2 border-amber-500/20 animate-rotate-slow" />
              <div className="absolute inset-0 -m-20 rounded-full border border-yellow-500/10 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

              {/* Main drink image */}
              <div className="relative w-[280px] h-[380px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px] animate-float">
                <Image
                  src={drinks[currentDrink].image}
                  alt={`Drink de ${drinks[currentDrink].name}`}
                  fill
                  className="object-contain drop-shadow-2xl transition-all duration-700"
                  priority
                />
              </div>

              {/* Drink name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-strong px-8 py-4 rounded-2xl">
                <p className="text-xl font-bold text-foreground">
                  {drinks[currentDrink].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {drinks[currentDrink].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drink indicators - 3 sabores */}
        <div className="flex gap-3 mt-16 justify-center">
          {drinks.map((drink, index) => (
            <button
              key={drink.id}
              onClick={() => setCurrentDrink(index)}
              className={`relative h-3 rounded-full transition-all duration-300 overflow-hidden ${
                index === currentDrink
                  ? `w-16 ${drink.accent}`
                  : "w-3 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Ver drink de ${drink.name}`}
            >
              {index === currentDrink && (
                <span className="absolute inset-0 animate-shimmer" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400/50 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  )
}
