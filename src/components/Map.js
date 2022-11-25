import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon="mdi:map-marker" color="#ff2d00" className='pin-icon' />
      <p className="pin-text">{text}</p>
    </div>
  )

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Headquarters !</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyALCEHPLnPtRDINnavwBBuAh0TsOC8f8t4' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map