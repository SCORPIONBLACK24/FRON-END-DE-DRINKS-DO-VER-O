"use client"

import { useEffect, useRef } from "react"
import { Instagram, Facebook, Heart, Zap, GraduationCap, Lightbulb } from "lucide-react"
import Image from "next/image"

const floatingDrinks = [
  { image: "/drinks/lime-drink.png", position: "top-10 left-10", delay: "0s" },
  { image: "/drinks/strawberry-drink.png", position: "top-20 right-20", delay: "0.5s" },
  { image: "/drinks/kiwi-drink.png", position: "bottom-20 left-20", delay: "1s" },
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-background to-red-500/10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl" />
        
        {/* Floating drink images */}
        {floatingDrinks.map((drink, index) => (
          <div
            key={index}
            className={`absolute ${drink.position} w-24 h-32 opacity-20 animate-float hidden lg:block`}
            style={{ animationDelay: drink.delay }}
          >
            <Image
              src={drink.image}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div
        className="container mx-auto px-4 relative z-10 opacity-0"
        ref={containerRef}
      >
        <div className="max-w-5xl mx-auto">
          {/* Glass card */}
          <div className="glass-strong rounded-[3rem] p-8 md:p-12 lg:p-16 border border-amber-500/20">
            <div className="text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-red-500/30 to-amber-500/30 text-red-400 rounded-full border border-red-500/30">
                <Heart className="w-4 h-4" />
                Especial Dia dos Namorados
              </span>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-8 leading-tight">
                Celebre o Amor
                <br />
                <span className="text-gradient-gold">Neste Verão</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Um projeto desenvolvido com carinho para celebrar momentos especiais.
                Drinks que unem sabor, energia e paixão para compartilhar a dois.
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <div className="px-6 py-3 rounded-full glass border border-lime-500/20">
                  <span className="text-lime-400 font-bold">Limão</span>
                </div>
                <div className="px-6 py-3 rounded-full glass border border-red-500/20">
                  <span className="text-red-400 font-bold">Morango</span>
                </div>
                <div className="px-6 py-3 rounded-full glass border border-green-500/20">
                  <span className="text-green-400 font-bold">Kiwi</span>
                </div>
              </div>

              {/* Project info */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                <div className="glass p-6 rounded-2xl border border-amber-500/20 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-amber-400" />
                    <h3 className="font-bold text-foreground">Projeto Acadêmico</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvido pela turma INF-09 do curso Técnico de Informática
                  </p>
                </div>
                <div className="glass p-6 rounded-2xl border border-amber-500/20 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    <h3 className="font-bold text-foreground">Empreendedorismo</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Explorando inovação e criatividade no mundo das bebidas energéticas
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <span className="text-sm text-muted-foreground">
                  Siga o projeto
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-4 rounded-full glass hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-foreground/70 group-hover:text-amber-400 transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-4 rounded-full glass hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-foreground/70 group-hover:text-amber-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
