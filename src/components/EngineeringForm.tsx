import React from 'react';

export default function EngineeringForm() {
  return (
    <div className="bg-brand-grey p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold text-brand-slate mb-4">Contact Engineering</h3>
      <p className="text-gray-600 mb-6">Technical Project Consultation</p>
      
      <div className="space-y-4">
        <p className="text-sm font-medium text-green-600 bg-green-50 p-4 rounded border border-green-200">
           Submit queries to engineering@steeletruss.com or use the Quote form for new projects.
        </p>
      </div>
    </div>
  );
}
