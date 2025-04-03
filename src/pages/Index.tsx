
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUpgrade from '@/components/WhyUpgrade';
import ServicePackage from '@/components/ServicePackage';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUpgrade />
        <ServicePackage />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
