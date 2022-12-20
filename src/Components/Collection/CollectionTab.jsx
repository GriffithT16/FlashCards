import React, { useEffect, useState } from "react";

export default function CollectionTab(props) {
  const [active, setActive] = useState(false);

  const buttonIsActive = () => {
    setActive((current) => !current);
  };
  return (
    <div
      className="border-box"
      style={{
        backgroundColor: active ? "darkred" : "",
        color: active ? "red" : "",
      }}
      onClick={() => {
        props.setSelectedCollection(props.entry.id);
        buttonIsActive();
      }}
    >
      <h1>{props.entry.id} - </h1>
      <h1> {props.entry.title}</h1>
    </div>
  );
}
