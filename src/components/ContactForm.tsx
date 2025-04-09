
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ticket, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-darkaccent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gradient-blue">Neem contact op!</span>
        </h2>
        
        <div className="bg-darkbg p-8 rounded-xl border border-border hover:border-babyblu/30 transition-all hover:blue-shadow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ticket className="h-6 w-6 text-babyblu" />
                <h3 className="text-xl font-bold">Maak een support ticket aan!</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Via ons ticket systeem brengen we het hele upgrade proces voor jou in kaart. Een ticket is de 
                eerste stap naar een persoonlijk advies over de mogelijkheden voor jouw computer.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-babyblu shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Persoonlijk advies:</span> We bekijken of jouw computer geschikt is voor een Windows 11 upgrade.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-babyblu shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Flexibel contact:</span> Stel al je vragen en ontvang duidelijke antwoorden.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-babyblu shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Vrijblijvend:</span> Je betaalt pas wanneer je besluit om de upgrade te laten uitvoeren.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-babyblu hover:bg-babyblu/80 text-black mt-2 group">
                <Link to="/ticket">
                  Maak een ticket 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr opacity-0 from-babyblu/20 to-transparent rounded-lg -z-10"></div>
                <img 
                  src="public/maxkoe2.png" 
                  alt="Computer support" 
                  className="rounded-lg opacity-100 object-cover w-full max-w-md h-[300px] border border-border"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Heeft u een andere vraag dan bovenstaande service? Mail naar <span className="text-babyblu">info@akerslootcomputers.nl</span></p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
