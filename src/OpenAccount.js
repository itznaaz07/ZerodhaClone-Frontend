import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();
    return (  
         <div className='container p-5 mb-5 '>
     <div className='row text-center'>
            <h1 className='mt-5 mb-2'> Open a Zerodha account</h1>
        <p className='mt-2'>Modern platforms and apps,₹0 investments, and flat ₹20 intraday and F&O trades.  </p>
        <button className='p-2 fs-5 btn btn-primary mb-5'  style={{width:'20%',margin:'0 auto'}}  onClick={() => navigate('/signup')}>Sign up Now </button>
     </div>

    </div>   
    
    );
}

export default OpenAccount;