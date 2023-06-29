import React from 'react'

export default function Rides({ ride, addToCart }) {
    const manageAddToCart = () => {
        addToCart(ride)
    }
    return (
                <div className='border border-dark rounded text-center content-item'>
                    <img src={ride.RideImage} width={200} className='mt-2' height={250} alt={ride.RideName} /><hr />
                    <h3 className='mt-0'>{ride.RideName}</h3>
                    <p>Age Goup Allowed: {ride.AgeGroup}</p>
                    <p>Amount: &#8377;{ride.Amount}</p>
                    <button type='button' className='button mb-2 btn' onClick={manageAddToCart} >Add to Cart</button>
                </div>
    )
}






// ml-15 d-flex justify-content-center content
// mb-2 p-2 m-1 border border-dark border-radius-4 text-center
