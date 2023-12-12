import React from 'react'
import ImageCarousel from '../components/Carousel'

//divide trips into divs with the compenent as popular travel spots with package prices


function OurTrips() {
    const imageUrls= [
      "s3://travelappratw/B0E3D885-E242-4A78-B12C-FA2FE3BB361E 2.jpg",
      "s3://travelappratw/IMG_0706 2.jpg"
    ]
  return (
    <div>OurTrips
        <ImageCarousel className='tripPictures'images={imageUrls}/>
        <div className='ourTrips'>
        <div className='tripOne'></div>
        <div className='tripTwo'></div>
        <div className='tripThree'></div>
        <div className='tripFour'></div>
        <div className='tripFive'></div>
        <div className='tripSix'></div>
        </div>

    </div>
  )
}

export default OurTrips
