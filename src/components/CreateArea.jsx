import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((preValue) => {
      if (name === "title") {
        //console.log("hi")
        notes.title = value;
        console.log(notes.title);
        return {
          title: value,
          content: preValue.content
        };
      } else if (name === "content") {
        return (
          (notes.content = value),
          {
            title: preValue.title,
            content: value
          }
        );
      }
    });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(notes);
          setNotes({
            name: "",
            content: ""
          });
          event.preventDefault();
        }}
      >
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
