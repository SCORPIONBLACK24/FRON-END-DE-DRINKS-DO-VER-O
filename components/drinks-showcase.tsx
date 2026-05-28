"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Droplets, Leaf, Sun, Sparkles, Cherry, Palmtree, Apple, Citrus, Flower2, Circle } from "lucide-react"

const drinks = [
  {
    id: 1,
    name: "Limao Tropical",
    tagline: "Frescor Citrico",
    description:
      "A explosao citrica perfeita para os dias quentes. Limoes frescos combinados com hortela e um toque de gengibre criam uma experiencia refrescante incomparavel.",
    image: "/drinks/lime-drink.png",
    color: "lime",
    bgGradient: "from-lime-500/30 via-emerald-500/15 to-transparent",
    ingredients: ["Limao Siciliano", "Hortela Fresca", "Gengibre", "Agua com Gas"],
    icon: Leaf,
    stats: { refreshment: 98, sweetness: 25, intensity: 70 },
  },
  {
    id: 2,
    name: "Kiwi Exotico",
    tagline: "Sabor da Nova Zelandia",
    description:
      "Uma viagem sensorial ao exotico. O kiwi maduro encontra a sutileza do pepino e a docura do mel, criando um drink unico e sofisticado.",
    image: "/drinks/kiwi-drink.png",
    color: "kiwi",
    bgGradient: "from-green-500/30 via-teal-500/15 to-transparent",
    ingredients: ["Kiwi Premium", "Pepino", "Mel Organico", "Limao"],
    icon: Sparkles,
    stats: { refreshment: 85, sweetness: 45, intensity: 60 },
  },
  {
    id: 3,
    name: "Melancia Splash",
    tagline: "Docura Tropical",
    description:
      "A essencia do verao em um copo. Melancia suculenta com manjericao fresco e um twist de limao criam o drink mais refrescante da temporada.",
    image: "/drinks/watermelon-drink.png",
    color: "watermelon",
    bgGradient: "from-pink-500/30 via-red-500/15 to-transparent",
    ingredients: ["Melancia Fresca", "Manjericao", "Limao Taiti", "Acucar Demerara"],
    icon: Droplets,
    stats: { refreshment: 95, sweetness: 65, intensity: 50 },
  },
  {
    id: 4,
    name: "Maracuja Sunset",
    tagline: "Paixao Tropical",
    description:
      "Intensidade e aroma em perfeita harmonia. O maracuja da Amazonia encontra a cremosidade do coco, resultando em um drink que e pura paixao.",
    image: "/drinks/passionfruit-drink.png",
    color: "passionfruit",
    bgGradient: "from-orange-500/30 via-yellow-500/15 to-transparent",
    ingredients: ["Maracuja Amazonico", "Leite de Coco", "Mel", "Baunilha"],
    icon: Sun,
    stats: { refreshment: 80, sweetness: 55, intensity: 90 },
  },
  {
    id: 5,
    name: "Morango Bliss",
    tagline: "Doce Seducao",
    description:
      "Romance em forma liquida. Morangos organicos com um toque de baunilha e limao criam uma experiencia suave e irresistivel.",
    image: "/drinks/strawberry-drink.png",
    color: "strawberry",
    bgGradient: "from-red-500/30 via-rose-500/15 to-transparent",
    ingredients: ["Morango Organico", "Baunilha", "Limao", "Acucar de Coco"],
    icon: Cherry,
    stats: { refreshment: 75, sweetness: 80, intensity: 55 },
  },
  {
    id: 6,
    name: "Coco Paradise",
    tagline: "Cremoso & Tropical",
    description:
      "O sabor das praias paradisiacas. Agua de coco fresca com polpa cremosa e um toque de abacaxi transportam voce direto para as Maldivas.",
    image: "/drinks/coconut-drink.png",
    color: "coconut",
    bgGradient: "from-white/20 via-neutral-200/10 to-transparent",
    ingredients: ["Agua de Coco", "Polpa de Coco", "Abacaxi", "Leite Condensado"],
    icon: Palmtree,
    stats: { refreshment: 88, sweetness: 60, intensity: 40 },
  },
  {
    id: 7,
    name: "Manga Sunrise",
    tagline: "Doce & Exotico",
    description:
      "O nascer do sol em um copo. Manga Palmer madura com cardamomo e um toque de lima criam uma explosao de sabor tropical.",
    image: "/drinks/mango-drink.png",
    color: "mango",
    bgGradient: "from-amber-500/30 via-orange-500/15 to-transparent",
    ingredients: ["Manga Palmer", "Cardamomo", "Lima", "Acucar Mascavo"],
    icon: Sun,
    stats: { refreshment: 82, sweetness: 75, intensity: 65 },
  },
  {
    id: 8,
    name: "Abacaxi Breeze",
    tagline: "Tropical & Acidinho",
    description:
      "A brisa tropical perfeita. Abacaxi perola com hortela e gengibre criam um drink equilibrado entre doce e acidez.",
    image: "/drinks/pineapple-drink.png",
    color: "pineapple",
    bgGradient: "from-yellow-500/30 via-amber-500/15 to-transparent",
    ingredients: ["Abacaxi Perola", "Hortela", "Gengibre", "Mel de Abelha"],
    icon: Citrus,
    stats: { refreshment: 92, sweetness: 50, intensity: 75 },
  },
  {
    id: 9,
    name: "Pitaya Magic",
    tagline: "Exotico & Magico",
    description:
      "Uma experiencia magica e unica. Pitaya vermelha com lichia e agua de rosas criam um drink visualmente deslumbrante.",
    image: "/drinks/pitaya-drink.png",
    color: "pitaya",
    bgGradient: "from-fuchsia-500/30 via-pink-500/15 to-transparent",
    ingredients: ["Pitaya Vermelha", "Lichia", "Agua de Rosas", "Agave"],
    icon: Flower2,
    stats: { refreshment: 78, sweetness: 70, intensity: 85 },
  },
  {
    id: 10,
    name: "Laranja Vitality",
    tagline: "Classico & Vitamico",
    description:
      "O classico reinventado. Laranjas frescas com cenoura e curcuma criam um drink energizante e cheio de vitalidade.",
    image: "/drinks/orange-drink.png",
    color: "orange",
    bgGradient: "from-orange-500/30 via-amber-500/15 to-transparent",
    ingredients: ["Laranja Bahia", "Cenoura", "Curcuma", "Gengibre"],
    icon: Circle,
    stats: { refreshment: 85, sweetness: 55, intensity: 60 },
  },
]

