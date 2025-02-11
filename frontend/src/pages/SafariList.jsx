import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SafariList() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch safaris from the API using Axios
    const fetchSafaris = async () => {
      try {
        const response = await axios.get('/api/safaris'); // Make the GET request to your server
        setSafaris(response.data); // Update the state with the fetched data
      } catch (err) {
        setError(err.message); // Set error message if any
      } finally {
        setLoading(false); // Set loading state to false once the request is finished
      }
    };

    fetchSafaris();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="safari-list">
      {safaris.length === 0 ? (
        <div>No safaris available</div>
      ) : (
        safaris.map((safari) => (
          <div key={safari._id} className="wrapper">
            <h1>{safari.name}</h1>
            <Link to={`/safaris/${safari._id}`}>
              <img src={safari.thumbnail} alt={`Thumbnail for ${safari.name}`} />
            </Link>
            <div className="info">
              <div className="wrapper2">
                <h2>{safari.duration}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  suscipit magni officiis nemo possimus blanditiis.
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SafariList;
