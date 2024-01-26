import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'


export class App extends Component {

state = {
  contacts: [],
  name: ''
}

  handleFormChange = (data) => {
    this.setState(prevstate => {
    const newContactsList = [...prevstate.contacts,data];
      return {
        contacts: newContactsList,
  
      }
    })
  }
 

 

  render() {
   
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleFormChange={this.handleFormChange} />
        <h2>Contacts</h2>
        <ContactList contactlist={this.state.contacts} />
      </div>
    );
  }
}