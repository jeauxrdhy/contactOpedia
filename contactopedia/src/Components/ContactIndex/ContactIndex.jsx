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
                            <FavoriteContact />
                        </div>
                        <div className="row py-2">
                            <GeneralContact />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactIndex