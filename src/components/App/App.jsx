import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { getContacts, getIsLoading, getError } from "../../redux/selectors";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
	const dispatch = useDispatch();
	// Отримуємо частини стану
	const items = useSelector(getContacts);
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	// Викликаємо операцію
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div>
			<h1 className={css.title}>Phonebook</h1>
			{isLoading && <p>Loading contacts...</p>}
			{error && <p>{error}</p>}
			<ContactForm />
			<SearchBox />
			{items.length > 0 && <ContactList />}
		</div>
	);
}

export default App;
