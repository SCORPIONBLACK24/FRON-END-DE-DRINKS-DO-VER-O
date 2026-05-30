"use client"

import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Zap } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  produtos: [
    { label: "Limão Tropical", href: "#drinks", color: "hover:text-lime-400" },
    { label: "Morango Bliss", href: "#drinks", color: "hover:text-red-400" },
    { label: "Kiwi Exótico", href: "#drinks", color: "hover:text-green-400" },
  ],
  caipirinhas: [
    { label: "Caipirinha Limão", href: "#caipirinhas", color: "hover:text-lime-400" },
    { label: "Caipirinha Morango", href: "#caipirinhas", color: "hover:text-red-400" },
    { label: "Caipirinha Kiwi", href: "#caipirinhas", color: "hover:text-green-400" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#features" },
    { label: "Nossa História", href: "#" },
    { label: "Sustentabilidade", href: "#" },
    { label: "Carreira", href: "#" },
  ],
  suporte: [
    { label: "FAQ", href: "#" },
    { label: "Contato", href: "#cta" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
}

const drinkThumbs = [
  "/drinks/lime-drink.png",
  "/drinks/strawberry-drink.png",
  "/drinks/kiwi-drink.png",
]

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-amber-500/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-3 text-3xl font-serif font-bold text-foreground mb-6 inline-flex"
            >
              <Image
                src="/images/logo.png"
                alt="Zoom Energia"
                width={56}
                height={56}
                className="rounded-full animate-electric-pulse"
              />
              <span>
                zoom<span className="text-gradient-gold">.energia</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Potencialize seu dia com 3 sabores explosivos feitos com
              paixão e os melhores ingredientes naturais. Energia pura em cada gole.
            </p>

            {/* Drink thumbnails */}
            <div className="flex -space-x-4 mb-8">
              {drinkThumbs.map((thumb, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-full glass border-2 border-amber-500/30 overflow-hidden relative group hover:scale-110 hover:z-10 transition-all cursor-pointer"
                >
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    className="object-cover scale-150"
                  />
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm">Rio de Janeiro, Brasil</span>
              </a>
              <a
                href="mailto:contato@zoomenergia.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm">contato@zoomenergia.com</span>
              </a>
              <a
                href="tel:+5521999999999"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm">+55 (21) 99999-9999</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Nossos Drinks
            </h4>
            <ul className="space-y-4">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm text-muted-foreground ${link.color} transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-foreground mt-8 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Caipirinhas
            </h4>
            <ul className="space-y-4">
              {footerLinks.caipirinhas.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm text-muted-foreground ${link.color} transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              Empresa
            </h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              Suporte
            </h4>
            <ul className="space-y-4">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 zoom.energia. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-muted-foreground rounded-full hidden md:block" />
              <span className="text-sm text-muted-foreground">
                Feito com{" "}
                <span className="text-amber-400">energia</span>
                {" "}no Brasil
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-amber-500/20 border border-transparent hover:border-amber-500/30 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground/70 group-hover:text-amber-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-amber-500/20 border border-transparent hover:border-amber-500/30 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-amber-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-amber-500/20 border border-transparent hover:border-amber-500/30 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground/70 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
