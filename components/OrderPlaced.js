import React, { useState } from 'react'

export default function OrderPlaced({setOtp}) {
    
    const manageOK = () => {
        setOtp(0)
    }

    return (
        <div className='placed'>
            <div className='placed1 text-center'>
                
                <h3>Thank You...!</h3>
                <p>Your order has been Placed Successfully!!!</p>
                <button type='button' className='btn' onClick={manageOK}>OK</button>
            </div>
        </div>
    )
}
