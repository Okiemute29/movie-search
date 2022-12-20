import React from 'react'

const Slider = ({poster, title}) => {
  return (
        <div className="">
            {poster && <img src={poster} alt='poster' className='clip-image' />}
            <p className="movie-title">{title}</p>
        </div>

  )
}

export default Slider
