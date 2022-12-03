import { useState } from 'react';

function ContactList({ contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
              className="btn-success btn-sm mb-2"
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => setText(e.target.value)}
        className="mt-2 border border-solid border-green-600 p-2"
      />
      <br />
      <button className="btn-primary btn mt-2">Send to {contact.email}</button>
    </section>
  );
}

export const PreserveReset = () => {
  const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
  ];

  const [to, setTo] = useState(contacts[0]);

  return (
    <div className="grid justify-center">
      <h1 className="mt-7 text-center text-[2em]">Preserve and Reset State</h1>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <p>Preserve Element</p>
      <Chat contact={to} />
      <p>Reset Element</p>
      <Chat key={to.id} contact={to} />
    </div>
  );
};
