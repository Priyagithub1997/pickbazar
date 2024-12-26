import React from 'react'
import { useLocation } from 'react-router-dom';

const Checkoutpage = () => {
  const location=useLocation();
  console.log(location.state);
  
  return (
    <>

      <div className='checkoutcontainer'>
        <div className='content'>
          <div className='persondetails'>
            <div className='contact'>
              <div className='head'>
                <h2><span>1</span>Contact Number</h2>
                <button>+ Add</button>
              </div>
              <div className='divinput'>
                <select><option>In</option></select>
                <input type='text' placeholder='+1'></input>
              </div>
            </div>
            <div className='contact'>
              <div className='head'>
                <h2><span>2</span>Name</h2>
                <button>+ Add</button>
              </div>
              <div className='divinput'>

                <input type='text'></input>
              </div>
            </div>
            <div className='contact'>
              <div className='head'>
                <h2><span>3</span>Billing Address</h2>
                <button>+ Add</button>
              </div>

              <p>No Address Found</p>

            </div>
            <div className='contact'>
              <div className='head'>
                <h2><span>4</span>Shipping Address</h2>
                <button>+ Add</button>
              </div>

              <p>No Address Found</p>

            </div>

            <div className='contact'>
              <div className='head'>
                <h2><span>5</span>Delivery Schedule</h2>

              </div>

              <div className='schedules'>
                <div>
                  <h3>Express Delivery</h3>
                  <h4>90 min express delivery</h4>
                </div>
                <div>
                  <h3>Morning</h3>
                  <h4>8.00 AM - 11.00 AM</h4>
                </div>
                <div>
                  <h3>Noon</h3>
                  <h4>11.00 AM - 2.00 PM</h4>
                </div>
                <div>
                  <h3>Afternoon</h3>
                  <h4>2.00 PM - 5.00 PM</h4>
                </div>
                <div>
                  <h3>Evening</h3>
                  <h4>5.00 PM - 8.00 PM</h4>
                </div>

              </div>

            </div>
            <div className='contact'>
              <div className='head'>
                <h2><span>6</span>Order Note</h2>

              </div>

           
              <textarea rows="10" cols="80"></textarea>

            </div>

          </div>
<div className='fooddetailscontainer'>
{location.state.map((product)=>(
   <div className='fooddetails' key={product.id}>
   <h2>Your Order</h2>
     <div className='heading'>
    
     <p>1 X {product.name} | {product.lb}lb (On Sale)</p>
     <p>$ {product.originalrate}</p>
   </div>    
   <div className='order'>
     <p>Sub Total</p>
     <p>$ {product.originalrate}</p>
   </div>
   <div className='order'>
     <p>Tax</p>
     <p>Calculated at checkout</p>
   </div>
   <div className='order'>
     <p>Estimated Shipping </p>
     <p>Calculated at checkout</p>
   </div>
   <button className='checkavail'>Check Availability</button>
   </div>

))}
  
  </div>
         

        </div>
     
</div>
    </>
  )
}

export default Checkoutpage