import React from 'react';

export default function ServiceArea() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-slate text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">PROUDLY SERVING</h2>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-medium text-brand-orange">
          <span className="bg-gray-900 px-6 py-3 rounded-full border border-gray-800">New York</span>
          <span className="bg-gray-900 px-6 py-3 rounded-full border border-gray-800">Vermont</span>
          <span className="bg-gray-900 px-6 py-3 rounded-full border border-gray-800">New Hampshire</span>
        </div>
      </div>
    </section>
  );
}
