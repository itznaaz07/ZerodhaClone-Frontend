import React from "react";

function Leftsection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} alt=""/>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h3 className="mb-3">{productName}</h3>
          <p>{productDescription}</p>
          <div className=""><a href={tryDemo} style={{textDecoration:'none'}}>{tryDemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={tryDemo} style={{marginLeft:'50px',textDecoration:'none'}}>{learnMore}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
        <div className="mt-4">  <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt=""/>
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg"  style={{marginLeft:'50px'}} alt=""/>
          </a></div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
