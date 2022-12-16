import React from "react";
import CollectionList from "../Collection/CollectionList";
import CardViewer from "../Card/CardViewer";



export default function SideBar(props) {
  return (
    <div>
      <CollectionList collections={props.collections} setSelectedCollection={props.setSelectedCollection}/>
    </div>
  );
}
