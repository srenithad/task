import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import { fetchContacts } from '../actions/contactActions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ContactList from './ContactList';

function ModalA() {
  const dispatch = useDispatch();
  const showModalA = useSelector((state) => state.modals.showModalA);

  useEffect(() => {
    // Fetch contacts for Modal A
    dispatch(fetchContacts(171, '', 1, null));
  }, [dispatch]);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Modal show={showModalA} onHide={closeModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactList />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: '#46139f' }}>Modal Button A</Button>
        <Button style={{ backgroundColor: '#ff7f50' }}>Modal Button B</Button>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalA;