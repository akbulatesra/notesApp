import React from 'react';
import { StyledNote } from './styles/StyledNote';
import { RiDeleteBin5Line } from 'react-icons/ri';

function Note({ id, text, date, deleteNoteFunction }) {
  return (
    <StyledNote>
      <p>{text}</p>
      <footer>
        <p>{date}</p>
        <RiDeleteBin5Line
          id="deleteBtn"
          onClick={() => {
            deleteNoteFunction(id);
          }}
        />
      </footer>
    </StyledNote>
  );
}

export default Note;
