import React, { useState } from "react";
import CollectionTab from "./CollectionTab";

function CollectionList(props) {
  return (
    <div>
      <h1>Collections</h1>
      {props.collections && (
        <div>
          {props.collections.map((entry) => {
            return (
              <CollectionTab
                entry={entry}
                setSelectedCollection={props.setSelectedCollection}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default CollectionList;
