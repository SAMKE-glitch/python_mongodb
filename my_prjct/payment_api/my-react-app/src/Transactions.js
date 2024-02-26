import React from 'react';
import './transaction.css'

const TransactionDetails = () => {
  // Define dynamic values
  const balance = 5000.00;
  const incoming = 2000;
  const outgoing = 1000;
  const remainingBalance = balance - outgoing;
  return (
    <body>
    <main>
    <div className='transactions' >
      <div className='navigation' >
      <p>MyWallet</p>
      <p>January 2024</p>
    
      <div className='square'>current Balance</div>
      <div className='balance'>
        <div className=''>
          {/* Balance Circle */}
          <div >
            ${balance}
            <span>.00</span>
          </div>
          {/* Incoming and Outgoing Finances */}
          <div div className='spending'>
            <div className='right'>
              <h5>Incoming</h5>
              <div className='amount green'>
              <p>${incoming}</p>
            </div>
            </div>
            <div className='left'>
              <h5>Outgoing</h5>
              <div className='amount red'>
              <p>${outgoing}</p>
            </div>
          </div>
          </div>
          {/* Remaining Balance */}
          <div>
            <h5>Remaining Balance</h5>
            <p>${remainingBalance}</p>
          </div>
          {/* Transaction Details */}
          
            <h5>Transaction Details</h5>
            <div className='payments'>
              <div className='transaction'>
              <div className='left'>
                <div className='name'>HP iphone anyar 6s 64GB</div>
                <div className='datetime'>2024-2-20 12.17</div>
                </div>
                <div className='right'>
                  <div className='amount red'>-$760</div>
                  </div>
                  </div>
                  <div className='transaction'>
                  <div className='left'>
                <div className='name'>Transfer dugi Paijo</div>
                <div className='datetime'>2024-2-21 12.17</div>
                </div>
                <div className='right'>
                  <div className='amount green'>+$320</div>
                 </div>
                  </div>
                  <div className='transaction'>
                  <div className='left'>
                <div className='name'>Kopi Setarbak</div>
                <div className='datetime'>2024-2-22 12.17</div>
                </div>
                <div className='right'>
                  <div className='amount red'>-$60</div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </main>
  </body>
  );
};

export default TransactionDetails;