import React from 'react';
function Education() {
    return ( 
          <div className='container my-5'>
        <div className='row'>
            <div className='col-6 mt-5'>
             <img src='media/images/education.svg' style={{width:'75%'}} alt=''/>
                </div>
             
            <div className='col-6 mt-5'>
                <h2 className='mb-4'> Free and open market education</h2>
                <p>Versity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:'none'}} >Versity  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 <p className='mt-5' > TradingQ&A, the most active trading and investment community in <br/> India for all your mindset realated quires.</p>
                  <a href='' style={{textDecoration:'none'}}>TradingQ&A<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
             
         
            </div>
        </div>
       </div>
     );
}

export default Education;