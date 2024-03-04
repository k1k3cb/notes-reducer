import { v4 } from 'uuid';
import { addNote } from '../../actions/notes.actions';

const AddNote = ({ dispatch }) => {
	return (
		<form onSubmit={event => handleSubmit(event, dispatch)}>
			<input type='text' name='note' />
			<button>Add Note</button>
		</form>
	);
};

const handleSubmit = (event, dispatch) => {
	event.preventDefault();
	const newNote = {
		id: v4(),
		value: event.target.note.value
	};
	dispatch(() => addNote(newNote));
	event.target.reset();
};

export default AddNote;
