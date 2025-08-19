// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you’ll add styles here

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to TravelNest 🏡</h1>
        <p>Find your perfect stay anywhere in the world</p>
      </header>

      <section className="search-section">
        <input type="text" placeholder="Where are you going?" />
        <input type="date" />
        <input type="number" placeholder="Guests" min="1" />
        <button>Search</button>
      </section>

      <section className="featured-listings">
        <h2>Featured Destinations</h2>
        <div className="listing-cards">
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?beach-house" alt="Beach House" />
            <h3>Beach House</h3>
            <p>$199/night · Bali</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?mountain-cabin" alt="Mountain Cabin" />
            <h3>Mountain Cabin</h3>
            <p>$129/night · Colorado</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?city-apartment" alt="City Apartment" />
            <h3>City Apartment</h3>
            <p>$99/night · Tokyo</p>
          </div>
        </div>
        <Link to="/lists" className="view-more">Explore all listings →</Link>
         <Link to="/book-now" className="view-more">Recently Booked→</Link>
      </section>

      <footer className="home-footer">
        <p>© 2025 TravelNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
