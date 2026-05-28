"use client"

import { useEffect, useRef } from "react"
import { Leaf, Droplets, Sun, Award, Sparkles, Heart, Zap } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Ingredientes frescos e organicos, sem conservantes artificiais.",
    color: "from-lime-500/20 to-emerald-500/10",
    iconColor: "text-lime-400",
    borderColor: "border-lime-500/20",
  },
  {
    icon: Droplets,
    title: "Hidratacao Premium",
    description: "Formulados para refrescar e hidratar nos dias mais quentes.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Sun,
    title: "Sabor do Verao",
    description:
      "Receitas exclusivas que capturam a essencia da estacao mais quente.",
    color: "from-yellow-500/20 to-orange-500/10",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Award,
    title: "Qualidade Artesanal",
    description: "Cada drink e preparado com dedicacao e expertise de mestres.",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    icon: Sparkles,
    title: "10 Sabores Unicos",
    description: "De citricos classicos a frutas exoticas, variedade para todos.",
    color: "from-fuchsia-500/20 to-pink-500/10",
    iconColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/20",
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Paixao e cuidado em cada etapa da producao.",
    color: "from-red-500/20 to-rose-500/10",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20",
  },
  {
    icon: Zap,
    title: "Energia Natural",
    description: "Vitaminas e antioxidantes para turbinar seu dia.",
    color: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-up")
                card.classList.remove("opacity-0")
              }, index * 100)
            })
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
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-watermelon/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30">
            <Sparkles className="w-4 h-4" />
            Por Que Escolher
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            A Experiencia
            <span className="text-gradient-tropical"> Tropical Paradise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Mais do que drinks, criamos momentos inesqueciveis que celebram o
            melhor do verao brasileiro com 10 sabores unicos.
          </p>
        </div>

        {/* Features Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card opacity-0 group relative p-8 rounded-3xl bg-gradient-to-br ${feature.color} border ${feature.borderColor} hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
                index === 0 ? 'lg:col-span-2' : ''
              } ${index === 4 ? 'lg:col-span-2' : ''}`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="mb-6 relative">
                <div className={`w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl ${feature.iconColor} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${feature.color} rotate-45`} />
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <span className={`text-2xl ${feature.iconColor}`}>→</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-summer mb-2">10</div>
            <div className="text-muted-foreground">Sabores Unicos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-summer mb-2">100%</div>
            <div className="text-muted-foreground">Natural</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-summer mb-2">50+</div>
            <div className="text-muted-foreground">Ingredientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-summer mb-2">5★</div>
            <div className="text-muted-foreground">Avaliacao</div>
          </div>
        </div>
      </div>
    </section>
  )
}
