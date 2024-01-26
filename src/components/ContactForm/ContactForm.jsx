import { Component } from "react";
import { nanoid } from 'nanoid'

export class ContactForm extends Component{

    state = {
        id:'',
        name: '',
    
    }

    handleNameInputChange = (e) => {

        this.setState({
            id : nanoid(),
            name: e.currentTarget.value
        })
        }
  
    handleFormSubmit = (e) => {
     e.preventDefault();
        this.props.handleFormChange(this.state)
        this.setState({
            id : '',
            name: '',
        })
        }
    


    render() {
  return (
           <>
                <form onSubmit={this.handleFormSubmit}>
                    <label> Name
<input
  type="text"
  name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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