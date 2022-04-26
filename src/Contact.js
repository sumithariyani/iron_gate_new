import React from 'react';
import GoogleMap from './Components/GoogleMap';
import SendMessage from './Components/SendMessage';

function Contact() {
 return (
    <div>

     
<section className="hero__banner p-relative d-flex align-items-center"> 
  <div className="container">
     <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
           <div className="hero__content pr-80 text-center">
            <h1 className='text-white'>Contact us</h1>
           </div>
        </div>
        
     </div>
  </div>
</section>

<section className="pb-45 pt-45 p-relative border-style contactStyle">
    <div className="container">
      <div className="row justify-content-center d-flex">
        <div className='col-lg-4'>
       <div className='user_card_info'>
          <label className='label'>Contact Us</label>
          <div className='icon-style'>
             <div className='icon-img'>
             <img src='assets/images/mail.png' alt='' />
             </div>
             <div className='info'>
             <a href='mailto:'>info@irongatecleaningservices</a>
             </div>
          </div>
          <div className='icon-style'>
             <div className='icon-img'>
            <img src='assets/images/phone.png' alt='' />
             </div>
             <div className='info'>
             <div className="fnumber mb-3"><div>
                <a href="#">123457890,</a>
             <a href="#">123457890,</a></div>
             <div><a href="#">123457890,</a>
             <a href="#">123457890,</a></div>
             </div>
             </div>
          </div>
          <div className='icon-style'>
             <div className='icon-img'>
             <img src='assets/images/location.png' alt='' />
             </div>
             <div className='info'>
             <a href='mailto:'>Lorem Ipsum is simply dummy <br />
                indore 452001, MP India</a>
             </div>
          </div>
       </div>
        </div>
        <div className='col-lg-8'>
        <SendMessage />
        </div>
     </div>
   </div>
</section>

<GoogleMap />




    </div>
  );
}

export default Contact;