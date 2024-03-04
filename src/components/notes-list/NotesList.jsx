import { removeNote } from '../../actions/notes.actions';

const NotesList = ({ notes, dispatch }) => {
	if (notes.length === 0) return <h2>No notes</h2>;
	return (
		<>
			{notes.map(note => (
				<div key={note.id}>
					<span>{note.value}</span>
					<button onClick={() => dispatch(() => removeNote(note.id))}>X</button>
				</div>
			))}
		</>
	);
};

export default NotesList;
