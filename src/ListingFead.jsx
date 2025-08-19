// ListingFeed.js
import { Link } from 'react-router-dom';

const listings = [
  { id: 1, title: 'Cozy Beach House',  },
  { id: 2, title: 'Mountain View Lodge',},
  
];
const ListingFeed = () => {
return (
  <div>
    {listings.map((listing) => (
      <Link to={`/listing/${listing.id}`} key={listing.id}>
        <div className="card">
          <h3>{listing.title}</h3>
          <p>{listing.location}</p>
        </div>
      </Link>
    ))}
  </div>
);
}
export default ListingFeed;