import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SideBar from "./Components/SideBar/SideBar";
import CardViewer from "./Components/Card/CardViewer";
import AddNewCard from "./Components/Card/AddNewCard";

function App() {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(1);
  const [firstIsTrue, setFirstIsTrue] = useState(true);
  // const [cards, setCards] = useState();

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    console.log(response.data);
    setCollections(response.data);
  };

  const handleButtonClick = () => {
    setFirstIsTrue(!firstIsTrue);
  };

  // function createNewCard() {
  //   <AddNewCard />
  //   // document.getElementById(AddNewCard).style.display = "block";
  // }

  return (
    <div>
      <div>
        {firstIsTrue ? (
          <>
            <SideBar
              collections={collections}
              setSelectedCollection={setSelectedCollection}
            />
            <CardViewer
              collections={collections}
              selectedCollection={selectedCollection}
            />
            <button onClick={handleButtonClick}>Create New Card</button>
          </> 
        ) : (
          <>
            <AddNewCard
              selectedCollection={selectedCollection}
            />
            <button onClick={handleButtonClick}>Back to Collections</button>
            </>  
        ) }  
      </div>


    </div>
  );
}
export default App;
