import React from "react" ;


function Subscribe() {
    return (
 <>

<section className="cta__area subscribe p-relative bg_img">
            <div className="container p-0">
               <div className="cta__inner-3 p-relative fix wow fadeInUp" >
                  <div className="row align-items-center">
                     <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-9">
                        <div className="cta__content-3">

                           <h3 className="cta__title cta__title-3 ">Subscribe For More</h3>
                           <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry</p>
                           <form action="#">
                             <div className="join-from"><input type="text" placeholder="Email address.." />
                             <button type="submit" className="w-btn w-btn-2">Subscribe</button>
                             
                             </div>
                           </form>
                           <div className='button_group'>


                         <a href="#">
                           <img src={process.env.PUBLIC_URL + '/assets/images/appstore.png'} alt="" /> 
                          </a>
                         <a href="#">
                         <img src={process.env.PUBLIC_URL + '/assets/images/playstore.png'} alt="" /> 
                         </a>



                         {/* <!--   <div className="platform__name">
                           <a href="#" className="apple-store">
                              <div className="platform__name-wrapper d-flex align-items-center">
                                 <div className="platform__name-icon">
                                    <i className="fab fa-google-play"></i>
                                 </div>
                                 <div className="platform__name-content">
                                    <h5>Available on the</h5>
                                    <span>Google Play</span>
                                 </div>
                              </div>
                           </a>
                        </div> -->
                      <!--   <div className="appstore">
                           <a href="#" className="d-flex align-items-center">
                              <div className="platform__name-wrapper d-flex align-items-center">
                                 <div className="platform__name-icon">
                                    <i className="fab fa-apple"></i>
                                 </div>
                                 <div className="platform__name-content">
                                    <h5>Available on the</h5>
                                    <span>App Store</span>
                                 </div>
                              </div>
                           </a>
                        </div> --> */}
                        </div>
                        </div>
                     </div>
                     <div className="col-xxl-5 col-xl-4 col-lg-2 col-md-3">
                        <div className="cta__btn">
                         

                        <div className=" about__thumb-2 wow fadeInUp" data-wow-delay=".3s">

                        <img  className='img_style about-big bounceInUp wow' src={process.env.PUBLIC_URL + '/assets/images/subscribe.png'} alt="" /> 
                                                  
                        </div>
                     
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
  
      </>
    );
  }

export default Subscribe







