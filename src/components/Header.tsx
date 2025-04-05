
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 border-b border-border/30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 relative">
            {/* SVG Logo combining IT and cow theme */}
            <svg 
              viewBox="0 0 48 48" 
              className="h-full w-full"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cow face base */}
              <circle cx="24" cy="24" r="22" fill="#7DD3FC" className="animate-pulse-slow" />
              <circle cx="24" cy="24" r="20" fill="#1E293B" />
              
              {/* Cow ears */}
              <path d="M10 15C10 15 6 7 12 9C18 11 16 19 16 19" fill="#3B4252" />
              <path d="M38 15C38 15 42 7 36 9C30 11 32 19 32 19" fill="#3B4252" />
              
              {/* Cow face spots */}
              <circle cx="16" cy="20" r="5" fill="white" />
              <circle cx="32" cy="20" r="5" fill="white" />
              
              {/* Cow eyes - with computer binary */}
              <circle cx="16" cy="20" r="3" fill="#7DD3FC" />
              <circle cx="32" cy="20" r="3" fill="#7DD3FC" />
              <text x="15" y="21" fontSize="3" fill="#1E293B" textAnchor="middle">1</text>
              <text x="31" y="21" fontSize="3" fill="#1E293B" textAnchor="middle">0</text>
              
              {/* Cow nose */}
              <rect x="19" y="26" width="10" height="6" rx="3" fill="#F5E0DC" />
              <circle cx="21" cy="28" r="1" fill="#1E293B" />
              <circle cx="27" cy="28" r="1" fill="#1E293B" />
              
              {/* Computer/IT elements */}
              <rect x="17" y="33" width="14" height="2" rx="1" fill="#7DD3FC" />
              <rect x="19" y="35" width="10" height="1" rx="0.5" fill="#7DD3FC" />
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
