import React from 'react';

function Stats() {
    return (  
      <div className='container  p-5'>
        <div className='row p-4'>
            <div className='col-6 p-4'>
            <h1 className='fs-2 mb-5'>Trust with confidence</h1>
            <h2 className='fs-4'>Customer-first always</h2>
            <p className='text-muted'>That's why 13+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments. </p>
            <h2 className='fs-4' >No spam or gimmicks</h2> 
            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications.High quality apps that you use at your pace, the way you like.</p>
            <h2 className='fs-4'>The Zerodha universe</h2>
            <p className='text-muted'>Not just an app, but a whole ecosytstem, Our investments in 30+ fin tech startups offer you tailored services specific to your needs.</p>
            <h2 className='fs-4'>Do better with money</h2>
            <p className='text-muted'>When initiatives like Nudge and kill switch, we don't just facilitate transactions, but actively help you to do better with your money.</p>           
            </div>
            <div className='col-6 p-5 mt-3'>
                <img src='media/images/ecosystem.png'alt='' style={{width:'100%'}} className='mb-4 '/>
             <div className='text-center'>
                <a href=' ' className='mx-5' style={{textDecoration:'none'}}>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href=' 'style={{textDecoration:'none'}}>Try kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
             </div>
            </div>
        </div>
      </div>  
    );
}

export default Stats;
