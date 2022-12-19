import React from "react";
import CollectionList from "../Collection/CollectionList";




export default function SideBar(props) {
  return (
    <div>
      <CollectionList collections={props.collections} setSelectedCollection={props.setSelectedCollection}/>
    </div>
  );
}
