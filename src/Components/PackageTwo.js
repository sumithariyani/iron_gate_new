import React from "react" ;
import { Outlet, Link } from "react-router-dom";


function PackageTwo() {
    return (
 <>
   <section className="blog__area section_card package_card">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 section__title-5-p mb-15">Clothes, Curtains & more</h2>
                        <p>Clothes, Curtains & more</p>
                       
                     </div>
                  </div>
               </div>
               <div className="row">
                   <div className="col-lg-4  wow fadeInUp" data-wow-delay=".3s">
                       <div className="card_package">
                       <Link to='/package-detail' className="imght">
                           <img src={process.env.PUBLIC_URL + '/assets/images/p4.png'} />
                       </Link>
                       <h4>Iron</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                       <Link to='/boook-package' className="w-btn w-btn-blue w-btn-blue-header btnblack">Book Now</Link>
                       </div>
                   </div>
                   <div className="col-lg-4  wow fadeInUp" data-wow-delay=".3s">
                       <div className="card_package">
                       <Link to='/package-detail' className="imght">
                           <img src={process.env.PUBLIC_URL + '/assets/images/p5.png'} />
                       </Link>
                       <h4>Curtains</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                       <Link to='/boook-package' className="w-btn w-btn-blue w-btn-blue-header btnblack">Book Now</Link>
                       </div>
                   </div>
                   <div className="col-lg-4  wow fadeInUp" data-wow-delay=".4s">
                       <div className="card_package">
                       <Link to='/package-detail' className="imght">
                           <img src={process.env.PUBLIC_URL + '/assets/images/p6.png'} />
                       </Link>
                       <h4>Sofa</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                       <Link to='/boook-package' className="w-btn w-btn-blue w-btn-blue-header btnblack">Book Now</Link>
                       </div>
                   </div>
               </div>
            </div>
    </section>  
      </>
    );
  }

export default PackageTwo
