import React from "react";
import { Slide } from "react-reveal";
import Doctor from "../../assets/images/img-laboratory-04.png";
import Signature from "../../assets/images/signature.png";

const ServicesCare = () => {
  return (
    <Slide right>
      <section className="justify-content-center d-flex mt-5" style={{backgroundColor:"#dddfde"}}>
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={Doctor}  width="400px" alt="Doctor" />
        </div>
        <div className="col-md-6">
        <div className='mt-20 text-start'>
        <h1 className="text-1xl font-bold font-sans" style={{color: 'grey'}}>Dr. Stephanie Wosniack</h1>
        <h1 className="text-5xl font-bold font-sans" style={{color: '#1C315E'}}>Our <span style={{color: '#c52127'}}>Team</span> </h1>
          <p className="text-2xl mt-5 " style={{color:'grey', textAlign:'justify'}} >
          Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Wosniack found her calling to help others get well.
          </p>
          <img src={Signature}  width="200px" alt="Doctor" className="rounded mx-auto d-block mt-5" />
        </div>
        </div>
      </div>
      </div>
    </section>
    </Slide>
  );
};

export default ServicesCare;
