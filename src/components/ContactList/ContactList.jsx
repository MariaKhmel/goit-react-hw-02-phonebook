import { Component } from "react";



export class ContactList extends Component{

    render() {
        const { contactlist } = this.props;
        console.log(Boolean(contactlist.length))
        return (
            <>
                <ul>
                    {contactlist.map(contact => (
                        <li key={contact.id}>{contact.name} : {contact.number}</li>
                    ))}

  {contactlist.length ? <button type="button" onClick={this.props.onClick}>Delete</button> : <></>}
              
                </ul>
        </>
        )  
    }
    
}