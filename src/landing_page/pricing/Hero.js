import React from 'react';


function Hero() {
    return ( 
       <div className='container'>
        <div className='row border-bottom p-5 mt-5 text-center '>
            <h2 className='mt-2'>Charges</h2>
            <h3 className='text-muted mt-3'>List of all charges and taxes</h3>
        </div>
         <div className='row  p-5 mt-5 text-center'>
            <div className='col p-4'>
            <img src='media/images/pricing0.svg' alt=''/>
            <h1 className=' fs-4'>Free equity delivery</h1>
            <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
           <div className='col p-4'>
            <img src='media/images/intradayTrades.svg' alt=''/>
            <h1 className=' fs-4'>Intraday and F&O trades</h1>
            <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
             <div className='col p-4'>
            <img src='media/images/pricing0.svg' alt=''/>
            <h1 className=' fs-4'>Free direct MF</h1>
            <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
           </div>
       </div>
     );
}

export default Hero;
