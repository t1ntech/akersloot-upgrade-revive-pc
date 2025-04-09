import React from 'react';
import acLogo from '/public/logo2.png';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="w-full py-6 border-b border-border/30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-25 w-25 relative">
            <img src={acLogo} alt="AC Logo" width={80} height={80} color='white' />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold flex flex-col md:flex-row items-start md:items-baseline">
            <span className="text-gradient-blue uppercase pl-0 md:pl-0">Akersloot</span>
            <span className="uppercase pl-0 md:pl-0">Computers.nl</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground/80 hover:text-babyblu transition-colors">DIENSTEN</a>
            <a href="#why-upgrade" className="text-foreground/80 hover:text-babyblu transition-colors">WAAROM UPGRADEN?</a>
            <a href="#package" className="text-foreground/80 hover:text-babyblu transition-colors">PAKKET</a>
            <a href="#contact" className="text-foreground/80 hover:text-babyblu transition-colors">CONTACT</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
