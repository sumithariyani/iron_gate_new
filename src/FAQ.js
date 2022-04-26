import React from 'react';
import FaqList from './Components/FaqList';

function FAQ() {
return (
<>
<section className="hero__banner p-relative d-flex align-items-center"> 
  <div className="container">
     <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
           <div className="hero__content pr-80 text-center">
            <h1 className='text-white d_text'>Frequently Asked Questions</h1>
            <h1 className='text-white m_text'>FAQ</h1>
           </div>
        </div>       
     </div>
  </div>
</section>

   <section className="pb-45 pt-45 p-relative border-style" style={{ background: '#2196f308'}}>
            <div className="container">
            <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25">
                        <h2 className="section__title-5 section__title-5-p mb-15">FAQ</h2>
                        <p>Frequently Asked Questions</p>
                      </div>
                  </div>
               </div>
               <FaqList />
              
            </div>
    </section>

</>
);
}

export default FAQ;
