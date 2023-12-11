import React from 'react'
import ImageCarousel from '../components/Carousel'

//divide trips into divs with the compenent as popular travel spots with package prices


function OurTrips() {
    const imageUrls= [

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
