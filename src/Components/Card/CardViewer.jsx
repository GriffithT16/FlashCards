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
            <div style={{height:"15rem", width:"25rem", borderStyle:"solid", borderRadius:"1em", padding:"1em"}}>
                <div>{firstIsTrue ? cards[index]?.definition : cards[index]?.word}</div>
                <div style={{padding:".5em"}}>
                    <button style={{margin:".5em"}} type='submit' onClick={handleButtonClick}>Flip Card</button>            
                    <button style={{margin:".5em"}} type='submit' onClick={handleNext}>Next</button>
                    <button style={{margin:".5em"}} type='submit' onClick={handlePrev}>Previous</button>
                </div>
            </div>     
        </>
    )
    // const displayAnswer = () => {
    //     return (
    //         <div style={{height:"15rem", width:"25rem", borderStyle:"solid", borderRadius:"1em", padding:"1em"}}>
    //             {cards[index]?.definition} 
    //             <div style={{padding:".5em"}}>
    //                 <button style={{margin:".5em"}} type='submit' onClick={displayQuestion}>Question</button>            
    //                 <button style={{margin:".5em"}} type='submit' onClick={handleNext}>Next</button>
    //                 <button style={{margin:".5em"}} type='submit' onClick={handlePrev}>Previous</button>
    //             </div>     
    //         </div>
    //     )
    // }
    // const displayQuestion = () => {
    //     return (
    //         <div style={{height:"15rem", width:"25rem", borderStyle:"solid", borderRadius:"1em", padding:"1em"}}>
    //             {cards[index]?.word} 
    //             <div style={{padding:".5em"}}>
    //                 <button style={{margin:".5em"}} type='submit' onClick={handleButtonClick}>Answer</button>            
    //                 <button style={{margin:".5em"}} type='submit' onClick={handleNext}>Next</button>
    //                 <button style={{margin:".5em"}} type='submit' onClick={handlePrev}>Previous</button>
    //             </div>        
    //         </div>
    //     )
    // }

    // return (
    //     <div style={{height:"15rem", width:"25rem", borderStyle:"solid", borderRadius:"1em", padding:"1em"}}>
    //         {cards[index]?.word} 
    //         <div style={{padding:".5em"}}>
    //             <button style={{margin:".5em"}} type='submit' onClick={handleButtonClick}>Answer</button>            
    //             <button style={{margin:".5em"}} type='submit' onClick={handleNext}>Next</button>
    //             <button style={{margin:".5em"}} type='submit' onClick={handlePrev}>Previous</button>
    //         </div>        
    //     </div>

    // )
}