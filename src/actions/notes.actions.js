import { NOTES_TYPES } from '../constants/notes.types';

const addNote = newNote => {
	return { type: NOTES_TYPES.ADD_NOTE, payload: newNote };
};

const removeNote = noteId => {
	return { type: NOTES_TYPES.REMOVE_NOTE, payload: noteId };
};

export { addNote, removeNote };
