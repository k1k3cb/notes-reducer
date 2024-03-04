import { NOTES_TYPES } from '../constants/notes.types';

export const notesReducer = (notes, { type, payload }) => {
	switch (type) {
		case NOTES_TYPES.ADD_NOTE: {
			return [...notes, payload];
		}
		case NOTES_TYPES.REMOVE_NOTE: {
			return notes.filter(note => note.id !== payload);
		}
	}
};
