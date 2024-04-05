import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchContacts } from "./contactsOps";
import contactsInitialState from "../components/ContactList/contacs.json";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: contactsInitialState,
		loading: false,
		error: null,
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
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
