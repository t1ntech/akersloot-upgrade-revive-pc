import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 border-b border-border/30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 relative">
            <svg 
              viewBox="0 0 48 48" 
              className="h-full w-full"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cow face base - white with black outline */}
              <circle cx="24" cy="24" r="22" fill="white" stroke="#000" strokeWidth="2" className="animate-pulse-slow" />
              
              {/* Cow ears - black */}
              <path d="M10 15C10 15 6 7 12 9C18 11 16 19 16 19" fill="#000" />
              <path d="M38 15C38 15 42 7 36 9C30 11 32 19 32 19" fill="#000" />
              
              {/* Cow face spots - black */}
              <circle cx="16" cy="20" r="5" fill="#000" />
              <circle cx="32" cy="20" r="5" fill="#000" />
              
              {/* Cow eyes - white with black pupils */}
              <circle cx="16" cy="20" r="3" fill="white" stroke="#000" strokeWidth="1" />
              <circle cx="32" cy="20" r="3" fill="white" stroke="#000" strokeWidth="1" />
              <circle cx="16" cy="20" r="1" fill="#000" />
              <circle cx="32" cy="20" r="1" fill="#000" />
              
              {/* Cow nose - white with black outline */}
              <rect x="19" y="26" width="10" height="6" rx="3" fill="white" stroke="#000" strokeWidth="1" />
              
              {/* Computer/IT elements - light gray */}
              <rect x="17" y="33" width="14" height="2" rx="1" fill="#E0E0E0" />
              <rect x="19" y="35" width="10" height="1" rx="0.5" fill="#E0E0E0" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">
            <span className="text-gradient-blue">Akersloot</span> Computers
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
