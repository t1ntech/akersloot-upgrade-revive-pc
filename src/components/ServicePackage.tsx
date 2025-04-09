
import React from 'react';
import { Check, X } from 'lucide-react';
import InfoPopover from './InfoPopover';

const ServicePackage = () => {
  const included = [
    "Windows 11 Pro licentie t.w.v. €139,-",
    "Professionele service met 20 jaar vak ervaring!",
    <span key="atlas"><InfoPopover 
      content={
        <div>
          <p className="font-medium mb-1">Wat is Atlas OS?</p>
          <p>Atlas OS is een geoptimaliseerde versie van Windows 11, speciaal ontworpen voor betere prestaties. Het verwijdert onnodige achtergrondprocessen en services, waardoor uw computer sneller opstart en vloeiender werkt, zelfs op oudere hardware.</p>
        </div>
      }
    >
      Atlas OS Modificatie
    </InfoPopover></span>,
    "Installatie van standaard drivers * updates",
    "Basisinstellingen configuratie",
    "Poetsen binnenkant computer",
    "Poetsen buitenkant computer"
  ];
  
  const notIncluded = [
    <span key="ssd"><InfoPopover 
      content={
        <div>
          <p className="font-medium mb-1">Waarom is een SSD noodzakelijk?</p>
          <p>Een SSD (Solid State Drive) is essentieel voor optimale Windows 11 prestaties. Vergeleken met traditionele harde schijven (HDD), biedt een SSD veel snellere opstarttijden en betere algehele systeemprestaties. Voor ongeveer €40-€60 kunnen wij een geschikte SSD installeren als uw computer er nog geen heeft.</p>
        </div>
      }
    >
      SSD schijf (wel vereist!)
    </InfoPopover></span>,
    <span key="backup"><InfoPopover 
      content={
        <div>
          <p className="font-medium mb-1">Backup service</p>
          <p>Voor tegenbetaling kunnen kunnen wij uw belangrijke bestanden (documenten, foto's, etc.) veilig backuppen voordat we de nieuwe Windows 11 installatie uitvoeren. Vraag naar deze optie als u hulp nodig heeft bij het behouden van uw gegevens.</p>
        </div>
      }
    >
      Geen backup van bestanden.
    </InfoPopover></span>,
    "Software installaties",
    "Herstellen van persoonlijke bestanden"
  ];

  return (
    <section id="package" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          WINDOWS 11 PRO <span className="text-gradient-blue">UPGRADE PAKKET</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voor slechts €69,- maken wij uw computer klaar voor de toekomst met Windows 11 Pro deze zomer!
        </p>
        
        <div className="bg-darkaccent rounded-xl overflow-hidden border border-border">
          <div className="p-8 text-center">
            <div className="inline-block rounded-full bg-babyblu/10 px-4 py-1 text-babyblu text-sm font-medium mb-4">
              Alles inbegrepen
            </div>
            <h3 className="text-4xl font-bold mb-2">Deze zomer uw windows device een nieuw leven inblazen voor maar €69,-</h3>
            <p className="text-muted-foreground mb-6">Exclusief -SSD</p>
            
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
                <strong className="text-babyblu">Belangrijk:</strong> <InfoPopover 
                  content={
                    <div>
                      <p className="font-medium mb-1">Wat is een schone installatie?</p>
                      <p>Een schone installatie betekent dat we Windows 11 volledig nieuw installeren, in plaats van een upgrade van uw bestaande Windows-versie. Dit levert de beste prestaties op maar betekent ook dat alle programma's opnieuw geïnstalleerd moeten worden.</p>
                    </div>
                  }
                >
                Onze service biedt altijd een schone installatie, geen upgrade.
                </InfoPopover> 
                 {' '}Ik kan geen garantie geven op uw huidige apparaat, daarom eerst een goed advies! Vragen zijn altijd gratis.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackage;
