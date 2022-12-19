import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SideBar from "./Components/SideBar/SideBar";
import CardViewer from "./Components/Card/CardViewer";
import Card from "./Components/Card/Card";



function App() {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(1);
  const [cards, setCards] = useState();

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {

    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    console.log(response.data)
   
    setCollections(response.data);
  }

  

  return (
    <div>
      <SideBar collections={collections} setSelectedCollection={setSelectedCollection}/>
      <CardViewer collections={collections} selectedCollection={selectedCollection}/>
      {/* <Card collections={collections} cards={cards} /> */}
    </div>
  );
}
export default App;
