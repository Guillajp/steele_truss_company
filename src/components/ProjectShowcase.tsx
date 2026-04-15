import React from 'react';

export default function ProjectShowcase() {
  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-slate mb-4">RECENT PROJECTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">A selection of constructions utilizing Steele Truss components.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for project images until real ones are provided */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
               <div className="absolute inset-0 bg-brand-slate/10 group-hover:bg-transparent transition duration-300" />
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  Project Image {item}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
