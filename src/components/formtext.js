import React, { useState } from 'react'

export default function FormText() {
    let [cloc,setcloc]=useState("Enter Current Location");
    let[dloc,setdloc]=useState("Enter Destination Location");
  return (
    <div >
       
        <h1 className='nav justify-content-center my-4 'style={{color:'white'}}>Book a City Taxi to your destination in town</h1>
        <h2 className='nav justify-content-center'style={{color:'white'}}><em>Choose from a range of categories and prices</em></h2>
        <div className='border border-secondary my-3 rounded col-sm-2 mx-3 ' >
      <div className="mb-3 my-3 col-sm-10 mx-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontWeight:'bold'}} >{cloc}</label>
  <textarea className="form-control" placeholder='PICK UP' style={{borderWidth:"3px",borderColor:'black'}} id="exampleFormControlTextarea1" rows='1'></textarea>
</div>
<div className="mb-3 my-3 col-sm-10 mx-4">
  <label htmlFor="exampleFormControlTextarea1"style={{fontWeight:'bold'}}  className="form-label">{dloc}</label>
  <textarea className="form-control" placeholder='DROP' style={{borderWidth:"3px",borderColor:'black'}} id="exampleFormControlTextarea1"rows='1'></textarea>
</div>
<div>
<select className="form-select form-select-sm-1 mx-4 my-3"  aria-label="Default select example" style={{width:'200px',borderWidth:"3px",borderColor:'black'}} > When?
  <option selected>Now</option>
  <option value="1">Schedule for later</option>
  </select>
</div>
<div className=' mx-5 my-3'>
    <button className='btn btn-primary'>Search Cabs</button>
</div>
</div>
</div>


  
  )
}
