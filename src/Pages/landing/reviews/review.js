import React from 'react';

import './reviews.css';




const Review=()=>{

  const handleChaneContent=()=>{
    console.log('hello')
  }
  return(
    <>
<div className='review_slider'>
  <div className='review_head'>
<h2 className='review_heading'>Reviews</h2>
  </div>

<div className='review_contants'>
  <h4 className='review_content_h4' style={{marginBottom:'60px'}}>What an amazing plateform! I was able to find just I need for the  <br />
  anniversary with my wife. The Artist was hired was a brillent one.
   </h4>
  <p className='review_para'>Jhon Procker</p>
  <p className='review_para'>Taxes, client</p>
</div>
<div className='review_radio_button'>
<input onChange={handleChaneContent} type='radio'></input>
<input type='radio'></input>
<input type='radio'></input>
<input type='radio'></input>
<input type='radio'></input>
<input type='radio'></input>
</div>

</div>
    </>
  )
}


export default Review;