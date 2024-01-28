import { Component } from "react";
import { ContactItem } from "components/ContactItem/ContactItem";

export class ContactsList extends Component{

    render() {
        const { contactlist,onClick } = this.props;
        
        return (
            <>
                <ul>
                    {contactlist.map(contact => (
                        <ContactItem key={contact.id} contact={contact} contactlist={contactlist}onClick={onClick} />

                        // <li key={contact.id}>
                            
                        //     <p> {contact.name} : {contact.number}</p>
                        
                        // {contactlist.length ? <button type="button" onClick={this.props.onClick}>Delete</button> : <></>}
                        // </li>
                    ))}

  
              
                </ul>
        </>
        )  
    }
    
}