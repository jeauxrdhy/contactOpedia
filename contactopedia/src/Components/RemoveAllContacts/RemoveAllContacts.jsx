import React from 'react'

function RemoveAllContacts(props) {
  return (
    <div>
        <button 
        className="btn btn-danger form-control"
        onClick={()=>props.handleRemoveAllContacts()}>
          Remove All Contacts
        </button>
    </div>
  )
}

export default RemoveAllContacts