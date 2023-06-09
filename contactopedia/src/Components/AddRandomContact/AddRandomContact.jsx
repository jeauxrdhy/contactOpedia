import React from 'react'
import { getRandomUser } from '../../Utilities/Api'

const GetRandomContact = async (props) => {
  const responseFromAPI = await getRandomUser()

  return props.handleAddRandomContact({
    name: responseFromAPI.data.first_name + " " + responseFromAPI.data.last_name,
    email: responseFromAPI.data.email,
    phone: responseFromAPI.data.phone_number 

  })
}


function AddRandomContact(props) {
  return (
    <div>
        <button 
        className="btn btn-success form-control"
        onClick={()=>GetRandomContact(props)}>
            Add Random Contact
        </button>
    </div>
  )
}

export default AddRandomContact