import axios from "axios";
import React, { useState, useEffect } from 'react';
import './App.css';



export default function CollectionList(props) {
    const [collectionID, setCollectionId] = useState([]);
    useEffect(() => {
        fetchCollection();
    }, []);
    async function fetchCollection() {
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${props.collectionId}/cards`)
        debugger;
        console.log(response);
        setCollectionId(response);
    }

    return (
        <div className="border-box">

        </div>

    )

    // return (
    //     <div style={{height:"15rem","width":"25rem","borderStyle":"solid"}}>
    //             Hello!
    //     </div>

    // )
}