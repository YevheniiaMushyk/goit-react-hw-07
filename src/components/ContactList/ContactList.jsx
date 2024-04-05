import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilterName } from "../../redux/selectors";

const ContactList = () => {
	const selectContactsState = useSelector(selectContacts);
	const selectNameFilter = useSelector(selectFilterName);
	let filteredContacts = [];

	if (Array.isArray(selectContactsState)) {
		filteredContacts = selectContactsState.filter((contact) => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()));
	}

	return (
		<ul className={css.list}>
			{filteredContacts.map((contact) => {
				return (
					<li className={css.item} key={contact.id}>
						<Contact name={contact.name} number={contact.number} id={contact.id} />
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
