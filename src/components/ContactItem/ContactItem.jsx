import { Component } from "react";
import {Contactcard, DeleteButton} from'./ContactItem.styled'

const ContactItem = ({contact, contactlist, onClick}) => {
    return (
<Contactcard >
<p> {contact.name} : {contact.number}</p>
            {contactlist.length ?
                <DeleteButton type="button" onClick={()=>onClick(contact.id)}>Delete</DeleteButton> :
                (null)} 
   </Contactcard>     
    )

}

export {ContactItem}