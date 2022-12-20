import React, { useState } from 'react';
import axios from "axios";



const AddNewCard = (props) => {

    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');



    async function handleSubmit(event) {
        event.preventDefault();
        let newCard = {
            word: word,
            definition: definition,
        };
        // debugger;
        console.log(newCard)
        let response = await axios.post(`http://127.0.0.1:8000/api/collections/${props.selectedCollection}/cards/`, newCard);
        if(response.status === 201){
            props.fetchCollections()
            return true;
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Word</label>
                <input type='text' value={word} onChange={(event) => setWord(event.target.value)} />
            </div>
            <div>
                <label>Definition</label>
                <input type='text' value={definition} onChange={(event) => setDefinition(event.target.value)} />
            </div>
            <button type='submit'>Create Card</button>
        </form>

     );
}
 
export default AddNewCard;
