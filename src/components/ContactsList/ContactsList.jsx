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
                    ))}

  
              
                </ul>
        </>
        )  
    }
    
}