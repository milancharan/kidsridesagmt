import React, { useEffect, useState } from 'react'
import OrderPlaced from './OrderPlaced';
import TimeSlot from './TimeSlot';

export default function Checkout({ ride, setCart, cart}) {
    const [otp, setOtp] = useState(0)
    const countTotal = () => {
        let amount = 0
        cart.forEach((ride) => {
            amount += parseInt(ride.Amount)
        });
        return amount
    }

    
    const manageOtp = () => {
        let otp1 = Math.floor(1000 + Math.random() * 9000)
        const regex = new RegExp('^[0-9]{4}$')
        if(regex.test(otp1)){
            setOtp(otp1)
        }
    }
    
    useEffect(()=>{
        setCart([])
    },[otp])

    const validateCart = () => {
        return cart.length
    }

    const manageRemoveFromcart = () => {
        // let temp = cart
        // setCart((current) => current.filter((cart)=>cart.id===cart.id))
    }

    return (
        <div>
            <h3 className='text-center'>Checkout Here</h3>
            <div className='content-checkout'>
                {cart.map((ride, i) => (
                    <div className='border border-dark rounded text-center content-item-checkout'>
                        <img src={ride.RideImage} width={40} height={45} alt={ride.RideName} />
                        <h3 className='mt-4'>{ride.RideName}</h3>
                        <p>Amount: {ride.Amount}</p>
                        <TimeSlot ride={ride} />
                        <button type='button' onClick={manageRemoveFromcart}>Remove</button>
                    </div>
                ))}
            </div>
            <div className='text-center justify-content-between'>
                <h3>Total To Pay: {countTotal()}</h3><button type='button' className='btn' onClick={manageOtp} disabled={!validateCart()}>Proceed To Pay</button>
            </div>

            {otp ? <OrderPlaced setOtp={setOtp}/> : null}
        </div>
    )
}
