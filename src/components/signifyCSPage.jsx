import React from 'react';
import signifyCS from '../img/Research.png';
import sampleVideo from '../video/FinalPrototype.mp4'; 

const SignifyCSPage = () => {
  return (
    <div className='lmsCSDisplay'>
      <img src={signifyCS} className='signifyCS' alt='signifyCS' />

      <video className='signifyVideo' controls width="600">
        <source src={sampleVideo} type="video/mp4" />
        
      </video>
    </div>
  );
};

export default SignifyCSPage;
