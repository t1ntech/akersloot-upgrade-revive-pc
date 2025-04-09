import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TicketForm from '@/components/TicketForm';

const Ticket = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TicketForm />
      </main>
      <Footer />
    </div>
  );
};

export default Ticket;
