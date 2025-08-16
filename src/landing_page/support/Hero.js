import React from 'react';

function Hero() {
    return ( 
         <section className="container-fluid " id="supporthero">
          <div className="p-3" id='supportwrapper'>
             <h4 className='mt-5'>Support Portal</h4>
             <a href=' ' className='mt-5'>Track Tickets</a>
             </div>
             <div className=" row p-5 mx-5" >
                    <div className="col-6 p-3">
                        <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket</h1>
                        <input placeholder='Eg. how do I activate F&O'className='mt-3 mb-3'/><br/>
                        <a href=' '>Track account opening</a> &nbsp;
                        <a href=' '>Track Segment activation</a>&nbsp;
                        <a href=' '>Intraday <br/> margins</a>&nbsp; &nbsp;
                        <a href=' '>Kite User manual</a>
                    </div>
                    <div className='col-1'></div>
                    <div className="col-5 p-4  ">
                        <h1 className='mb-3 fs-3'>Featured</h1>
                        <ol>
                         <li> <a href=' '>Current Takeovers and Delisting-January 2024</a></li>
                       <li><a href=' '>Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                    
             </div>
           </section>
     );
}

export default Hero;