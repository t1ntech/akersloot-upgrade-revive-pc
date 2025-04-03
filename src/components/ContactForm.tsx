
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
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
    console.log('Form submitted:', formData);
    
    toast({
      title: "Aanvraag verzonden!",
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
    <section id="contact" className="py-16 bg-darkaccent">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Neem <span className="text-gradient-blue">Contact</span> Met Ons Op
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Wilt u weten of uw computer geschikt is voor een upgrade naar Windows 11? 
            Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op.
          </p>
          
          <div className="bg-darkbg p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Naam</label>
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-mailadres</label>
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">Uw vraag of opmerking</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-secondary border-border"
                />
              </div>
              
              <Button type="submit" className="w-full bg-babyblu hover:bg-babyblu/80 text-black">
                Verstuur Aanvraag
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
