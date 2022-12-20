import React, { useState } from "react";
import axios from "axios";

const AddNewCard = (props) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let newCard = {
      word: word,
      definition: definition,
    };
    // debugger;
    console.log(newCard);
    let response = await axios.post(
      `http://127.0.0.1:8000/api/collections/${props.selectedCollection}/cards/`,
      newCard
    );
    if (response.status === 201) {
      props.fetchCollections();
      return true;
    }
  }
  return (
    <div className="border-box-card">
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "1rem" }}>
          <label style={{color: "whitesmoke"}}>Word: </label>
          <input
            type="text"
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <label style={{color: "whitesmoke"}}>Definition: </label>
          <input
            type="text"
            value={definition}
            onChange={(event) => setDefinition(event.target.value)}
          />
        </div>
        <button
          type="submit"
          style={{
            margin: "1em",
            color: "black",
            height: "2rem",
            width: "8rem",
            backgroundColor: "red",
            borderColor: "whitesmoke"
          }}
        >
          Create Card
        </button>
      </form>
    </div>
  );
};

export default AddNewCard;
