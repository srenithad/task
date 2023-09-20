import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../actions/contactActions';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [countryId, setCountryId] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts based on query, page, and countryId
    dispatch(fetchContacts()); 
  }, [dispatch]);

  useEffect(() => {
    // Update filtered contacts when the contacts or query change
    setFilteredContacts(contacts);
  }, [contacts, query]);

  const handleSearchInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    // Set countryId to 226 (US) if the checkbox is checked, null otherwise
    setCountryId(isChecked ? 226 : null);
  };

  const handleLoadMore = () => {
    // Increment the page number to load the next page of contacts
    setPage(page + 1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={query}
        onChange={handleSearchInputChange}
      />
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          value={countryId === 226}
        />
        Only even
      </label>
      <ul>
        {/* Map and display the filtered contacts */}
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {/* Display contact details */}
            {contact.first_name} {contact.last_name} - {contact.phone_number}
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default ContactList;