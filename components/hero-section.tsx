"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Sparkles } from "lucide-react"

const drinks = [
  {
    id: 1,
    name: "Limao",
    subtitle: "Refrescante & Citrico",
    image: "/drinks/lime-drink.png",
    color: "from-lime-400/30 to-emerald-500/20",
    glowClass: "glow-lime",
    accent: "bg-lime-400",
  },
  {
    id: 2,
    name: "Kiwi",
    subtitle: "Exotico & Vibrante",
    image: "/drinks/kiwi-drink.png",
    color: "from-green-400/30 to-teal-500/20",
    glowClass: "glow-kiwi",
    accent: "bg-green-400",
  },
  {
    id: 3,
    name: "Melancia",
    subtitle: "Doce & Tropical",
    image: "/drinks/watermelon-drink.png",
    color: "from-pink-400/30 to-red-500/20",
    glowClass: "glow-watermelon",
    accent: "bg-pink-400",
  },
  {
    id: 4,
    name: "Maracuja",
    subtitle: "Intenso & Aromatico",
    image: "/drinks/passionfruit-drink.png",
    color: "from-orange-400/30 to-yellow-500/20",
    glowClass: "glow-passionfruit",
    accent: "bg-orange-400",
  },
  {
    id: 5,
    name: "Morango",
    subtitle: "Doce & Sedutor",
    image: "/drinks/strawberry-drink.png",
    color: "from-red-400/30 to-rose-500/20",
    glowClass: "glow-strawberry",
    accent: "bg-red-400",
  },
  {
    id: 6,
    name: "Coco",
    subtitle: "Cremoso & Tropical",
    image: "/drinks/coconut-drink.png",
    color: "from-white/20 to-neutral-300/10",
    glowClass: "glow-coconut",
    accent: "bg-white",
  },
  {
    id: 7,
    name: "Manga",
    subtitle: "Doce & Exotico",
    image: "/drinks/mango-drink.png",
    color: "from-amber-400/30 to-orange-500/20",
    glowClass: "glow-mango",
    accent: "bg-amber-400",
  },
  {
    id: 8,
    name: "Abacaxi",
    subtitle: "Tropical & Acidinho",
    image: "/drinks/pineapple-drink.png",
    color: "from-yellow-400/30 to-amber-500/20",
    glowClass: "glow-pineapple",
    accent: "bg-yellow-400",
  },
  {
    id: 9,
    name: "Pitaya",
    subtitle: "Exotico & Magico",
    image: "/drinks/pitaya-drink.png",
    color: "from-fuchsia-400/30 to-pink-500/20",
    glowClass: "glow-pitaya",
    accent: "bg-fuchsia-500",
  },
  {
    id: 10,
    name: "Laranja",
    subtitle: "Classico & Vitamico",
    image: "/drinks/orange-drink.png",
    color: "from-orange-400/30 to-amber-500/20",
    glowClass: "glow-orange",
    accent: "bg-orange-500",
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

      {/* Summer decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-watermelon/10 rounded-full blur-3xl animate-pulse-glow animation-delay-600" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-pineapple/10 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        
        {/* Floating bubbles */}
        <div className="absolute bottom-0 left-[10%] w-4 h-4 bg-lime-400/30 rounded-full animate-bubble" />
        <div className="absolute bottom-0 left-[25%] w-3 h-3 bg-pink-400/30 rounded-full animate-bubble animation-delay-200" />
        <div className="absolute bottom-0 left-[40%] w-5 h-5 bg-yellow-400/30 rounded-full animate-bubble animation-delay-400" />
        <div className="absolute bottom-0 left-[60%] w-3 h-3 bg-orange-400/30 rounded-full animate-bubble animation-delay-600" />
        <div className="absolute bottom-0 left-[75%] w-4 h-4 bg-fuchsia-400/30 rounded-full animate-bubble animation-delay-800" />
        <div className="absolute bottom-0 left-[90%] w-3 h-3 bg-green-400/30 rounded-full animate-bubble animation-delay-1000" />
        
        {/* Rotating decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5 animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-accent/5 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div
            className={`text-center lg:text-left ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 animate-shimmer">
              <Sparkles className="w-4 h-4" />
              <span>Verao 2026</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold mb-8 leading-none">
              <span className="text-foreground block">Tropical</span>
              <span className="text-gradient-summer block mt-2">Paradise</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubra a essencia do verao em cada gole. 
              <span className="text-foreground font-medium"> 10 sabores tropicais </span>
              que transportam voce para o paraiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToSection}
                className="group px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 text-lg"
              >
                <span className="flex items-center gap-2 justify-center">
                  Explorar Sabores
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="px-10 py-5 glass-strong text-foreground font-semibold rounded-full hover:bg-foreground/10 transition-all duration-300 text-lg">
                Nossa Historia
              </button>
            </div>

            {/* Flavor count badge */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {drinks.slice(0, 5).map((drink) => (
                  <div
                    key={drink.id}
                    className={`w-10 h-10 rounded-full ${drink.accent} border-2 border-background flex items-center justify-center text-xs font-bold text-background`}
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-foreground/20 border-2 border-background flex items-center justify-center text-xs font-bold text-foreground">
                  +5
                </div>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">10 Sabores</p>
                <p className="text-sm text-muted-foreground">Todos naturais</p>
              </div>
            </div>
          </div>

          {/* Drink Image */}
          <div
            className={`relative flex justify-center ${isVisible ? "animate-scale-in animation-delay-400" : "opacity-0"}`}
          >
            <div className={`relative ${drinks[currentDrink].glowClass}`}>
              {/* Rotating glow rings */}
              <div className="absolute inset-0 -m-12 rounded-full border-2 border-primary/20 animate-rotate-slow" />
              <div className="absolute inset-0 -m-20 rounded-full border border-accent/10 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

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

        {/* Drink indicators - now showing all 10 */}
        <div className="flex flex-wrap gap-2 mt-16 justify-center max-w-xl mx-auto">
          {drinks.map((drink, index) => (
            <button
              key={drink.id}
              onClick={() => setCurrentDrink(index)}
              className={`relative h-3 rounded-full transition-all duration-300 overflow-hidden ${
                index === currentDrink
                  ? `w-12 ${drink.accent}`
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  )
}
