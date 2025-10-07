
import React from 'react';

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* In-Progress Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-medium">In-Progress</h2>
        <p className="text-4xl font-extrabold">{inProgress}</p>
      </div>

      {/* Resolved Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-medium">Resolved</h2>
        <p className="text-4xl font-extrabold">{resolved}</p>
      </div>
    </div>
  );
};

export default Banner;
