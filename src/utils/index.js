import { nanoid } from 'nanoid';

export const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text,
    date: date.toLocaleDateString(),
  };

  return newNote;
};

export const deleteNoteById = (id, notes) => {
  return notes.filter((note) => note.id !== id);
};

export const getLocalStorageItem = (key, parseIt = false) => {
  const result = localStorage.getItem(key);
  if (parseIt) return JSON.parse(result);

  return result;
};

export const setLocalStorageItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
