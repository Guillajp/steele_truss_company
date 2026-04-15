import React from 'react';

export default function SpecsGrid() {
  const specs = [
    {
      title: "Wood Trusses",
      description: "High-quality precision engineered wood trusses suitable for residential and light commercial projects.",
      icon: "🪵"
    },
    {
      title: "Light Gauge Steel",
      description: "Cold-formed steel components designed for durability, strength, and fire resistance.",
      icon: "🏗️"
    },
    {
      title: "Custom Engineering",
      description: "In-house engineering team capable of designing complex roof and floor truss systems.",
      icon: "📐"
    }
  ];

  return (
    <section id="specs" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-grey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-slate mb-4">OUR PRODUCTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Industry-leading manufacturing of structural components.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-6">{spec.icon}</div>
              <h3 className="text-2xl font-bold text-brand-slate mb-3">{spec.title}</h3>
              <p className="text-gray-600 leading-relaxed">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
