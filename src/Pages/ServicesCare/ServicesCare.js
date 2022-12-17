import React from "react";
import { Slide } from "react-reveal";
import Child from "../../assets/images/Child.png";

const ServicesCare = () => {
  return (
    <Slide right>
      <section className="justify-content-center d-flex container m-5 ">
      <div className="row">
        <div className="col-md-6">
          <img src={Child} height="600px" alt="child" />
        </div>
        <div className="col-md-6">
        <div className='mt-5 text-start'>
        <h1 className="text-3xl font-bold font-sans" style={{color: '#1C315E'}}>Exceptional Dental <br/> Care, on your Terms</h1>
          <p className="text-2xl" style={{color:'grey', textAlign:'justify'}} >
            "Fluoride treatments are typically professional treatments
            containing a high concentration of fluoride that a dentist or
            hygienist will apply to a person's teeth to improve health and
            reduce the risk of cavities. These in-office treatments may take the
            form of a solution, gel, foam, or varnish.",
          </p>
          
        </div>
        </div>
      </div>
    </section>
    </Slide>
  );
};

export default ServicesCare;
