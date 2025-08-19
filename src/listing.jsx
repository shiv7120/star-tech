import React from 'react';
import './Listings.css';
import { Link } from 'react-router-dom';

const listings = [
  {
    id: 1,
    title: 'Cozy Beach House',
    location: 'Goa, India',
    price: 220,
    rating: 4.8,
    img: 'https://source.unsplash.com/400x300/?beach,house',
  },
  {
    id: 2,
    title: 'Rustic Mountain Cabin',
    location: 'Manali, India',
    price: 180,
    rating: 4.7,
    img: 'https://source.unsplash.com/400x300/?cabin,mountain',
  },
  {
    id: 3,
    title: 'Modern City Loft',
    location: 'Mumbai, India',
    price: 150,
    rating: 4.6,
    img: 'https://source.unsplash.com/400x300/?apartment,city',
  },
];

const Listings = () => {
  return (
    <div className="listings-container">
      <h2>Available Stays</h2>
     <a href="/listings" class="hover:bg-red-400 py-2 px-4 rounded transition duration-300">Also Visit</a>
      <div className="listings-grid">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.img} alt={listing.title} />
            <h3>{listing.title}</h3>
            <p>{listing.location}</p>
            <p><strong>${listing.price}</strong> / night</p>
            <p>⭐ {listing.rating}</p>
          </div>
          
        ))}
      
      </div>
    </div>
  );
};
export default Listings;

