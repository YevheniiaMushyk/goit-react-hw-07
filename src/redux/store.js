import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const persistConfig = {
	key: "saved-contacts",
	storage,
};

export const store = configureStore({
	reducer: {
		contacts: persistReducer(persistConfig, contactReducer),
		filters: filtersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
			},
		}),
});

export const persistor = persistStore(store);
