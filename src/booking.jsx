// Booking.js

import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  const pricePerNight = 220; // Example price
  const total = nights > 0 ? pricePerNight * nights : 0;

  return (
    <div className="booking-container">
      <h2>Book Your Stay</h2>

      <div className="booking-form">
        <label>Check-in Date</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

        <label>Check-out Date</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

        <label>Guests</label>
        <input type="number" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} min="1" />

        <div className="booking-summary">
          <p>Nights: {nights > 0 ? nights : 0}</p>
          <p>Price per night: ${pricePerNight}</p>
          <p><strong>Total: ${total}</strong></p>
        </div>

        <button disabled={total === 0}>Confirm Booking</button>
      </div>
    </div>
  );
};

export default Booking;
