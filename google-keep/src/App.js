import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/count";

let savedNotes = localStorage.getItem("notes");
function App(props) {
  const [notes, setNotes] = useState(JSON.parse(savedNotes) || [])
  function addNote(newNote) {
    console.log("heelo");
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  function deleteNotes(id) {
    setNotes((prevValue) => {
      return [...prevValue.filter((note, index) =>
        index !== id)];
    });
  }
  return (
    <div className="App">
      <Header />
        <Count count={notes.length === 0? "Empty":
       `Showing ${notes.length} Notes in Database`} /> 
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
