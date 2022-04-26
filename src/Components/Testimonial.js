import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  

import axios from 'axios';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';   

const options = {
   loop:true,
   margin:30,
   autoplay:true,
   autoplayTimeout:4000,
   smartSpeed:700,
   items:6,
   navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
   nav:false,
   dots:true,
   responsive:{
      0:{
         items:1
      },
      576:{
         items:1
      },
      767:{
         items:2
      },
      992:{
         items:3
      },
      1200:{
         items:3
      },
      1600:{
         items:3
      }
   }
};
export class Testimonial extends Component  {  

  
        render()  
        {   
    
          return (  


            <section className="testimonial__area pb-40 section_lite p-relative overflow-y-visible">
            {/* <div className="circle-animation testimonial">
               <span></span>
    

            </div> */}
            <div className="testimonial__shape">
               {/* <img className="testimonial-circle-1" src="assets/img/icon/testimonial/home-1/circle-1.png" alt="" />
               <img className="testimonial-circle-2" src="assets/img/icon/testimonial/home-1/circle-2.png" alt="" /> */}
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                     <div className="section__title-wrapper text-center section-padding mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title">Testimonials</h2>
                        <p>Lorem Ipsum is simply dummy </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="testimonial__slider wow fadeInUp" data-wow-delay=".5s">
                     <OwlCarousel {...options} >  

<div className="testimonial__item-3 white-bg mb-30">
<div className="rating">
   <ul>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
   </ul>
</div>
<div className="testimonial__text-4">
   <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
</div>

<div className="testimonial__person d-flex align-items-center">
   <div className="testimonial__avater mr-20">

      
   <img src={process.env.PUBLIC_URL + '/assets/images/team.jpg'} alt="" /> 
   </div>
   <div className="testimonial__author-3">
      <h4>Customer 1</h4>
      <span>Business Man</span>
   </div>
</div>
</div>

<div className="testimonial__item-3 white-bg mb-30">
<div className="rating">
   <ul>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
   </ul>
</div>
<div className="testimonial__text-4">
   <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
</div>

<div className="testimonial__person d-flex align-items-center">
   <div className="testimonial__avater mr-20">
   <img src={process.env.PUBLIC_URL + '/assets/images/team.jpg'} alt="" /> 
   </div>
   <div className="testimonial__author-3">
      <h4>Customer 2</h4>
      <span>Business Man</span>
   </div>
</div>
</div>

<div className="testimonial__item-3 white-bg mb-30">
<div className="rating">
   <ul>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
   </ul>
</div>
<div className="testimonial__text-4">
   <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
</div>

<div className="testimonial__person d-flex align-items-center">
   <div className="testimonial__avater mr-20">
   <img src={process.env.PUBLIC_URL + '/assets/images/team.jpg'} alt="" /> 
   </div>
   <div className="testimonial__author-3">
      <h4>Customer 3</h4>
      <span>Business Man</span>
   </div>
</div>
</div>

<div className="testimonial__item-3 white-bg mb-30">
<div className="rating">
   <ul>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
      <li><i className="icon_star"></i></li>
   </ul>
</div>
<div className="testimonial__text-4">
   <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
</div>

<div className="testimonial__person d-flex align-items-center">
   <div className="testimonial__avater mr-20">
   <img src={process.env.PUBLIC_URL + '/assets/images/team.jpg'} alt="" /> 
   </div>
   <div className="testimonial__author-3">
      <h4>Customer 4</h4>
      <span>Business Man</span>
   </div>
</div>
</div>   
                  
            
           
</OwlCarousel> 
                      </div>
                  </div>
               </div>
            </div>
         </section> 
  
  
 
          )  
        }  
      }  
        
  
export default Testimonial  