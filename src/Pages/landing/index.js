import React from 'react';

import Navbar from './../../components/navbar';
import Slider from './../../components/slider';
import GoBack from './goback/goback';
import WaysToEarn from './waystoearn/toearn';
import Review from './reviews/review';
import Faq from './faq/faq';
import Footer from './footer/footer'
import Work from './work';


const LandingPage = () =>{
  return(
    <>
      <Navbar />
      <Slider />
      <Work />
      <GoBack />
       <WaysToEarn />
       <Review />
       <Faq />
       <Footer />  
    </>
  )
}

export default LandingPage