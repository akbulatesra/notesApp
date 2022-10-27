import React, { useState } from 'react';
import { StyledAddNote } from './styles/StyledAddNote';

function AddNote({ saveNoteFunction }) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;
  const handleFunction = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const addNoteFunction = () => {
    if (noteText.trim().length > 0) {
      saveNoteFunction(noteText);
      setNoteText('');
    }
  };

  return (
    <StyledAddNote>
      <textarea
        id="textArea"
        cols="8"
        rows="8"
        placeholder="Enter a note..."
        value={noteText}
        onChange={handleFunction}
      />

      <footer>
        <p>{characterLimit - noteText.length} Remaining</p>

        <button onClick={addNoteFunction}>Save</button>
      </footer>
    </StyledAddNote>
  );
}

export default AddNote;
