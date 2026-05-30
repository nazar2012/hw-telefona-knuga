import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./copmonents/ContactForm/ContactForm";
import Filter from "./copmonents/ContactForm/Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSumbit = (evt) => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState((prevstate) => {
      return {
        contacts: [...prevstate.contacts, newContact],
        name: "",
        number: "",
      };
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSumbit}
          onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />
        <Filter onChange={this.handleChange} value={this.state.filter}/>
        {/* <label>
          Find contact by name
          <br />
          <input type="text" name="filter" onChange={this.handleChange} />
        </label> */}
        Contacts
        <ul>
          {filterContact.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
