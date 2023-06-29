import React, { useState } from 'react'
// import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import Edit from './Edit'

export default function AdminRides({ setRides, rides, ride, index }) {
    const [popup, setPopup] = useState(false)
    // const manageEdit = () => {
    //     <Edit />
    // }
    return (
        <div className='border border-dark rounded text-center content-item'>
            <img src={ride.RideImage} width={200} className='mt-2' height={250} alt={ride.RideName} /><hr />
            <h3 className='mt-0'>{ride.RideName}</h3>
            <p>Age Group Alloed: {ride.AgeGroup}</p>
            <p>Amount: &#8377;{ride.Amount}</p>
            <button type='button' className='button mb-2 btn' onClick={() => setPopup(true)}>Edit</button>
            {popup ? <Edit rides={ride} ridess={rides} setRidess={setRides} indexes={index} setPopup={setPopup} /> : null}
        </div>
    )
}
