import axios from "axios";
import React, { useState, useEffect } from 'react';
import "./App.css";



function CollectionList(props) {
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
            <h1>View Collections</h1>
            <div>
                {props.data.map((el) => {
                    return (
                        <div className="border-box">
                            <h1>{el.id}</h1>
                            <h1>{el.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>

    )

    // return (
    //     <div style={{height:"15rem","width":"25rem","borderStyle":"solid"}}>
    //             Hello!
    //     </div>

    // )
}
export default CollectionList();