const colorClasses = {
  lime: {
    text: "text-lime-400",
    bg: "bg-lime-500/20",
    bgSolid: "bg-lime-400",
    border: "border-lime-500/30",
    glow: "shadow-lime-500/30",
    hover: "hover:bg-lime-500/30",
  },
  kiwi: {
    text: "text-green-400",
    bg: "bg-green-500/20",
    bgSolid: "bg-green-400",
    border: "border-green-500/30",
    glow: "shadow-green-500/30",
    hover: "hover:bg-green-500/30",
  },
  watermelon: {
    text: "text-pink-400",
    bg: "bg-pink-500/20",
    bgSolid: "bg-pink-400",
    border: "border-pink-500/30",
    glow: "shadow-pink-500/30",
    hover: "hover:bg-pink-500/30",
  },
  passionfruit: {
    text: "text-orange-400",
    bg: "bg-orange-500/20",
    bgSolid: "bg-orange-400",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/30",
    hover: "hover:bg-orange-500/30",
  },
  strawberry: {
    text: "text-red-400",
    bg: "bg-red-500/20",
    bgSolid: "bg-red-400",
    border: "border-red-500/30",
    glow: "shadow-red-500/30",
    hover: "hover:bg-red-500/30",
  },
  coconut: {
    text: "text-neutral-200",
    bg: "bg-white/10",
    bgSolid: "bg-white",
    border: "border-white/20",
    glow: "shadow-white/20",
    hover: "hover:bg-white/20",
  },
  mango: {
    text: "text-amber-400",
    bg: "bg-amber-500/20",
    bgSolid: "bg-amber-400",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/30",
    hover: "hover:bg-amber-500/30",
  },
  pineapple: {
    text: "text-yellow-400",
    bg: "bg-yellow-500/20",
    bgSolid: "bg-yellow-400",
    border: "border-yellow-500/30",
    glow: "shadow-yellow-500/30",
    hover: "hover:bg-yellow-500/30",
  },
  pitaya: {
    text: "text-fuchsia-400",
    bg: "bg-fuchsia-500/20",
    bgSolid: "bg-fuchsia-400",
    border: "border-fuchsia-500/30",
    glow: "shadow-fuchsia-500/30",
    hover: "hover:bg-fuchsia-500/30",
  },
  orange: {
    text: "text-orange-500",
    bg: "bg-orange-500/20",
    bgSolid: "bg-orange-500",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/30",
    hover: "hover:bg-orange-500/30",
  },
}

