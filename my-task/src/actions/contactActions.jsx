// contactActions.js
import axios from 'axios';

// This is an async action creator that uses redux-thunk
export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action to indicate that fetching has started (optional)
      dispatch({ type: 'FETCH_CONTACTS_START' });

      // Fetch data from the API
      const response = await axios.get('https://api.dev.pastorsline.com/api/contacts.json');

      // Dispatch an action with the fetched data
      dispatch({ type: 'FETCH_CONTACTS_SUCCESS', payload: response.data });
    } catch (error) {
      // Handle errors and dispatch an error action (optional)
      dispatch({ type: 'FETCH_CONTACTS_FAILURE', payload: error.message });
    }
  };
};
