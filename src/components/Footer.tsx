
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-babyblu flex items-center justify-center">
                <span className="text-darkbg font-bold text-sm">A</span>
              </div>
              <h3 className="text-lg font-medium">
                <span className="text-babyblu">Akersloot</span> Computers
              </h3>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {currentYear} Akersloot Computers. Alle rechten voorbehouden.</p>
            <p className="mt-1">Windows is een handelsmerk van Microsoft Corporation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