export function DrinksShowcase() {
  const [activeDrink, setActiveDrink] = useState<number | null>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const isEven = index % 2 === 0
              ref.classList.add(isEven ? "animate-slide-in-left" : "animate-slide-in-right")
              ref.classList.remove("opacity-0")
            }
          })
        },
        { threshold: 0.15 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="drinks" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-tropical pointer-events-none" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30">
            <Sparkles className="w-4 h-4" />
            Nossa Colecao Premium
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8">
            <span className="text-foreground">10 Sabores que</span>
            <br />
            <span className="text-gradient-tropical">Encantam o Verao</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Cada drink e uma obra de arte, cuidadosamente elaborada com
            ingredientes premium e paixao artesanal. De frutas classicas a exoticas.
          </p>
        </div>
      </div>

      {/* Drinks Grid */}
      <div className="space-y-24 md:space-y-32 lg:space-y-40">
        {drinks.map((drink, index) => {
          const colors = colorClasses[drink.color as keyof typeof colorClasses]
          const isEven = index % 2 === 0
          const Icon = drink.icon

          return (
            <div
              key={drink.id}
              ref={(el) => {
                sectionRefs.current[index] = el
              }}
              className="opacity-0 container mx-auto px-4"
              onMouseEnter={() => setActiveDrink(drink.id)}
              onMouseLeave={() => setActiveDrink(null)}
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Side */}
                <div
                  className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-radial ${drink.bgGradient} blur-3xl opacity-60`}
                  />

                  <div
                    className={`relative group transition-all duration-700 ${
                      activeDrink === drink.id ? "scale-105" : ""
                    }`}
                  >
                    {/* Decorative rings */}
                    <div
                      className={`absolute inset-0 -m-6 rounded-full border-2 ${colors.border} opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:-m-10 group-hover:rotate-12`}
                    />
                    <div
                      className={`absolute inset-0 -m-12 rounded-full border ${colors.border} opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:-m-16 group-hover:-rotate-6`}
                    />

                    <div className="relative w-full aspect-[3/4] max-w-sm lg:max-w-md mx-auto">
                      <Image
                        src={drink.image}
                        alt={drink.name}
                        fill
                        className="object-contain drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)]"
                      />
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        className={`absolute top-1/4 left-1/4 w-3 h-3 ${colors.bg} rounded-full animate-float`}
                      />
                      <div
                        className={`absolute top-1/3 right-1/4 w-4 h-4 ${colors.bg} rounded-full animate-float animation-delay-200`}
                      />
                      <div
                        className={`absolute bottom-1/3 left-1/3 w-2 h-2 ${colors.bg} rounded-full animate-float animation-delay-400`}
                      />
                      <div
                        className={`absolute bottom-1/4 right-1/3 w-3 h-3 ${colors.bg} rounded-full animate-float animation-delay-600`}
                      />
                    </div>

                    {/* Number badge */}
                    <div className={`absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 h-16 lg:w-20 lg:h-20 ${colors.bgSolid} rounded-full flex items-center justify-center shadow-2xl ${colors.glow}`}>
                      <span className="text-2xl lg:text-3xl font-bold text-background">
                        {String(drink.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`${isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-2xl ${colors.bg} ${colors.border} border`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span
                      className={`text-sm font-semibold tracking-wider uppercase ${colors.text}`}
                    >
                      {drink.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-6 leading-tight">
                    {drink.name}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                    {drink.description}
                  </p>

                  {/* Stats bars */}
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-24">Frescor</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${colors.bgSolid} rounded-full transition-all duration-1000`}
                          style={{ width: `${drink.stats.refreshment}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${colors.text}`}>{drink.stats.refreshment}%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-24">Docura</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${colors.bgSolid} rounded-full transition-all duration-1000`}
                          style={{ width: `${drink.stats.sweetness}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${colors.text}`}>{drink.stats.sweetness}%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-24">Intensidade</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${colors.bgSolid} rounded-full transition-all duration-1000`}
                          style={{ width: `${drink.stats.intensity}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${colors.text}`}>{drink.stats.intensity}%</span>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground/60 mb-4">
                      Ingredientes Selecionados
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {drink.ingredients.map((ingredient) => (
                        <span
                          key={ingredient}
                          className={`px-4 py-2 rounded-full text-sm font-medium glass ${colors.border} ${colors.text} ${colors.hover} transition-colors cursor-default`}
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 ${colors.bgSolid} text-background shadow-xl ${colors.glow} text-lg group`}
                  >
                    Descobrir Mais
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
