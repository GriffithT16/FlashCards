import React, { useState, useEffect } from 'react';



const CollectionContainer = (props) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    console.log(response.data.title);
    debugger;
    setCollections(response.data);
  };
}



export default CollectionContainer;
