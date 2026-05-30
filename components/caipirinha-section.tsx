"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const caipirinhas = [
  {
    id: 1,
    name: "Caipirinha Clássica",
    flavor: "Limão",
    image: "/drinks/caipirinha-lime.png",
    description: "A autêntica caipirinha brasileira com limão tahiti, açúcar e cachaça premium",
    color: "from-lime-400 to-green-500",
    bgGlow: "bg-lime-500/20",
    ingredients: ["Limão Tahiti", "Cachaça Premium", "Açúcar Cristal", "Gelo Picado"],
    intensity: 85,
    freshness: 95,
    tradition: 100,
  },
  {
    id: 2,
    name: "Caipirinha Morango",
    flavor: "Morango",
    image: "/drinks/caipirinha-strawberry.png",
    description: "Doce e refrescante com morangos frescos macerados e um toque de menta",
    color: "from-red-400 to-pink-500",
    bgGlow: "bg-red-500/20",
    ingredients: ["Morangos Frescos", "Cachaça", "Açúcar", "Menta"],
    intensity: 70,
    freshness: 90,
    tradition: 75,
  },
  {
    id: 3,
    name: "Caipirinha Kiwi",
    flavor: "Kiwi",
    image: "/drinks/caipirinha-kiwi.png",
    description: "Exótica e vibrante com kiwi maduro e notas cítricas",
    color: "from-green-400 to-emerald-500",
    bgGlow: "bg-green-500/20",
    ingredients: ["Kiwi Maduro", "Cachaça Prata", "Açúcar Demerara", "Hortelã"],
    intensity: 75,
    freshness: 92,
    tradition: 70,
  },
];

export function CaipirinhaSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeCaipirinha = caipirinhas[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="caipirinhas"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/10 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-amber-400/30 animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-yellow-400/30 animate-float-delay" />
      <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-amber-500/20 animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 text-sm font-medium mb-4 border border-amber-500/30">
            Tradição Brasileira
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="text-gradient-gold">
              Caipirinhas
            </span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A bebida mais brasileira do mundo, com nossos 3 sabores especiais
            que potencializam sua energia
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div
              className={`absolute inset-0 ${activeCaipirinha.bgGlow} rounded-3xl blur-3xl scale-110 transition-all duration-500`}
            />
            <div className="relative bg-gradient-to-br from-amber-500/5 to-white/0 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20">
              {/* Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center shadow-2xl shadow-amber-500/30`}
                >
                  <span className="text-black text-2xl font-bold">
                    #{activeCaipirinha.id}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
                <Image
                  src={activeCaipirinha.image}
                  alt={activeCaipirinha.name}
                  fill
                  className="object-contain transition-transform duration-700 hover:scale-105 animate-float"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 blur-xl" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="space-y-6">
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${activeCaipirinha.color} text-white mb-4`}
                >
                  {activeCaipirinha.flavor}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  {activeCaipirinha.name}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {activeCaipirinha.description}
                </p>
              </div>

              {/* Ingredients */}
              <div className="bg-amber-500/5 rounded-2xl p-6 border border-amber-500/20">
                <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-4">
                  Ingredientes
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeCaipirinha.ingredients.map((ingredient, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCaipirinha.color}`}
                      />
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-amber-400 mb-1">
                    {activeCaipirinha.intensity}%
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider">
                    Intensidade
                  </div>
                </div>
                <div className="text-center p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-lime-400 mb-1">
                    {activeCaipirinha.freshness}%
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider">
                    Frescor
                  </div>
                </div>
                <div className="text-center p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    {activeCaipirinha.tradition}%
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider">
                    Tradição
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flavor Selector */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="text-center text-foreground/50 text-sm uppercase tracking-wider mb-8">
            Escolha seu sabor favorito
          </h4>
          <div className="flex justify-center gap-6">
            {caipirinhas.map((caipirinha, index) => (
              <button
                key={caipirinha.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-amber-500/10 border-2 border-amber-500/30 scale-105"
                    : "bg-white/5 border border-white/10 hover:bg-amber-500/10 hover:scale-102"
                }`}
              >
                <div className="relative h-24 w-20 mb-3">
                  <Image
                    src={caipirinha.image}
                    alt={caipirinha.flavor}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div
                  className={`text-sm font-medium text-center transition-colors ${
                    activeIndex === index ? "text-amber-400" : "text-foreground/60"
                  }`}
                >
                  {caipirinha.flavor}
                </div>
                {activeIndex === index && (
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Banner */}
        <div
          className={`mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 p-8 md:p-12 border border-amber-500/20 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                A Arte da Caipirinha
              </h3>
              <p className="text-foreground/60 max-w-xl">
                Cada caipirinha é preparada com frutas frescas selecionadas,
                cachaça artesanal e o carinho da tradição brasileira
              </p>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-400">3</div>
                <div className="text-sm text-foreground/50">Sabores</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-foreground/50">Natural</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400">Artesanal</div>
                <div className="text-sm text-foreground/50">Preparo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
