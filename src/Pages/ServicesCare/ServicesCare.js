import React from "react";
import Child from "../../assets/images/Child.png";
const ServicesCare = () => {
  return (
    <section className="justify-content-center d-flex container m-5">
      <div className="row">
        <div className="col-md-6">
          <img src={Child} height="600px" alt="child" />
        </div>
        <div className="col-md-6">
        <div className='mt-5 text-start'>
        <h1 style={{color: '#001E6C'}}>Exceptional Dental <br/> Care, on your Terms</h1>
          <p style={{color:'grey'}} >
            "Fluoride treatments are typically professional treatments
            containing a high co\ncentration of fluoride that a dentist or
            hygienist will apply to a person's teeth to improve health and
            reduce the risk of cavities. These in-office treatments may take the
            form of a solution, gel, foam, or varnish.",
          </p>
          <button type="button" className="btn btn-primary">Learn More</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCare;
