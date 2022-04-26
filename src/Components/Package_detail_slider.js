import React, {useState, Component } from "react";
import Slider from "react-slick";
import { Outlet, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Package_detail_slider(props) {
   const [pack_id, setPack_id] = useState("")

   const baseUrl = process.env.PUBLIC_URL + '/assets/images/';

   const settings = {
      customPaging: function(i) {
        return (
          <a>
             <img src={`${baseUrl}pk${i + 1}.png`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    const changeHtml = (input)=>{
      return <div dangerouslySetInnerHTML={ { __html: input}} />
}

// console.log('dddd');
console.log(props);

// setPack_id(props.package_id);
    return (
        <>
     <section className="about__area pb-45 pt-45 p-relative border-style">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-7 order-last">
                     <div className="about__wrapper about__wrapper-2 mb-20">
                        <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title mb-3">{props.package_title}</h2>
                           {changeHtml(props.packdtl)}
                             <div class="rating mt-3 mb-3">
                              <ol>
                                 <li  className='active'><i class="icon_star"></i></li>
                                 <li  className='active'><i class="icon_star"></i></li>
                                 <li  className='active'><i class="icon_star"></i></li>
                                 <li  className=''><i class="icon_star"></i></li>
                                 <li  className=''><i class="icon_star"></i></li>
                                 <div className="count_review">
                                    ({props.total_review } reviews)
                                 </div>
                              </ol>
                            
                           </div>
                           <div className="booknow">
                              {/* <Link to='/boook-package'  class="w-btn w-btn-blue w-btn-blue-header btnblack">Book Now</Link> */}
                              <Link to={{ pathname: "/boook-package", state: { pack_id: 'test',} }} class="w-btn w-btn-blue w-btn-blue-header btnblack" > Book Now</Link>
                              </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-5 wow fadeInRight order-lg-first text-center" data-wow-delay = ".7s">
                     <div className="slick_card about__thumb-wrapper-2 p-relative m-img">
                     { console.log(props.package_image)}
                     <Slider {...settings}>
                     <div   className="slick_list">
                          <img src={(props.package_image)? props.package_image[0]: ''} />
                        </div> 

                     {/* {  (props.package_image.length >0)? props.package_image.map((item,index)=>{             
                    
                    return<div key = {index}   className="slick_list">
                          <img src={item} />
                        </div> 
                         }):'' } */}

                        {/* <div className="slick_list">
                          <img src={process.env.PUBLIC_URL + '/assets/images/pk2.png'} />
                        </div> 
                        <div className="slick_list">
                          <img src={process.env.PUBLIC_URL + '/assets/images/pk3.png'} />
                        </div>                    */}
                     </Slider>
                     </div>
                  </div>
               </div>
            </div>
</section>  
        </>
 )};

 export default Package_detail_slider;