import React from 'react';
const DoctorsDetails = ({ img, name, specialty }) => {
  // console.log(speciality)
  const buttonStyle = {
    backgroundColor: "#1976d2",
    color: "#ffffff",
    border: "none",
    padding: "10px",
    width: "120px",
    borderRadius: "5px",
    fontWeight: "600",
    marginTop: "50px",
  };

  return (
    <>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={img}
            alt={"doctor"}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-2xl text-gray-700">

              <span aria-hidden="true" className="absolute inset-0" />
              {name}

            </h3>

            <p className="mt-1 text-sm text-gray-500">{specialty}</p>
          </div>
        </div>
      </div>
    </>


  )
}
export default DoctorsDetails;