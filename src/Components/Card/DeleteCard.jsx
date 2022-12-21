import React, { useState } from 'react';
import axios from 'axios';

const DeleteCard = (props) => {
    const [deleteCard, setDeleteCard] = useState()

        async function handleDelete(event) {
            event.preventDefault()

            let response = await axios.delete(`http://127.0.0.1:8000/api/collections/${props.selectedCollection}/cards/${props.cards.id}/`);
            if (response.status === 204) {
                props.fetchCollections();
                return true;
            }
        }


//This deleted the second card of the first collection. I must have props.cards.id wrong.



    return ( 
        <button type='submit' onClick={handleDelete}>Delete Card</button>
     );
}
 
export default DeleteCard;