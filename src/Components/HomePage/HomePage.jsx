import React from 'react';
import image from '../../assets/Bg.jpg';

const HomePage = () => {
  return (
    <div className='container-fluid'>
      <div className='content ms-5'>
        <div className='HomePage'>Learn, Grow, <br /> Achieve</div>
        <p className='HomePageText mt-2'>Explore our vibrant campus and innovative programs.</p>
        <button type="button" className="btn btn-success p-3 w-25 fw-bold mt-3 rounded-3">Start Now</button>
      </div>
      <img src={image} className="Bg" alt="Background" />
    </div>
  );
};

export default HomePage;
