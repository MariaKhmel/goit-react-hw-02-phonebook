import { Component } from "react";

export class ContactList extends Component{

    state = {
    
    }
    
    render() {
        const {contactlist} = this.props;
        return (
        <>
                <ul>
                    {contactlist.map((contact) => {
                        <li>
                         {contact}
                     </li>
                 })}
</ul>
        </>
        )  
    }
}