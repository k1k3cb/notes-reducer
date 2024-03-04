import { useReducer } from 'react';
import AddNote from './components/add-note/AddNote';
import NotesList from './components/notes-list/NotesList';
import { notesReducer } from './reducers/notes-reducer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [notes, dispatch] = useReducer(notesReducer, []);
	// const [cart, setCart] = useState({
	// 	items: [],
	// 	totalPrice: '',
	// 	discount:''
	// })

	// setCart({...cart, items:[...cart.items, item ]})
	// dispatch({type:'ADD_ITEM', payload:item})
	// dispatch({type:'REMOVE_ITEM', payload:item.id})
	return (
		<>
			<GlobalStyles />
			<h1>Notes</h1>
			<AddNote dispatch={dispatch} />
			<NotesList notes={notes} dispatch={dispatch} />
		</>
	);
};

export default App;
