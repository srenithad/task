import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModalA, openModalB } from '../actions/modalActions';
import { fetchContacts } from '../actions/contactActions';
import Button from 'react-bootstrap/Button';
import ModalA from './ModalA';
import ModalB from './ModalB';

function MainScreen() {
  const dispatch = useDispatch();
  const showModalA = useSelector((state) => state.modals.showModalA);
  const showModalB = useSelector((state) => state.modals.showModalB);
  const contacts = useSelector(state => state.contacts.contacts);
  
  const openModalHandler = (modal) => {
    if (modal === 'A') {
      dispatch(openModalA());
    } else if (modal === 'B') {
      dispatch(openModalB());
    }
  };

  return (
    <div className="main-screen">
      <Button
        onClick={() => openModalHandler('A')}
        style={{ backgroundColor: '#46139f' }}
      >
        Button A
      </Button>
      <Button
        onClick={() => openModalHandler('B')}
        style={{ backgroundColor: '#ff7f50' }}
      >
        Button B
      </Button>
      {showModalA && <ModalA />}
      {showModalB && <ModalB />}
    </div>
  );
}

export default MainScreen;