import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactReducer from './reducers/contactReducer';
import modalReducer from './reducers/modalReducer';
import thunk from 'redux-thunk'; // Import redux-thunk

// Combine your reducers into a rootReducer
const rootReducer = combineReducers({
  contacts: contactReducer,
  modals: modalReducer,
});

// Apply redux-thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
