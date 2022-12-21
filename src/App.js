import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SideBar from "./Components/SideBar/SideBar";
import CardViewer from "./Components/Card/CardViewer";
import AddNewCard from "./Components/Card/AddNewCard";
import Header from "./Components/Header/Header";
import DeleteCard from "./Components/Card/DeleteCard";

function App() {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(1);
  const [firstIsTrue, setFirstIsTrue] = useState(true);

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

  return (
    <div>
      <div>
        {firstIsTrue ? (
          <>
            <Header />
            <SideBar
              collections={collections}
              setSelectedCollection={setSelectedCollection}
            />
            <CardViewer
              collections={collections}
              selectedCollection={selectedCollection}
            />
            {/* <DeleteCard selectedCollection={selectedCollection} collections={collections} /> */}
            <button
              style={{
                margin: "1em",
                marginLeft: "7.5em",
                color: "white",
                height: "2rem",
                width: "8rem",
                backgroundColor: "darkred",
                borderColor: "whitesmoke",
              }}
              onClick={handleButtonClick}
            >
              Create New Card
            </button>
          </>
        ) : (
          <>
            <AddNewCard
              selectedCollection={selectedCollection}
              fetchCollections={fetchCollections}
            />
            <button
              style={{
                margin: "1em",
                color: "black",
                height: "2rem",
                width: "8.5rem",
                backgroundColor: "red",
                borderColor: "whitesmoke",
              }}
              onClick={handleButtonClick}
            >
              Back to Collections
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default App;
