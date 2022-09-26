import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
export default function Maps() {
    const containerStyle = {
        width: '200px',
        height: '200px'
      };
      const center = {
        lat: 20.5937,
        lng: 78.9629
      };

  return (
    <div className='mx-5'>
       <LoadScript
        googleMapsApiKey="AIzaSyD0xICUeMIllx83yfIqbwp501a907f873s"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
