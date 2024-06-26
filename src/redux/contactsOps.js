import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://660f820f356b87a55c51852b.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/contacts");
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
	try {
		const response = await axios.post("/contacts", { name: contact.name, number: contact.number });
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/contacts/${id}`);
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
