'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
