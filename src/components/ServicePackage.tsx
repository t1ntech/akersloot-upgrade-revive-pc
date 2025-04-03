
import React from 'react';
import { Check, X } from 'lucide-react';

const ServicePackage = () => {
  const included = [
    "Windows 11 Pro licentie",
    "Professionele installatie",
    "Atlas OS Modificatie",
    "Installatie van standaard drivers",
    "Basisinstellingen configuratie"
  ];
  
  const notIncluded = [
    "SSD schijf (wel vereist!)",
    "Geen backup van bestanden (dit kan wel tegen meerprijs)",
    "Software installaties",
    "Herstellen van persoonlijke bestanden"
  ];

  return (
    <section id="package" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          Ons Windows 11 <span className="text-gradient-blue">Upgrade Pakket</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voor slechts €65,- (exclusief eventuele SSD) maken wij uw computer klaar voor de toekomst met Windows 11 Pro
        </p>
        
        <div className="bg-darkaccent rounded-xl overflow-hidden border border-border">
          <div className="p-8 text-center">
            <div className="inline-block rounded-full bg-babyblu/10 px-4 py-1 text-babyblu text-sm font-medium mb-4">
              Alles inbegrepen
            </div>
            <h3 className="text-4xl font-bold mb-2">€65,-</h3>
            <p className="text-muted-foreground mb-6">Exclusief eventueel benodigde SSD</p>
            
            <div className="h-px bg-border my-6"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-4">Inbegrepen bij de service:</h4>
                <ul className="space-y-3">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-babyblu w-5 h-5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Niet inbegrepen:</h4>
                <ul className="space-y-3">
                  {notIncluded.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <X className="text-red-500 w-5 h-5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="p-4 bg-babyblu/10 border border-babyblu/30 rounded-lg text-sm">
                <strong className="text-babyblu">Belangrijk:</strong> Onze service biedt altijd een schone installatie, geen upgrade. 
                Wij nemen geen verantwoordelijkheid voor dataverlies, dus zorg ervoor dat u belangrijke bestanden vooraf heeft geback-upt.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackage;
