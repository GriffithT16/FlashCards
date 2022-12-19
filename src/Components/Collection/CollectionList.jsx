import CardViewer from "../Card/CardViewer";
import React, { useState, useEffect } from "react";

function CollectionList(props) {
  return (
    <div className="">
      <h1>View Collections</h1>
      {props.collections && (
        <div>
          {props.collections.map((entry) => {
            return (
              <div className="border-box" onClick={() => props.setSelectedCollection(entry.id)} >
                <h1>{entry.id} - </h1>
                <h1> {entry.title}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );


}
export default CollectionList;
