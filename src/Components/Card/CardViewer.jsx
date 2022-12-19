import axios from 'axios';
import React, { useState, useEffect } from 'react';





export default function CardViewer(props) {
    const [cards, setCards] = useState([]);
    const [index,setIndex] = useState(0)
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
        if (index == 2){
            setIndex(2)
        }
    }
    const handlePrev = () => {
        setIndex(index-1)
        if (index == 0){
            setIndex(0)
        }
    }
    // function displayAnswer() {
    //     let answer = ({cards[index]?.definition})
        
    // }

    return (
        <div style={{height:"15rem","width":"25rem","borderStyle":"solid"}}>
            {cards[index]?.word}
            <button>Answer</button>            
            <button type='submit' onClick={handleNext}>Next</button>
            <button type='submit' onClick={handlePrev}>Previous</button>
            {/* <div>
                <CustomButton onClick={setIndex[+1]}/>
            </div> */}
        </div>

    )
}