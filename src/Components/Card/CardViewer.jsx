import axios from 'axios';
import React, { useState, useEffect } from 'react';





export default function CardViewer(props) {
    const [cards, setCards] = useState([]);
    const [index,setIndex] = useState(0);
    const [firstIsTrue, setFirstIsTrue] = useState(false);
    
    useEffect(() => {
        fetchCards();
      }, [props.selectedCollection]);

    async function fetchCards() {

        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${props.selectedCollection}/cards/`)
        console.log("Cards fetched from CardViewer: ", response.data)
        setCards(response.data);

    }
    const handleNext = () => {
        setIndex(index+1)
        if (index == cards.length -1){
            setIndex(0)
        }
    }
    const handlePrev = () => {
        setIndex(index-1)
        if (index == 0){
            setIndex(0)
        }
    }
    const handleButtonClick = () => {
        setFirstIsTrue(!firstIsTrue);
    };
    return (
        <>
            <h1>{index + 1}/{cards.length}</h1>
            <div onClick={handleButtonClick} style={{height:"8rem", width:"18rem", borderStyle:"solid", borderRadius:"1em", padding:"1em", backgroundColor:"red", color:"white", borderColor:"whitesmoke"}}>
                <div>{firstIsTrue ? cards[index]?.definition : cards[index]?.word}</div>
            </div>
            <div style={{padding:".5em"}}>                                
                <button style={{margin: "1em", color: "black", height: "2rem", width: "8rem", backgroundColor: "red", borderColor: "whitesmoke"}} type='submit' onClick={handlePrev}>Previous</button>
                <button style={{margin: "1em", color: "black", height: "2rem", width: "8rem", backgroundColor: "red", borderColor: "whitesmoke"}} type='submit' onClick={handleNext}>Next</button>
            </div>
                 
        </>
    )

}