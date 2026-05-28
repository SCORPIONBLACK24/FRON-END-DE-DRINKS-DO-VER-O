"use client"

import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  produtos: [
    { label: "Limao Tropical", href: "#drinks", color: "hover:text-lime-400" },
    { label: "Kiwi Exotico", href: "#drinks", color: "hover:text-green-400" },
    { label: "Melancia Splash", href: "#drinks", color: "hover:text-pink-400" },
    { label: "Maracuja Sunset", href: "#drinks", color: "hover:text-orange-400" },
    { label: "Morango Bliss", href: "#drinks", color: "hover:text-red-400" },
  ],
  maisproductos: [
    { label: "Coco Paradise", href: "#drinks", color: "hover:text-white" },
    { label: "Manga Sunrise", href: "#drinks", color: "hover:text-amber-400" },
    { label: "Abacaxi Breeze", href: "#drinks", color: "hover:text-yellow-400" },
    { label: "Pitaya Magic", href: "#drinks", color: "hover:text-fuchsia-400" },
    { label: "Laranja Vitality", href: "#drinks", color: "hover:text-orange-500" },
  ],
  caipirinhas: [
    { label: "Caipirinha Classica", href: "#caipirinhas", color: "hover:text-lime-400" },
    { label: "Caipirinha Morango", href: "#caipirinhas", color: "hover:text-red-400" },
    { label: "Caipirinha Maracuja", href: "#caipirinhas", color: "hover:text-orange-400" },
    { label: "Caipirinha Kiwi", href: "#caipirinhas", color: "hover:text-green-400" },
    { label: "Caipirinha Melancia", href: "#caipirinhas", color: "hover:text-pink-400" },
    { label: "Caipirinha Manga", href: "#caipirinhas", color: "hover:text-amber-400" },
    { label: "Caipirinha Abacaxi", href: "#caipirinhas", color: "hover:text-yellow-400" },
    { label: "Caipirinha Coco", href: "#caipirinhas", color: "hover:text-slate-200" },
  ],
  empresa: [
    { label: "Sobre Nos", href: "#features" },
    { label: "Nossa Historia", href: "#" },
    { label: "Sustentabilidade", href: "#" },
    { label: "Carreira", href: "#" },
  ],
  suporte: [
    { label: "FAQ", href: "#" },
    { label: "Contato", href: "#cta" },
    { label: "Politica de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
}

const drinkThumbs = [
  "/drinks/lime-drink.png",
  "/drinks/watermelon-drink.png",
  "/drinks/mango-drink.png",
  "/drinks/pitaya-drink.png",
]

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-foreground/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-6 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-3 text-3xl font-serif font-bold text-foreground mb-6 inline-flex"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span>
                Tropical<span className="text-gradient-summer">Paradise</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Celebrando o verao brasileiro com 18 drinks e caipirinhas artesanais feitas com
              paixao e os melhores ingredientes tropicais.
            </p>

            {/* Drink thumbnails */}
            <div className="flex -space-x-4 mb-8">
              {drinkThumbs.map((thumb, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-full glass border-2 border-background overflow-hidden relative group hover:scale-110 hover:z-10 transition-all cursor-pointer"
                >
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    className="object-cover scale-150"
                  />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-sm">
                +14
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Rio de Janeiro, Brasil</span>
              </a>
              <a
                href="mailto:contato@tropicalparadise.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">contato@tropicalparadise.com</span>
              </a>
              <a
                href="tel:+5521999999999"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">+55 (21) 99999-9999</span>
              </a>
            </div>
          </div>

          {/* Products Column 1 */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Drinks 1-5
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
          </div>

          {/* Products Column 2 */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Drinks 6-10
            </h4>
            <ul className="space-y-4">
              {footerLinks.maisproductos.map((link) => (
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

          {/* Caipirinhas Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Caipirinhas
            </h4>
            <ul className="space-y-3">
              {footerLinks.caipirinhas.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm text-muted-foreground ${link.color} transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-foreground/10">
                <a
                  href="#caipirinhas"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Ver todas +4
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full" />
              Empresa
            </h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              Suporte
            </h4>
            <ul className="space-y-4">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Tropical Paradise. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-muted-foreground rounded-full hidden md:block" />
              <span className="text-sm text-muted-foreground">
                Feito com{" "}
                <span className="text-red-400">amor</span>
                {" "}no Brasil
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-pink-500/20 border border-transparent hover:border-pink-500/30 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground/70 group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-blue-500/20 border border-transparent hover:border-blue-500/30 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-sky-500/20 border border-transparent hover:border-sky-500/30 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground/70 group-hover:text-sky-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
