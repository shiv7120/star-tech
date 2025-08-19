// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Listings from './listing';
import ListingFeed from './ListingFead';
import ListingDetail from './ListingDetail';
import Booking from './booking';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-now" element={<Booking />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/listings" element={<ListingFeed />} />
        <Route path="/lists" element={<Listings />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
