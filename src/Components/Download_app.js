import React from "react" ;

function Download_app() {
    return (
     <>
     <section className='download_section'>
         <div className='container'>
            <div className='row align-items-center'>
               <div className='col-lg-6'>
               <h3>Deep cleaning, sanitization <br /> & much more</h3>
               <h4 className='mb-0'>Download the App Now</h4>
               <div className="button_group">
                 <a href="#">
                  <img src={process.env.PUBLIC_URL + '/assets/images/appstore.png'} /></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/assets/images/playstore.png'} /></a>
                  </div>
               </div>
               <div className='col-lg-6 text-center img-section'>
               <img src={process.env.PUBLIC_URL + '/assets/images/service2.png'} alt='' />  
               </div>
             </div>
         </div>
      </section>

   </>
    );
  }

  export default Download_app;