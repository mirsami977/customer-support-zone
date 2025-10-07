import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">CS — Ticket System</h1>
      <div className="flex gap-4 items-center">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
        <a href="#">Download</a>
        <a href="#">Blog</a>
        <a href="#">Changelog</a>
        
        <button className="bg-purple-600 text-white px-4 py-2 rounded">New Ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;
