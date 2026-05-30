"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Zap } from "lucide-react"

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Drinks", href: "#drinks" },
  { label: "Caipirinhas", href: "#caipirinhas" },
  { label: "Sobre", href: "#features" },
  { label: "Galeria", href: "#gallery" },
  { label: "Contato", href: "#cta" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between rounded-full px-6 lg:px-8 py-3 transition-all duration-500 ${
              isScrolled ? "glass-strong shadow-2xl shadow-amber-500/10" : ""
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#")
              }}
              className="flex items-center gap-3 text-2xl font-serif font-bold text-foreground hover:text-amber-400 transition-colors"
            >
              <Image
                src="/images/logo.png"
                alt="Zoom Energia"
                width={48}
                height={48}
                className="rounded-full animate-electric-pulse"
              />
              <span className="hidden sm:inline">
                zoom<span className="text-gradient-gold">.energia</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-sm font-semibold text-foreground/70 hover:text-amber-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-amber-400">3 Sabores</span>
              </div>
              <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
                Pedir Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-foreground glass rounded-full"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="flex flex-col items-center justify-center h-full gap-8 relative z-10">
          {/* Mobile Logo */}
          <Image
            src="/images/logo.png"
            alt="Zoom Energia"
            width={80}
            height={80}
            className="rounded-full animate-electric-pulse mb-4"
          />
          
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className={`text-3xl font-bold text-foreground hover:text-amber-400 transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-amber-400">3 Sabores</span>
            </div>
          </div>
          <button className="mt-4 px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-lg font-bold rounded-full hover:shadow-xl transition-all duration-300">
            Pedir Agora
          </button>
        </div>
      </div>
    </>
  )
}
