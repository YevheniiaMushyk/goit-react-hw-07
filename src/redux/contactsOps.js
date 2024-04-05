import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/contacts");
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
