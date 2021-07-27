import React from 'react';
import Video from './video.mp4'
import Button from './../button'
import './styles.css'

const Slider = () =>{
  return(

  <div className="slider">
    <video playsinline autoplay muted loop src={Video} autoPlay width="100%"/>
    <div className="slider-content">
      <h5 className="slider-heading">“Literature, painting, music - the most basic lesson that all art teaches us is to stop, look, and listen to life on this planet, including our own lives, as a vastly richer, deeper, more mysterious business than mostof the time it ever occurs to us to suspect as we bumble along from day to day on automatic pilot.”
        - Brederick Buechner</h5>
      <Button title="Become an artist" type="secondary"/>
    </div>
  </div>
  )
}

export default Slider;