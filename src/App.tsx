import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { addNote } from "./action";
import {NewNoteInput} from "./NewNoteInput";
import {NotesState} from "./notesRAeducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };
  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note, index) => {
          return <li key={index}> {note} </li>;
        })}
      </ul>
    </>
  );
}

export default App;
