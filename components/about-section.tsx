"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Users, Lightbulb, Zap, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

const sabores = [
  {
    name: "Limao",
    image: "/drinks/lime-drink.png",
    color: "text-lime-400",
    borderColor: "border-lime-500/30",
    bgColor: "bg-lime-500/10",
  },
  {
    name: "Morango",
    image: "/drinks/strawberry-drink.png",
    color: "text-red-400",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Kiwi",
    image: "/drinks/kiwi-drink.png",
    color: "text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
  },
]

export function AboutSection() {
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
    <section id="sobre" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-500/5 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />

      <div
        className="container mx-auto px-4 relative z-10 opacity-0"
        ref={containerRef}
      >
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 rounded-full border border-amber-500/30">
            <GraduationCap className="w-4 h-4" />
            Sobre o Projeto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Turma
            <span className="text-gradient-gold"> INF-09</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Curso Tecnico de Informatica
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Logo with drinks below */}
          <div className="flex flex-col items-center mb-16">
            {/* Logo container */}
            <div className="relative mb-12">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Logo */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full glass-strong border-2 border-amber-500/30 flex items-center justify-center animate-float">
                <Image
                  src="/images/logo.png"
                  alt="zoom.energia Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Drinks images below logo */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {sabores.map((sabor) => (
                <div key={sabor.name} className="flex flex-col items-center group">
                  <div className={`relative w-28 h-36 md:w-36 md:h-44 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2`}>
                    <Image
                      src={sabor.image}
                      alt={`Drink de ${sabor.name}`}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <span className={`px-4 py-2 rounded-full ${sabor.bgColor} border ${sabor.borderColor} ${sabor.color} font-bold text-sm`}>
                    {sabor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Project description */}
            <div className="glass p-8 rounded-3xl border border-amber-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">zoom.energia</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O projeto <span className="text-amber-400 font-semibold">zoom.energia</span> nasceu 
                como uma iniciativa de empreendedorismo da turma INF-09. Nosso objetivo e 
                criar uma linha de bebidas energeticas naturais que combinam sabor, 
                saude e sustentabilidade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com tres sabores exclusivos - <span className="text-lime-400">Limao</span>, 
                <span className="text-red-400"> Morango</span> e <span className="text-green-400">Kiwi</span> - 
                buscamos oferecer uma alternativa refrescante e energizante para o verao, 
                especialmente para celebrar momentos especiais como o Dia dos Namorados.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-amber-500/20 text-center hover:scale-105 transition-transform">
                <Users className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Turma INF-09</h4>
                <p className="text-sm text-muted-foreground">Tecnico de Informatica</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-yellow-500/20 text-center hover:scale-105 transition-transform">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Empreendedorismo</h4>
                <p className="text-sm text-muted-foreground">Inovacao criativa</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-red-500/20 text-center hover:scale-105 transition-transform">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Dia dos Namorados</h4>
                <p className="text-sm text-muted-foreground">Tema especial</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-green-500/20 text-center hover:scale-105 transition-transform">
                <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">3 Sabores</h4>
                <p className="text-sm text-muted-foreground">Limao, Morango, Kiwi</p>
              </div>
            </div>
          </div>

          {/* Bottom quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/80">
              &ldquo;Energia para viver, sabor para amar&rdquo;
            </blockquote>
            <p className="mt-4 text-amber-400 font-medium">- zoom.energia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
