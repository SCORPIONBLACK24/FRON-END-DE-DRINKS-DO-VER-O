"use client"

import { useEffect, useRef } from "react"
import { Leaf, Droplets, Award, Sparkles, Heart, Zap, Flame } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Energia Explosiva",
    description: "Vitaminas e antioxidantes que potencializam sua vitalidade.",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Ingredientes frescos sem conservantes artificiais.",
    iconColor: "text-lime-400",
    bgColor: "bg-lime-500/10",
    borderColor: "border-lime-500/30",
  },
  {
    icon: Flame,
    title: "Sabor Intenso",
    description: "3 sabores que explodem no paladar: Limao, Morango e Kiwi.",
    iconColor: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    icon: Droplets,
    title: "Refrescancia Premium",
    description: "Formulados para os dias mais quentes do verao.",
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30",
  },
  {
    icon: Award,
    title: "Qualidade Artesanal",
    description: "Cada drink preparado com dedicacao e expertise.",
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: Heart,
    title: "Feito com Paixao",
    description: "Amor e dedicacao da turma INF-09 em cada gole.",
    iconColor: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
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
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-500/5 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-medium tracking-widest uppercase bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/30">
            <Sparkles className="w-4 h-4" />
            Por Que Escolher
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            A Experiencia
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-6">
            zoom.energia
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Mais do que drinks - uma experiencia que potencializa cada momento
          </p>
        </div>

        {/* Features Grid - Clean 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`feature-card opacity-0 group p-6 rounded-2xl ${feature.bgColor} border ${feature.borderColor} hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-amber-500/20 bg-amber-500/5 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-amber-500/20">
            <div className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">3</div>
              <div className="text-sm text-muted-foreground">Sabores</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Natural</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">INF-09</div>
              <div className="text-sm text-muted-foreground">Turma</div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">5</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <span>Estrelas</span>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logo Badge */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-amber-500/30 bg-amber-500/5">
            <div className="relative w-8 h-8">
              <Image src="/images/logo.png" alt="zoom.energia" fill className="object-contain" />
            </div>
            <span className="text-sm font-bold tracking-wider uppercase text-amber-400">zoom.energia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
