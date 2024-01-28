import { Component } from "react";
import { Contactcard } from './ContactItem.styled'
import { Button } from "components/Button/Button";

const ContactItem = ({contact, contactlist, onClick}) => {
    return (
       
        <Contactcard >
<p> {contact.name} : {contact.number}</p>
            {contactlist.length ?
                <button type="button" onClick={()=>onClick(contact.id)}> Delete</button>:
                // <Button  type="button" onClick={()=>onClick(contact.id)}  title='Delete'/> :
                (null)} 
   </Contactcard>     
    )

}

export { ContactItem };