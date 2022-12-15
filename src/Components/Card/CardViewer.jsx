import axios from "axios";
import React, { useState, useEffect } from 'react';


export default function CardViewer(props) {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchCards();
    }, []);
    async function fetchCards() {
        debugger;
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${props.collectionId}/cards`)
        console.log(response);
        setCards(response);
    }

    return (
        <div style={{height:"15rem","width":"25rem","borderStyle":"solid"}}>
                Hello!
        </div>

    )
}