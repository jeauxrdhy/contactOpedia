import React from "react";
import AddRandomContact from "../AddRandomContact/AddRandomContact";
import RemoveAllContacts from "../RemoveAllContacts/RemoveAllContacts";
import AddContact from "../AddContact/AddContact";
import FavoriteContact from '../FavoriteContact/FavoriteContact'
import GeneralContact from '../GeneralContact/GeneralContact'
import Footer from "../Footer/Footer";
import Header from '../Header/Header.component'

class ContactIndex extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            contactList:
            [
                {
                    id: 1,
                    name: 'james',
                    phone: '989-456-8484',
                    email: 'lajhf@afdkjl.com',
                    isFavorite: true
                },
                {
                    id: 2,
                    name: 'sherry',
                    phone: '989-456-8484',
                    email: 'lajhf@afdkjl.com',
                    isFavorite: false
                },
                {
                    id: 3,
                    name: 'lucious',
                    phone: '989-456-8484',
                    email: 'lajhf@afdkjl.com',
                    isFavorite: true
                },
                {
                    id: 4,
                    name: 'draco',
                    phone: '989-456-8484',
                    email: 'lajhf@afdkjl.com',
                    isFavorite: false
                }
            ]
        }
    }

    render()
    {
        return(
            <div>
                <Header />
                <div className="container" style={{minHeight:'85vh'}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact />
                        </div>
                        <div className="col-4">
                            <RemoveAllContacts />
                        </div>
                        <div className="row py-2">
                            <AddContact />
                        </div>
                        <div className="row py-2">
                            <FavoriteContact
                                contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite == true
                                )}
                            />
                        </div>
                        <div className="row py-2">
                            <GeneralContact
                            contacts={this.state.contactList.filter(
                                (u) => u.isFavorite == false
                            )} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactIndex