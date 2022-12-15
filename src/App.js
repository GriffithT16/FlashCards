import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CollectionList from "./Components/Collection/CollectionList";
function App() {


  return (
    <div>
      <div className="border-box">
        {/* <CardViewer /> */}
        <CollectionList />
      </div>
    </div>
  );
}
export default App;
