import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addNote(notes) {
    setItems((prevValue) => {
      return [...prevValue, notes];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((notesItems, index) => (
        <Note
          key={index}
          id={index}
          title={notesItems.title}
          content={notesItems.content}
          delete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
