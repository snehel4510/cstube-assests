import React, { useState } from "react";
import AddNote from "./AddNote";
import CreateArea from "./CreateArea";


function NewNote() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return ( <
            div >

            <
            CreateArea onAdd = { addNote }
            /> {
            notes.map((noteItem, index) => {
                return ( <
                    AddNote key = { index }
                    id = { index }
                    title = { noteItem.title }
                    content = { noteItem.content }
                    onDelete = { deleteNote }
                    />
                );
            })
        } <
        /div>
);
}

export default NewNote;