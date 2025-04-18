import React from 'react';
import { Button } from '@/components/ui/button';
import InfoPopover from './InfoPopover';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 dark:hidden">
        <img 
          src="public/maxkoe2.png" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-10" 
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }} 
        />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <InfoPopover 
                content={
                  <div>
                    <p className="font-medium mb-1">Windows 10 End of Life</p>
                    <p>Microsoft zal na 14 oktober 2025 geen beveiligingsupdates meer uitbrengen voor Windows 10. Dit maakt je systeem kwetsbaar voor nieuwe beveiligingsdreigingen.</p>
                  </div>
                }
                variant="danger"
              >
              Windows 10
              </InfoPopover> <span className="text-gradient-blue">eindigt binnenkort. <br />
              Installeer Windows 11 nu samen met </span><InfoPopover 
                content={
                  <div>
                    <p className="font-medium mb-1">Wat is AtlasOS?</p>
                    <p>AtlasOS is een geoptimaliseerde versie van Windows 11 die onnodige processen verwijdert voor betere prestaties. Het systeem start sneller op, gebruikt minder geheugen en zorgt voor een soepelere gebruikerservaring, vooral op oudere hardware.</p>
                  </div>
                }
              >
                AtlasOS
              </InfoPopover>!
            </h1>
            <p className="text-lg text-muted-foreground">
              Upgrade naar Windows 11 Pro zonder uw huidige apparaat weg te gooien. 
              Een nieuwe laptop kopen is niet altijd de beste oplossing, vooral niet in de huidige tijd.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-800">
                <a href="#contact">Vraag voor meer informatie</a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-white-700 hover:bg-gray-100">
                <a href="#package">Bekijk ons pakket</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-blue-glow rounded-full blur-3xl"></div>
            <div className="relative bg-darkaccent p-6 rounded-xl border border-border blue-shadow">
              <div className="text-5xl font-bold mb-4 text-babyblu">Deze zomer: €69,- </div>
              <h3 className="text-xl font-medium mb-2 text-white">⛽🏁 Breng je laptop voor een pitstop! </h3>
              <p className="text-gray-300 mb-4"><b>Exclusief <InfoPopover 
                content={
                  <div>
                    <p className="font-medium mb-1">Solid State Drive (SSD)</p>
                    <p>Een SSD is essentieel voor optimale Windows 11 prestaties. Het zorgt voor significant snellere opstart- en laadtijden vergeleken met traditionele harde schijven. Als je computer nog geen SSD heeft, is het toevoegen ervan sterk aanbevolen en vaak mogelijk voor de meeste computers.</p>
                  </div>
                }
              >SSD</InfoPopover></b>** inclusief installatie en activatie</p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-babyblu shrink-0 mt-1"></div>
                  <span><InfoPopover 
                    content={
                      <div>
                        <p className="font-medium mb-1">Wat is een schone installatie?</p>
                        <p>Een schone installatie betekent dat Windows volledig opnieuw wordt geïnstalleerd, in plaats van een upgrade van je bestaande Windows-versie. Dit zorgt voor een optimale systeemprestatie, maar betekent ook dat je persoonlijke bestanden en instellingen niet automatisch worden behouden. Als Windows traag is, zal hij dit meenemen in een upgrade.</p>
                      </div>
                    }
                  >Schone installatie</InfoPopover> (geen upgrade)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-babyblu shrink-0 mt-1"></div>
                  <span>Samen met AtlasOS geeft het een klassieke Windows XP Retestrak gevoel!</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-babyblu shrink-0 mt-1"></div>
                  <span>Voor 40 euro extra krijgt u een gratis upgrade naar Windows 12 *vanaf laat 2026</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-babyblu shrink-0 mt-1"></div>
                  <span><strong>Ook als Microsoft zegt dat uw laptop/computer niet ondersteund wordt!</strong></span>
                </div>
                  <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-babyblu shrink-0 mt-1"></div>
                  <span>Schiet een ticket in dan gaan we samen aan de slag!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
