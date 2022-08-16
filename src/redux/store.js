import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { contactsApi } from './contactsApi';

// const checkExistContacts = (state, data) => {
//   for (const contact of state) {
//     if (contact.name.toLowerCase() === data.name.toLowerCase()) {
//       return Notify.failure(`${data.name} Is already in your contact list!`);
//     }
//   }
//   return state.unshift(data);
// };

// const deleteContact = (state, action) => {
//   const index = state.indexOf(state.find(contact => contact.id === action));

//   state.splice(index, 1);
// };

// const mySlice = createSlice({
//   name: 'Contacts',
//   initialState: [
//     // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   reducers: {
//     handleAddContact(state, action) {
//       checkExistContacts(state, action.payload);
//     },
//     handleRemoveContact(state, action) {
//       deleteContact(state, action.payload);
//     },
//   },
// });

// export const store = configureStore({
//   reducer: { contacts: mySlice.reducer },
// });

// export const { handleAddContact, handleRemoveContact } = mySlice.actions;

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
