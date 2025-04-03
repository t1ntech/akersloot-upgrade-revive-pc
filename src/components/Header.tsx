
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 border-b border-border/30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-babyblu animate-pulse-blue flex items-center justify-center">
            <span className="text-darkbg font-bold text-xl">A</span>
          </div>
          <h1 className="text-xl font-bold">
            <span className="text-gradient-blue">AC</span> Computers
          </h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-foreground/80 hover:text-babyblu transition-colors">Diensten</a>
          <a href="#why-upgrade" className="text-foreground/80 hover:text-babyblu transition-colors">Waarom upgraden?</a>
          <a href="#package" className="text-foreground/80 hover:text-babyblu transition-colors">Pakket</a>
          <a href="#contact" className="text-foreground/80 hover:text-babyblu transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
