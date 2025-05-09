import React from 'react';
import { Clock, Shield, Zap } from 'lucide-react';
import InfoPopover from './InfoPopover';
import { AspectRatio } from './ui/aspect-ratio';

const WhyUpgrade = () => {
  const reasons = [
    {
      icon: <Clock className="w-10 h-10 text-foreground" />,
      title: "Windows 10 End of Life",
      description: <span><InfoPopover 
        content={
          <div>
            <p className="font-medium mb-1">Wat betekent End of Life?</p>
            <p>End of Life betekent dat Microsoft na 14 oktober 2025 geen beveiligingsupdates of technische ondersteuning meer biedt voor Windows 10. Dit maakt je computer kwetsbaar voor nieuwe malware, virussen en cyberaanvallen die kunnen profiteren van ongedichte beveiligingslekken.</p>
          </div>
        }
        variant="danger"
      >
        Windows 10 bereikt op 14 oktober 2025
      </InfoPopover> het einde van zijn levensduur. Na deze datum worden er geen beveiligingsupdates meer uitgegeven.</span>
    },
    {
      icon: <Shield className="w-10 h-10 text-foreground" />,
      title: "Verbeterde Beveiliging",
      description: "Windows 11 biedt verbeterde beveiliging met functies om uw gegevens te beschermen tegen moderne bedreigingen."
   
    },
    {
      icon: <Zap className="w-10 h-10 text-foreground" />,
      title: "Max Verstappen snel door AtlasOS ",
      description: <span>Geniet van snellere opstarttijden, door een <InfoPopover 
        content={
          <div>
            <p className="font-medium mb-1">AtlasOS voordelen</p>
            <p>AtlasOS is een geoptimaliseerde Windows 11-configuratie die overbodige processen en services uitschakelt. Het verwijdert onnodige Windows-componenten en optimaliseert netwerk- en systeeminstellingen voor maximale prestaties, vooral nuttig voor oudere hardware.</p>
          </div>
        }
      >
        AtlasOS modificatie
      </InfoPopover> in combinatie met een SSD schijf. Dit zorgt ervoor dat Windows 11 sneller draait dan ooit tevoren. 🏎️💨</span>
    }
  ];

  return (
    <section id="why-upgrade" className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-gradient-blue">WAAROM UPGRADEN NAAR WINDOWS 11?</span>
        </h2>
        
        <div className="mb-12 p-6 bg-card rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Gooi uw oude apparaat niet weg!</h3>
          <p className="text-muted-foreground">
            Veel computers die momenteel Windows 7,8,10 draaien, kunnen prima worden geüpgraded naar Windows 11 Pro met de juiste aanpassingen. 
            Akersloot Computers kan controleren of uw huidige apparaat geschikt is, en u helpen met een kosteneffectieve installatie 
            in plaats van een duur nieuw systeem aan te schaffen.

            Contact is gratis uw betaald alleen wanneer alles is klaar is.
            Mijn naam is Tino en heb inmiddels 20 jaar IT - Service support ervaring. Zie je snel! 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
{reasons.map((reason, index) => (
  <div 
    key={index}
    className={`relative bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:blue-shadow overflow-hidden ${index === 2 ? 'isolation-auto' : ''}`}
  >
    {/* Achtergrondafbeeldingen per box */}
    {index === 0 && (
      <div className="absolute inset-0 pointer-events-none opacity-45 bg-gradient-to-br from-transparent to-[hsl(var(--card))] dark:to-[hsl(var(--card))]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="public/10.png" 
            alt="Windows 10 End of Life" 
            className="w-full h-full object-cover" 
            style={{ 
              maskImage: 'linear-gradient(to bottom right, transparent, black)', 
              WebkitMaskImage: 'linear-gradient(to bottom right, transparent, black)' 
            }}
          />
        </div>
      </div>
    )}

    {index === 1 && (
      <div className="absolute inset-0 pointer-events-none opacity-45 bg-gradient-to-br from-transparent to-[hsl(var(--card))] dark:to-[hsl(var(--card))]">
        <div className="absolute inset-0 flex items-center justify-center -scale-x-100">
          <img 
            src="public/sec.png" 
            alt="Verbeterde beveiliging" 
            className="w-full h-full object-cover" 
            style={{ 
              maskImage: 'linear-gradient(to bottom right, transparent, black)', 
              // transform: 'scaleX(-1)',
              WebkitMaskImage: 'linear-gradient(to bottom right, transparent, black)' 
            }}
          />
        </div>
      </div>
    )}

    {index === 2 && (
      <div className="absolute inset-0 pointer-events-none opacity-45 bg-gradient-to-br from-transparent to-[hsl(var(--card))] dark:to-[hsl(var(--card))]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="public/max.png" 
            alt="Max Verstappen" 
            className="w-full h-full object-cover" 
            style={{ 
              maskImage: 'linear-gradient(to bottom right, transparent, black)', 
              WebkitMaskImage: 'linear-gradient(to bottom right, transparent, black)' 
            }}
          />
        </div>
      </div>
    )}

    <div className="mb-4 relative z-10">{reason.icon}</div>
    <h3 className="text-xl font-bold mb-3 relative z-10">{reason.title}</h3>
    <p className="text-muted-foreground relative z-10">{reason.description}</p>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default WhyUpgrade;
