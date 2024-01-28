import { Component } from "react";
// import { nanoid } from 'nanoid'

export class ContactForm extends Component{
    state = {
    //  id:'',
     name: '',
    number:'',
    }


    handleInputChange = e => {
 
        this.setState({
            // id : nanoid(),
            [e.currentTarget.name]:e.currentTarget.value,
        })
    }
  
    handleFormSubmit = (e) => {
     e.preventDefault();
        this.props.handleFormChange(this.state)
        this.setState({
            // id : '',
            name: '',
            number:'',
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
  value={this.state.name}
   onChange={this.handleInputChange}                                               
/>
              </label>
              <label> Number
<input
  type="tel"
  name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      value={this.state.number}
                      onChange={this.handleInputChange}    
/>
              </label>
              

                    <button type="submit">Add contact</button>

            </form>
        </>
        )  
    }
}