
import React from 'react';
import { Clock, Shield, Zap } from 'lucide-react';
import InfoPopover from './InfoPopover';

const WhyUpgrade = () => {
  const reasons = [
    {
      icon: <Clock className="w-10 h-10 text-babyblu" />,
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
      icon: <Shield className="w-10 h-10 text-babyblu" />,
      title: "Verbeterde Beveiliging",
      description: "Windows 11 biedt verbeterde beveiliging met functies om uw gegevens te beschermen tegen moderne bedreigingen."
    },
    {
      icon: <Zap className="w-10 h-10 text-babyblu" />,
      title: "Max Verstappen snel door AtlasOS",
      description: <span>Geniet van snellere opstarttijden, door een <InfoPopover 
        content={
          <div>
            <p className="font-medium mb-1">AtlasOS voordelen</p>
            <p>AtlasOS is een geoptimaliseerde Windows 11-configuratie die overbodige processen en services uitschakelt. Het verwijdert onnodige Windows-componenten en optimaliseert netwerk- en systeeminstellingen voor maximale prestaties, vooral nuttig voor oudere hardware.</p>
          </div>
        }
      >
        AtlasOS modificatie
      </InfoPopover> in combinatie met een SSD schijf. Dit zorgt ervoor dat Windows 11 sneller draait dan ooit tevoren.</span>
    }
  ];

  return (
    <section id="why-upgrade" className="py-16 bg-darkaccent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Waarom <span className="text-gradient-blue">upgraden naar Windows 11?</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-darkbg p-6 rounded-xl border border-border hover:border-babyblu/50 transition-all hover:blue-shadow"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-darkbg rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Gooi uw oude apparaat niet weg!</h3>
          <p className="text-muted-foreground">
            Veel computers die momenteel Windows 7,8,10 draaien, kunnen prima worden geüpgraded naar Windows 11 Pro met de juiste aanpassingen. 
            Akersloot Computers kan controleren of uw huidige apparaat geschikt is, en u helpen met een kosteneffectieve installatie 
            in plaats van een duur nieuw systeem aan te schaffen.

            Contact is gratis uw betaald alleen wanneer alles is klaar is.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUpgrade;
