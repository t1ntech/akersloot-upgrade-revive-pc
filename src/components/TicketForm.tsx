import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TicketForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    computerDetails: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally you would send this data to a server
    console.log('Ticket submitted:', formData);
    
    toast({
      title: "Ticket verzonden!",
      description: "We nemen zo snel mogelijk contact met u op.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      computerDetails: '',
      message: ''
    });
  };

  return (
    <div className="py-12 bg-darkaccent min-h-[80vh] flex items-center">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-babyblu transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar home
          </Link>
        </div>
        
        <Card className="border-border bg-darkbg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Ticket className="h-6 w-6 text-babyblu" />
              <CardTitle className="text-2xl">Maak een support ticket</CardTitle>
            </div>
            <CardDescription>
              Vul dit formulier in om een ticket aan te maken. We zullen zo snel mogelijk contact met je opnemen om de 
              mogelijkheden voor jouw Windows 11 upgrade te bespreken.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6" id="ticketForm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Naam*</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-mailadres*</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefoonnummer</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="computerDetails" className="block text-sm font-medium mb-2">
                  Computer details (indien bekend)
                </label>
                <Input
                  id="computerDetails"
                  name="computerDetails"
                  placeholder="Bijv: HP EliteBook 840, Windows 10 Home, 8GB RAM"
                  value={formData.computerDetails}
                  onChange={handleChange}
                  className="bg-secondary border-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Wat wil je weten of waar kunnen we je mee helpen?*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Beschrijf je vraag of situatie..."
                  className="bg-secondary border-border"
                />
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-end border-t border-border pt-6">
            <Button form="ticketForm" type="submit" className="bg-babyblu hover:bg-babyblu/80 text-black">
              Verstuur Ticket
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TicketForm;
