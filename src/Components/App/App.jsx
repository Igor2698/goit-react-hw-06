import "./App.css";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactForm } from "../ContactForm/ContactForm";
import { useState, useEffect } from "react";

function App() {
  // const visibleContacts = () => {
  //   const inputValueInLowerCase = inputValue.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(inputValueInLowerCase)
  //   );
  // };

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
