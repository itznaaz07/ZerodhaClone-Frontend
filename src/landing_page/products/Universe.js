import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="mt-5 text-muted">The Zerodha Universe</h2>
        <p className="mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt=""style={{width:'70%'}} />
          <p className="text-small text-muted text-center mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks in ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:'60%'}}/>
          
          <br/><br/><p className="text-small text-muted text-center mt-2">
            options trading platform that lets you create strategies, analyze positions, and examine data points like open intereset, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:'55%'}}/>
          <p className="text-small text-muted text-center mt-3">
            our asset management venture that is creating simple and transparent index fundsto help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" alt="" style={{width:'45%'}}/>
          <p className="text-small text-muted text-center mt-3">
           systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/tijori.svg" alt="" style={{width:'40%'}}/>
          <p className="text-small text-muted text-center mt-3">
           Investment research platform that offers detailed insights on stocks,sectors,and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" alt="" style={{width:'40%'}}/>
          <p className="text-small text-muted text-center mt-3">
          Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

        <button type="button" class="btn btn-primary btn-lg mt-3" style={{width:'20%',margin:'auto'}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
