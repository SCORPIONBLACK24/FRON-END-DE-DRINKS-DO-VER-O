"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Instagram, Facebook, Twitter, Sparkles } from "lucide-react"
import Image from "next/image"

const floatingDrinks = [
  { image: "/drinks/lime-drink.png", position: "top-10 left-10", delay: "0s" },
  { image: "/drinks/watermelon-drink.png", position: "top-20 right-20", delay: "0.5s" },
  { image: "/drinks/mango-drink.png", position: "bottom-20 left-20", delay: "1s" },
  { image: "/drinks/pitaya-drink.png", position: "bottom-10 right-10", delay: "1.5s" },
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/15" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-watermelon/10 rounded-full blur-3xl" />
        
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
          <div className="glass-strong rounded-[3rem] p-8 md:p-12 lg:p-16 border border-primary/20">
            <div className="text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-primary/30 to-accent/30 text-primary rounded-full border border-primary/30">
                <Sparkles className="w-4 h-4" />
                Junte-se a Nos
              </span>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-8 leading-tight">
                Pronto para o
                <br />
                <span className="text-gradient-summer">Verao Perfeito?</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Inscreva-se para receber novidades exclusivas, lancamentos de novos
                sabores e promocoes especiais. Seja o primeiro a experimentar!
              </p>

              {/* Email signup form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-12">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="w-full px-8 py-5 rounded-full bg-background/50 border-2 border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-primary/50 transition-all text-lg"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group text-lg"
                >
                  {isSubmitted ? (
                    <>
                      Inscrito!
                      <Sparkles className="w-5 h-5" />
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
                <div className="mb-8 text-primary font-medium animate-fade-in">
                  Obrigado! Voce recebera nossas novidades em breve.
                </div>
              )}

              {/* Stats badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <div className="px-6 py-3 rounded-full glass border border-lime-500/20">
                  <span className="text-lime-400 font-bold">10 Sabores</span>
                </div>
                <div className="px-6 py-3 rounded-full glass border border-pink-500/20">
                  <span className="text-pink-400 font-bold">100% Natural</span>
                </div>
                <div className="px-6 py-3 rounded-full glass border border-yellow-500/20">
                  <span className="text-yellow-400 font-bold">Frete Gratis</span>
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
                    className="p-4 rounded-full glass hover:bg-pink-500/20 hover:border-pink-500/30 border border-transparent transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-foreground/70 group-hover:text-pink-400 transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-4 rounded-full glass hover:bg-blue-500/20 hover:border-blue-500/30 border border-transparent transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-foreground/70 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-4 rounded-full glass hover:bg-sky-500/20 hover:border-sky-500/30 border border-transparent transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-foreground/70 group-hover:text-sky-400 transition-colors" />
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
