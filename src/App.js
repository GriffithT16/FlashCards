import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SideBar from "./Components/SideBar/SideBar";
import CardViewer from "./Components/Card/CardViewer";



function App() {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState();

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {

    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    console.log(response.data)
    debugger;
    setCollections(response.data);
  }

  

  return (
    <div>
      <SideBar collections={collections} setSelectedCollection={setSelectedCollection}/>
      <CardViewer collections={collections} selectedCollection={selectedCollection}/>
    </div>
  );
}
export default App;
