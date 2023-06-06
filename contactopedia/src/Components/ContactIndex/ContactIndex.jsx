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
                    phone: '1',
                    email: 'lajhf@afdkjl.com',
                    isFavorite: true
                },
                {
                    id: 2,
                    name: 'sherry',
                    phone: '2',
                    email: 'lajhf@afdkjl.com',
                    isFavorite: false
                },
                {
                    id: 3,
                    name: 'lucious',
                    phone: '3',
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
            ],
            selectedContact: undefined,
            isUpdating: false
        }
    }

    handleAddContact = (newContact) =>
    {
        if(newContact.name == '')
        {
            return{status: 'failure', msg: 'Please enter a valid name'}
        }
        else if(newContact.phone == '')
        {
            return{status: 'failure', msg: 'Please enter a valid phone number'}
        }

        const duplicateRecord = this.state.contactList.filter((x)=>{
            if(x.name == newContact.name && x.phone == newContact.phone)
            {
                return true
            }
        })

        if(duplicateRecord.length > 0)
        {
            return{status: 'failure', msg: 'Duplicate Record'}
        }
        else
        {
            const newFinalContact = 
            {   
                ...newContact,
                id:this.state.contactList[this.state.contactList.length-1].id+1,
                isFavorite: false
            }
            this.setState((prevState)=>{
                return{
                    contactList: prevState.contactList.concat([newFinalContact])
                }
            })
            return{status: 'success', msg: 'Contact was added successfully'}
        }
    }

    handleUpdateContact = (updatedContact) =>
    {
        if(updatedContact.name == '')
        {
            return{status: 'failure', msg: 'Please enter a valid name'}
        }
        else if(updatedContact.phone == '')
        {
            return{status: 'failure', msg: 'Please enter a valid phone number'}
        }

        this.setState((prevState)=>{
            return{
                contactList: prevState.contactList.map((obj)=>{
                    if(obj.id == updatedContact.id)
                    {
                        return{
                            ...obj,
                            name: updatedContact.name,
                            email: updatedContact.email,
                            phone: updatedContact.phone
                        }
                    }
                    return obj
                }),
                isUpdating: false,
                selectedContact: undefined
            }
        })
        return{status: 'success', msg: 'Contact was updated successfully'}
        
    }

    handleToggleFavorite = (contact) => {
        this.setState((prev) => {
            return{
                contactList: prev.contactList.map((obj)=>{
                    if(obj.id == contact.id)
                    {
                        return{...obj, isFavorite: !obj.isFavorite}
                    }
                    return obj
                })
            }
        })
    }

    handleDeleteContact = (contactId) => {
        this.setState((prev) => {
            return{
                contactList: prev.contactList.filter((obj)=>{
                    return obj.id !== contactId
                })
            }
        })
    }

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {   
            ...newContact,
            id:this.state.contactList[this.state.contactList.length-1].id+1,
            isFavorite: false
        }
        this.setState((prevState)=>{
            return{
                contactList: prevState.contactList.concat([newFinalContact])
            }
        })
    }

    handleRemoveAllContacts = () => {
        this.setState(()=>{
            return{
                contactList: []
            }
        })
    }

    handleUpdateClick = (contact) => {
        console.log(contact)
        this.setState(()=>{
            return{
                selectedContact: contact,
                isUpdating: true
            }
        })
    }

    handleCancelUpdate = (contact) => {
        console.log(contact)
        this.setState(()=>{
            return{
                selectedContact: undefined,
                isUpdating: false
            }
        })
    }



    render()
    {
        return(
            <div>
                <Header />
                <div className="container" style={{minHeight:'85vh'}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact
                            handleAddRandomContact = {this.handleAddRandomContact} />
                        </div>
                        <div className="col-4">
                            <RemoveAllContacts
                            handleRemoveAllContacts = {this.handleRemoveAllContacts} />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                            <AddContact
                            handleAddContact={this.handleAddContact}
                            isUpdating={this.state.isUpdating}
                            selectedContact={this.state.selectedContact}
                            cancelUpdateContact={this.handleCancelUpdate}
                            handleUpdateContact={this.handleUpdateContact}/>
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <FavoriteContact
                                contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite == true
                                )}
                                favoriteClick={this.handleToggleFavorite}
                                deleteContact={this.handleDeleteContact}
                                updateClick={this.handleUpdateClick}
                            />
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <GeneralContact
                                contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite == false
                                )}
                                favoriteClick={this.handleToggleFavorite}
                                deleteContact={this.handleDeleteContact}
                                updateClick={this.handleUpdateClick}    
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactIndex