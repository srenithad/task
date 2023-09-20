const initialState = {
    contacts: [],
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CONTACTS_SUCCESS':
        return { ...state, contacts: action.payload };
      default:
        return state;
    }
  };
  
  export default contactReducer;