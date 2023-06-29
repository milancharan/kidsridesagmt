import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AdminRides from './components/AdminRides';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Rides from './components/Rides';
import Data from './assets/Data.json'

// const Data = [

//   {
//     "id": 1,

//     "RideName": "sin",

//     "RideImage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

//     "Amount": "650",

//     "AgeGroup": "0-5",

//     "Date": "2023-06-12",

//     "TimeSlot": [

//       "10-12",

//       "5-7",

//       "4-5"

//     ]

//   },

//   {
//     "id": 2,

//     "RideName": "cos",

//     "RideImage": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

//     "Amount": "450",

//     "AgeGroup": "0-5",

//     "Date": "2023-06-12",

//     "TimeSlot": [

//       "10-12",

//       "5-7",

//       "4-5"

//     ]

//   },

//   {
//     "id": 3,

//     "RideName": "ohm",

//     "RideImage": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",

//     "Amount": "450",

//     "AgeGroup": "0-5",

//     "Date": "2023-06-12",

//     "TimeSlot": [

//       "10-12",

//       "5-7",

//       "4-5"

//     ]

//   },

//   {
//     "id": 4,

//     "RideName": "Gaama",

//     "RideImage": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",

//     "Amount": "450",

//     "AgeGroup": "0-5",

//     "Date": "2023-06-12",

//     "TimeSlot": [

//       "10-12",

//       "5-7",

//       "4-5"

//     ]

//   },

//   {
//     "id": 5,

//     "RideName": "Beta",

//     "RideImage": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",

//     "Amount": "450",

//     "AgeGroup": "0-5",

//     "Date": "2023-06-12",

//     "TimeSlot": [

//       "10-12",

//       "5-7",

//       "4-5"

//     ]

//   },

//   {
//     "id": 6,

//     "RideName": "Alpha",

//     "RideImage": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",

//     "Amount": "450",

//     "AgeGroup": "0-5",

//     "Date": "2023-06-12",

//     "TimeSlot": [

//       "10-12",

//       "5-7",

//       "4-5"

//     ]

//   }

// ]

function App() {
  const [cart, setCart] = useState([])
  const [ride, setRide] = useState(Data)
  const [role, setRole] = useState('')

  const addToCart = (ride) => {
    setCart([...cart, ride])
  }



  // const manageRoles = (role) => {
  //   setRole(role)
  // }

  // useEffect(() =>{
  //   axios.get("./assets/Data.json")
  //   .then(resp => {
  //     setRide(resp.data)
  //   })
  //   .catch(err=>{
  //     console.log("Error:", err);
  //   })
  // },[myState])

  return (
    <div className="container">
      {role === '' ? (
        <div className='content-role'>
          <Login ride={ride} setMainRole={setRole} />
        </div>
      ) : role === 'admin' ? (
        <div>
          <div className='logo'><h1>Hey, Admin...!</h1></div>
          <div className='content'>
            {ride.map((r, i) => (
              <AdminRides setRides={setRide} rides={ride} ride={r} index={i} />
            ))}
          </div>
        </div>
      ) : role === 'user' ? (
        <div>
          <div className='logo'><h1>Hey, User...!</h1></div>
          <div className='content'>
            {ride.map((ride, i) => (
              <Rides ride={ride} addToCart={addToCart} />
            ))}
          </div>
          <Checkout ride={ride} cart={cart} setCart={setCart} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
