import React from "react";

function Note(props) {
  return (
    <div onClick={props.delete} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
