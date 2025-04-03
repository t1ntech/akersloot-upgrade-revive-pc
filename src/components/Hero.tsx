
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Windows 10 <span className="text-gradient-blue">eindigt binnenkort.</span> <br />
              Maak uw PC klaar voor de toekomst.
            </h1>
            <p className="text-lg text-muted-foreground">
              Upgrade naar Windows 11 Pro zonder uw huidige apparaat weg te gooien. 
              Onze betaalbare service maakt uw computer toekomstbestendig.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-babyblu hover:bg-babyblu/80 text-black">
                <a href="#contact">Vraag meer informatie</a>
              </Button>
              <Button size="lg" variant="outline" className="border-babyblu text-babyblu hover:bg-babyblu/10">
                <a href="#package">Bekijk ons pakket</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-blue-glow rounded-full blur-3xl"></div>
            <div className="relative bg-darkaccent p-6 rounded-xl border border-border blue-shadow">
              <div className="text-5xl font-bold mb-4 text-babyblu">€65,-</div>
              <h3 className="text-xl font-medium mb-2">Volledige Windows 11 Pro upgrade</h3>
              <p className="text-muted-foreground mb-4">Exclusief SSD, inclusief installatie en activatie</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-babyblu"></div>
                <span>Schone installatie (geen upgrade)</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <div className="h-2 w-2 rounded-full bg-babyblu"></div>
                <span>Professionele installatie door experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
