import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactsInitialState from "../components/ContactList/contacs.json";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: contactsInitialState,
	},
	reducers: {
		addContact: {
			reducer(state, action) {
				state.items.push(action.payload);
			},
			prepare(contact) {
				return {
					payload: {
						id: nanoid(),
						name: contact.name,
						number: contact.number,
					},
				};
			},
		},
		deleteContact(state, action) {
			const index = state.items.findIndex((contact) => contact.id === action.payload);
			state.items.splice(index, 1);
		},
	},
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
