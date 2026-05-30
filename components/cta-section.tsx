"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Instagram, Facebook, Twitter, Zap } from "lucide-react"
import Image from "next/image"

const floatingDrinks = [
  { image: "/drinks/lime-drink.png", position: "top-10 left-10", delay: "0s" },
  { image: "/drinks/strawberry-drink.png", position: "top-20 right-20", delay: "0.5s" },
  { image: "/drinks/kiwi-drink.png", position: "bottom-20 left-20", delay: "1s" },
]

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-background to-yellow-500/15" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
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
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-amber-500/30 to-yellow-500/30 text-amber-400 rounded-full border border-amber-500/30">
                <Zap className="w-4 h-4" />
                Junte-se a Nós
              </span>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-8 leading-tight">
                Pronto para
                <br />
                <span className="text-gradient-gold">Energia Máxima?</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Inscreva-se para receber novidades exclusivas, lançamentos e
                promoções especiais. Seja o primeiro a potencializar seu dia!
              </p>

              {/* Email signup form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-12">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="w-full px-8 py-5 rounded-full bg-background/50 border-2 border-amber-500/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-amber-500/50 transition-all text-lg"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group text-lg"
                >
                  {isSubmitted ? (
                    <>
                      Inscrito!
                      <Zap className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Inscrever
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Success message */}
              {isSubmitted && (
                <div className="mb-8 text-amber-400 font-medium animate-fade-in">
                  Obrigado! Você receberá nossas novidades em breve.
                </div>
              )}

              {/* Stats badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <div className="px-6 py-3 rounded-full glass border border-lime-500/20">
                  <span className="text-lime-400 font-bold">3 Sabores</span>
                </div>
                <div className="px-6 py-3 rounded-full glass border border-amber-500/20">
                  <span className="text-amber-400 font-bold">100% Natural</span>
                </div>
                <div className="px-6 py-3 rounded-full glass border border-yellow-500/20">
                  <span className="text-yellow-400 font-bold">Frete Grátis</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <span className="text-sm text-muted-foreground">
                  Siga-nos nas redes
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
                  <a
                    href="#"
                    className="p-4 rounded-full glass hover:bg-amber-500/20 hover:border-amber-500/30 border border-transparent transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-foreground/70 group-hover:text-amber-400 transition-colors" />
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
