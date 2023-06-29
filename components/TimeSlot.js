import React from 'react'

export default function TimeSlot({ride}) {
  return (
    <div>
        <label>TimeSlot: <select>
            <option>--Select--</option>
            <option value={ride.TimeSlot[0]}>{ride.TimeSlot[0]}</option>
            <option></option>
            <option value={ride.TimeSlot[1]}>{ride.TimeSlot[1]}</option>
            <option></option>
            <option value={ride.TimeSlot[2]}>{ride.TimeSlot[2]}</option>
        </select></label>
    </div>
  )
}
