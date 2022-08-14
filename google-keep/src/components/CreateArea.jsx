import React from "react";
import { useState } from "react";

import {IoIosAdd} from "react-icons/io";

function CreateArea({onAdd}) {

  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

function handleChange(e){
    const{name, value} = e.target;
    setNote(preValue => {
        return {
            ...preValue,
            [name]: value,
        };
    });
}

function handleExpanded(){
  setExpanded(true);
}

function submitButton(event){
  event.preventDefault();
    onAdd(note);
    setNote({
        title: "",
        content: "",
    });
    
}

  return (
    <div>
      <form onSubmit={submitButton}>
      {isExpanded && (
        <input
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
      )}
        
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button type="submit"><IoIosAdd size={35} /></button>
      </form>

    </div>
  );
}

export default CreateArea;
