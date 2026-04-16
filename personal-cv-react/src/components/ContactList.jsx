import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div>
      <h2>Saved Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;