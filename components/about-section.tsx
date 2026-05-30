"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Users, Lightbulb, Zap, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

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
            Curso Técnico de Informática
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Logo and branding */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Logo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass-strong border-2 border-amber-500/30 flex items-center justify-center animate-float">
                <Image
                  src="/images/logo.png"
                  alt="zoom.energia Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-4 py-2 glass rounded-full border border-lime-500/30">
                <span className="text-lime-400 text-sm font-bold">Limão</span>
              </div>
              <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-4 px-4 py-2 glass rounded-full border border-red-500/30">
                <span className="text-red-400 text-sm font-bold">Morango</span>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 px-4 py-2 glass rounded-full border border-green-500/30">
                <span className="text-green-400 text-sm font-bold">Kiwi</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
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
                como uma iniciativa de empreendedorismo da turma INF-09. Nosso objetivo é 
                criar uma linha de bebidas energéticas naturais que combinam sabor, 
                saúde e sustentabilidade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com três sabores exclusivos - <span className="text-lime-400">Limão</span>, 
                <span className="text-red-400"> Morango</span> e <span className="text-green-400">Kiwi</span> - 
                buscamos oferecer uma alternativa refrescante e energizante para o verão, 
                especialmente para celebrar momentos especiais como o Dia dos Namorados.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-amber-500/20 text-center">
                <Users className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Turma INF-09</h4>
                <p className="text-sm text-muted-foreground">Técnico de Informática</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-yellow-500/20 text-center">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Empreendedorismo</h4>
                <p className="text-sm text-muted-foreground">Inovação criativa</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-red-500/20 text-center">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">Dia dos Namorados</h4>
                <p className="text-sm text-muted-foreground">Tema especial</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-green-500/20 text-center">
                <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-1">3 Sabores</h4>
                <p className="text-sm text-muted-foreground">Limão, Morango, Kiwi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/80">
            &ldquo;Energia para viver, sabor para amar&rdquo;
          </blockquote>
          <p className="mt-4 text-amber-400 font-medium">- zoom.energia</p>
        </div>
      </div>
    </section>
  )
}
