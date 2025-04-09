import React from 'react';
import { Button } from '@/components/ui/button';
import { Ticket, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "Wat houdt de Windows 11 installatie service precies in?",
    answer: "Wij voeren een schone installatie uit van Windows 11 Pro, inclusief de AtlasOS modificatie voor optimale prestaties, op uw bestaande computer. We zorgen voor de licentie, drivers, updates en basisconfiguratie."
  },
  {
    question: "Is mijn computer wel geschikt voor Windows 11?",
    answer: "Veel computers die nu Windows 7, 8 of 10 draaien zijn geschikt, zelfs als Microsoft anders aangeeft. Wij kunnen dit gratis voor u controleren. Neem contact op voor een vrijblijvend advies."
  },
  {
    question: "Wat is AtlasOS en waarom gebruiken jullie dat?",
    answer: "AtlasOS is een geoptimaliseerde versie van Windows 11 die onnodige processen verwijdert. Dit zorgt voor een snellere en soepelere werking, vooral op oudere hardware. Het geeft een 'retro' gevoel met moderne snelheid."
  },
  {
    question: "Wat is een 'schone installatie' en waarom is dat beter dan een upgrade?",
    answer: "Bij een schone installatie wordt Windows volledig nieuw geïnstalleerd, zonder oude systeembestanden over te nemen. Dit voorkomt problemen en zorgt voor de beste prestaties. Een upgrade kan trage onderdelen van de oude installatie meenemen."
  },
  {
    question: "Moet ik zelf een SSD kopen?",
    answer: "Een SSD is vereist voor goede prestaties met Windows 11 en is niet standaard inbegrepen in de prijs van €69. Wij kunnen tegen meerprijs een geschikte SSD voor u installeren (vaak rond €40-€60)."
  },
  {
    question: "Worden mijn bestanden en programma's bewaard?",
    answer: "Bij een schone installatie worden bestanden en programma's op de systeemschijf verwijderd. Wij bieden geen standaard backup service. U dient zelf voor een backup te zorgen, of u kunt tegen meerprijs onze backup service afnemen."
  },
  {
    question: "Hoe lang duurt de installatie?",
    answer: "De duur hangt af van uw hardware, maar graag rekenen we een week voor de totale service."
  },
  {
    question: "Wat als Microsoft zegt dat mijn computer niet ondersteund wordt?",
    answer: "Dankzij onze methoden en de AtlasOS modificatie kunnen we Windows 11 vaak toch installeren op systemen die officieel niet ondersteund worden, met behoud van goede prestaties."
  },
  {
    question: "Geven jullie garantie?",
    answer: "Wij kunnen op oudere apparaten helaas geen garantie geven. Wij adviseren u wel eerlijk over de staat ervan."
  },
  {
    question: "Hoe kan ik een afspraak maken of meer informatie krijgen?",
    answer: "U kunt het beste een ticket aanmaken via de knop op deze pagina  voor vrijblijvend advies en het plannen van de service."
  }
];

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gradient-blue">Neem contact op!</span>
        </h2>
        
        <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all hover:blue-shadow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ticket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Maak een support ticket aan!</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Via ons ticket systeem brengen we het hele upgrade proces voor jou in kaart. Een ticket is de 
                eerste stap naar een persoonlijk advies over de mogelijkheden voor jouw computer.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Persoonlijk advies:</span> We bekijken of jouw computer geschikt is voor een Windows 11 upgrade.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Flexibel contact:</span> Stel al je vragen en ontvang duidelijke antwoorden.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Vrijblijvend:</span> Je betaalt pas wanneer je besluit om de upgrade te laten uitvoeren.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground mt-2 group">
                <Link to="/ticket">
                  Maak een ticket 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr opacity-0 from-primary/20 to-transparent rounded-lg -z-10"></div>
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
          <p>Heeft u een andere vraag dan bovenstaande service? Mail naar <span className="text-primary">info@akerslootcomputers.nl</span></p>
        </div>
      </div>

      {/* FAQ Section Start */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-gradient-blue">VEELGESTELDE VRAGEN</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {/* FAQ Section End */}
    </section>
  );
};

export default ContactForm;
