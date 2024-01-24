import { Component } from "react";

export class ContactForm extends Component{

    state = {
    nameInputValue:''
    }

     handleNameInputChange = (e) => {
         this.setState({nameInputValue:e.currentTarget.value})
        }

    addContact
    
    render() {
      


        return (
           <>
                <form onSubmit={this.addContact}>
                    <label> Name
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
  required
  value={this.state.nameInputValue}
   onChange={this.handleNameInputChange}                                               
/>
                    </label>
                    <button type="submit">Add contact</button>

            </form>
        </>
        )  
    }
}