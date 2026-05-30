"use client"

import { useEffect, useRef } from "react"
import { Leaf, Droplets, Award, Sparkles, Heart, Zap, Flame } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Energia Explosiva",
    description: "Vitaminas e antioxidantes que disparam sua adrenalina. Cada gole é uma descarga de energia pura e natural.",
    color: "from-amber-500/25 to-yellow-600/15",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    glow: "rgba(218,165,32,0.4)",
    tag: "POTÊNCIA",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sem conservantes artificiais. Ingredientes frescos colhidos no pico do sabor.",
    color: "from-lime-500/20 to-emerald-600/10",
    iconColor: "text-lime-400",
    borderColor: "border-lime-500/25",
    glow: "rgba(166,227,161,0.35)",
    tag: "PURO",
  },
  {
    icon: Flame,
    title: "Sabor Radical",
    description: "3 sabores que explodem no paladar: Limão, Morango e Kiwi. Feitos para quem vive no limite.",
    color: "from-red-500/20 to-orange-600/10",
    iconColor: "text-red-400",
    borderColor: "border-red-500/25",
    glow: "rgba(255,82,82,0.35)",
    tag: "INTENSO",
  },
  {
    icon: Droplets,
    title: "Hidratação Premium",
    description: "Formulados para refrescar e repor energia nos dias mais quentes do verão.",
    color: "from-sky-500/20 to-blue-600/10",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/25",
    glow: "rgba(56,189,248,0.3)",
    tag: "REFRESCANTE",
  },
  {
    icon: Award,
    title: "Qualidade Artesanal",
    description: "Cada drink preparado com dedicação e expertise. Padrão de excelência em cada garrafa.",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/25",
    glow: "rgba(218,165,32,0.35)",
    tag: "PREMIUM",
  },
  {
    icon: Heart,
    title: "Feito com Paixão",
    description: "Do projeto à taça: amor, empreendedorismo e muita dedicação da turma INF-09.",
    color: "from-rose-500/20 to-pink-600/10",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/25",
    glow: "rgba(251,113,133,0.35)",
    tag: "AMOR",
  },
]

const stats = [
  { value: "3", label: "Sabores Únicos", icon: Sparkles },
  { value: "100%", label: "Natural", icon: Leaf },
  { value: "∞", label: "Energia", icon: Zap },
  { value: "5★", label: "Avaliação", icon: Award },
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
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Background - electric grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/6 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/6 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        {/* Diagonal lightning lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#daa520" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-widest uppercase bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/30">
            <Zap className="w-4 h-4" />
            Por Que Escolher
          </span>

          {/* Big bold title with glitch effect */}
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-none">
              A Experiência
            </h2>
            {/* Gold outlined text */}
            <div className="relative mt-2">
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gradient-gold leading-none"
                style={{ textShadow: "0 0 60px rgba(218,165,32,0.5), 0 0 120px rgba(218,165,32,0.2)" }}
              >
                zoom.energia
              </h2>
              {/* Underline accent */}
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8">
            Mais do que drinks — uma experiência que potencializa cada momento com
            <span className="text-amber-400 font-semibold"> energia, sabor e atitude.</span>
          </p>
        </div>

        {/* Bento Grid - Radical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card opacity-0 group relative p-7 rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.borderColor} hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{
                boxShadow: `0 0 0 0 ${feature.glow}`,
                transition: "box-shadow 0.4s ease, transform 0.4s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${feature.glow}, 0 0 80px ${feature.glow.replace("0.", "0.15")}`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${feature.glow}`
              }}
            >
              {/* Tag pill */}
              <span className={`inline-block text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full mb-5 border ${feature.borderColor} ${feature.iconColor} bg-background/40`}>
                {feature.tag}
              </span>

              {/* Icon with electric glow */}
              <div className="mb-5 relative w-fit">
                <div className="w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <div
                  className="absolute inset-0 w-14 h-14 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ backgroundColor: feature.glow.replace("rgba", "rgb").replace(/,\s*[\d.]+\)/, ")") }}
                />
              </div>

              <h3 className={`text-xl font-bold mb-3 text-foreground group-hover:${feature.iconColor} transition-colors duration-300`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              {/* Bottom glow bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${feature.iconColor.replace("text-", "via-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Arrow */}
              <span className={`absolute bottom-6 right-6 text-xl ${feature.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 transition-all duration-300`}>
                →
              </span>
            </div>
          ))}
        </div>

        {/* Radical Stats Banner */}
        <div className="relative rounded-3xl border border-amber-500/20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10" />
          <div className="absolute inset-0 animate-shimmer opacity-30" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-10 px-6 gap-3 ${
                  index < stats.length - 1 ? "border-r border-amber-500/15" : ""
                } group hover:bg-amber-500/5 transition-colors duration-300`}
              >
                <stat.icon className="w-6 h-6 text-amber-400/60 group-hover:text-amber-400 transition-colors duration-300" />
                <div
                  className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold"
                  style={{ textShadow: "0 0 30px rgba(218,165,32,0.3)" }}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm tracking-wider uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent — zoom.energia logo badge */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-amber-500/5 glass">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="zoom.energia logo" fill className="object-contain" />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-amber-400">zoom.energia</span>
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  )
}
