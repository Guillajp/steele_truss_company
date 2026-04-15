import React, { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categories = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#specs' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Quote', href: '#quote' },
  ];

  return (
    <header className="bg-brand-slate text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 font-extrabold text-2xl tracking-wider text-brand-orange">
            STEELE TRUSS
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {categories.map((cat) => (
              <a key={cat.name} href={cat.href} className="text-gray-300 hover:text-brand-orange transition-colors font-medium">
                {cat.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-slate border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {categories.map((cat) => (
              <a 
                key={cat.name} 
                href={cat.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-orange"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
