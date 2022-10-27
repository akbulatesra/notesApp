import React from 'react';
import Note from './Note';
import { StyledNotesList } from './styles/StyledNotesList';
import AddNote from './AddNote';

function NotesList({ notes, saveNoteFunction, deleteNoteFunction }) {
  return (
    <StyledNotesList>
      <AddNote saveNoteFunction={saveNoteFunction} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNoteFunction={deleteNoteFunction}
        />
      ))}
    </StyledNotesList>
  );
}

export default NotesList;
