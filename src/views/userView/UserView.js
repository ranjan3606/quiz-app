import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserView = () => {
  const [gridData, setGridData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/get-grid');
      setGridData(response.data.gridData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Quiz View</h1>
      {gridData ? (
        <div dangerouslySetInnerHTML={{ __html: gridData }} />
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
};

export default UserView;
