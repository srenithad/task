const initialState = {
    showModalA: false,
    showModalB: false,
  };
  
  const modalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_MODAL_A':
        return { ...state, showModalA: true, showModalB: false };
      case 'OPEN_MODAL_B':
        return { ...state, showModalA: false, showModalB: true };
      case 'CLOSE_MODAL':
        return { ...state, showModalA: false, showModalB: false };
      default:
        return state;
    }
  };
  
  export default modalReducer;