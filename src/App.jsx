import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import debounce from 'lodash.debounce';

import Navbar from './components/Navbar';
import Search from './components/Search';
import NotesList from './components/NotesList';
import {
  addNote,
  deleteNoteById,
  setLocalStorageItem,
  getLocalStorageItem,
} from './utils';

// const INITIAL_NOTES = () => {
//   const localNotes = JSON.parse(localStorage.getItem('notes') || '[]');
//   return localNotes;
// };

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const debouncedChangeHandler = useCallback(debounce(setSearchText, 500), []);

  const saveNoteFunction = (text) => {
    setNotes([...notes, addNote(text)]);
  };
  const deleteNoteFunction = (id) => {
    setNotes(deleteNoteById(id, notes));
  };

  useEffect(() => {
    const notes_ = getLocalStorageItem('notes', true);
    if (notes_) setNotes(notes_);
  }, []);

  useEffect(() => {
    setLocalStorageItem('notes', notes);
  }, [notes]);

  const filteredNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(searchText);
  });

  return (
    <div>
      <Navbar />
      <Search handleSearchNote={debouncedChangeHandler} />
      <NotesList
        notes={filteredNotes}
        saveNoteFunction={saveNoteFunction}
        deleteNoteFunction={deleteNoteFunction}
      />
    </div>
  );
}

export default App;
