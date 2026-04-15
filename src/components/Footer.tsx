import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1d] text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">STEELE TRUSS COMPANY.</h3>
          <p className="mb-4">Specialists in design, engineering, and manufacturing of structural components.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Location</h4>
          <p>Plattsburgh, New York</p>
          <p className="mt-2 text-sm">Serving NY, VT, and NH</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Contact</h4>
          <p>Email: engineering@steeletruss.com</p>
          <p>Phone: Available upon request</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Steele Truss Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
