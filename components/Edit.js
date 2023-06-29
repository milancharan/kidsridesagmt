import React, { useRef, useState } from 'react'

export default function Edit({rides, ridess,setRidess, indexes,setPopup}) {
    // const urlRef = useRef(undefined)
    // const ridenameRef = useRef(undefined)
    // const amountRef = useRef(undefined)

    const Data = [

        {
          "id": 1,
      
          "RideName": "sin",
      
          "RideImage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      
          "Amount": "650",
      
          "AgeGroup": "0-5",
      
          "Date": "2023-06-12",
      
          "TimeSlot": [
      
            "10-12",
      
            "5-7",
      
            "4-5"
      
          ]
      
        },
      
        {
          "id": 2,
      
          "RideName": "cos",
      
          "RideImage": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      
          "Amount": "450",
      
          "AgeGroup": "0-5",
      
          "Date": "2023-06-12",
      
          "TimeSlot": [
      
            "10-12",
      
            "5-7",
      
            "4-5"
      
          ]
      
        },
      
        {
          "id": 3,
      
          "RideName": "ohm",
      
          "RideImage": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      
          "Amount": "450",
      
          "AgeGroup": "0-5",
      
          "Date": "2023-06-12",
      
          "TimeSlot": [
      
            "10-12",
      
            "5-7",
      
            "4-5"
      
          ]
      
        },
      
        {
          "id": 4,
      
          "RideName": "Gaama",
      
          "RideImage": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      
          "Amount": "450",
      
          "AgeGroup": "0-5",
      
          "Date": "2023-06-12",
      
          "TimeSlot": [
      
            "10-12",
      
            "5-7",
      
            "4-5"
      
          ]
      
        },
      
        {
          "id": 5,
      
          "RideName": "Beta",
      
          "RideImage": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      
          "Amount": "450",
      
          "AgeGroup": "0-5",
      
          "Date": "2023-06-12",
      
          "TimeSlot": [
      
            "10-12",
      
            "5-7",
      
            "4-5"
      
          ]
      
        },
      
        {
          "id": 6,
      
          "RideName": "Alpha",
      
          "RideImage": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      
          "Amount": "450",
      
          "AgeGroup": "0-5",
      
          "Date": "2023-06-12",
      
          "TimeSlot": [
      
            "10-12",
      
            "5-7",
      
            "4-5"
      
          ]
      
        }
      
      ]

    const [datas, setDatas] = useState({"url":Data[indexes].RideImage, "name":Data[indexes].RideName, "amount":Data[indexes].Amount})

    const manageSubmit = (e) => {
        console.log(ridess);
        e.preventDefault()
        let temp = [...ridess]
        temp[indexes] = {"RideImage":datas.url, "RideName":datas.name, "Amount": datas.amount}
        // console.log(Data[indexes]);
        setRidess(temp)
        setPopup(false)
        // const url = urlRef.current.value
        // const ridename = ridenameRef.current.value
        // const amount = amountRef.current.value

        // console.log(url, ridename, amount);
    }
    return (
        <div className='formComp' >
            <form className='formComp1' onSubmit={manageSubmit}>
                <label className='elems'>Ride Image Url: <input type='url' placeholder='Enter URL...' value={datas.url} name='url' onChange={(e) => setDatas({...datas, "url":e.target.value})} id='url'></input></label>
                <label className='elems'>Ride Name: <input type='text' placeholder='Enter Ride  Name...' value={datas.name} name='ridename' onChange={(e) => setDatas({...datas, "name":e.target.value})} id='ridename'></input></label>
                <label className='elems'>Ride Amount: <input type='number' placeholder='Enter Amount...' value={datas.amount} name='amount' onChange={(e) => setDatas({...datas, "amount":e.target.value})} id='amount'></input></label>
                <button type='submit' className='elems btn'>Submit</button>
            </form>
        </div>
    )
}











// import React from 'react'
// import {Modal} from 'reactstrap'

// export default function Edit() {
//   return (
//     <div>Edit</div>
//   )
// }
