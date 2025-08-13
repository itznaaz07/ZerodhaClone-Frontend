import React from "react";

function Rightsection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5" style={{marginTop:'140px'}}>
          <h3 className="mb-3">{productName}</h3>
          <p>{productDescription}</p>
          <div className="">
            <a
              href={learnMore}
              style={{  textDecoration: "none" }}
            >
              {learnMore}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        
        </div>
        <div className="col-1"></div>
        <div className="col-6 " style={{paddingLeft:'4px'}}>
          <img src={imageURL}alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
