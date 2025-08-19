// ListingDetail.js
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();
  const listings = [ /* same mock listings as above */ ];
  const listing = listings.find(l => l.id === parseInt(id));

  if (!listing) return <p>Listing not found.</p>;

  // render listing content as before...
};
export default ListingDetail;