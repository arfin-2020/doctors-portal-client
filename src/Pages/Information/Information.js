import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import './Information.css';

const Information = ({ title, icon, description,background }) => {
  return (
    <div className="col-lg-4 col-md-6 container text-white  mt-3">
      <div className={`d-flex align-item-center info-container justify-content-center info-${background}`}>
        <div className='mr-3'>
        <FontAwesomeIcon className = "icons-style"  icon={icon} /> 
        </div>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
