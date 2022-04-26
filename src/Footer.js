import React from "react" ;
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Footer() {
   const footerForm = async (e) =>{
      e.preventDefault();
         const Formvlaues = new FormData(e.target);
         try{
          let response = await axios.post('/iron_gate/admin/api/subscribe_email',Formvlaues,{headers:{ "Content-Type": "multipart/form-data",
          "Accept": "application/json","type": "formData"}});

          console.log(response.data);
        if(response.data.status === true)
        {
          toast.success(response.data.message); 
          document.getElementById("FmForm").reset();
        }else{
          toast.error(response.data.message);
        }
  
        } catch(err){ 
             toast.error('something went wrong please try again'); return false;  }
      return false; 
      }

    return (
 <>

<footer className="footer__area grey-bg-3 pt-40 p-relative fix">
         <div className="footer__shape">
            <img className="footer-circle-1 footer-2-circle-1" src="assets/img/icon/footer/home-1/circle-1.png" alt="" />
            <img className="footer-circle-2 footer-2-circle-2" src="assets/img/icon/footer/home-1/circle-2.png" alt="" />
         </div>
         <div className="footer__top">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
                     <div className="footer__widget mb-35 subscribe_footer">
                        <h5>Sign up to receive<br /> exclusive offers and news</h5>
                   
                     <form onSubmit={(e)=>{footerForm(e);}}  id = 'FmForm'  > 
                        <div className="join-from">
                        <input type="email" name = 'email' required placeholder="Email address.." />
                        <input type='hidden' name ='token' value='a250bcr552s' />
                        <button type="submit" className="w-btn w-btn-2">Subscribe</button>
                        </div>
                        </form>
                        <div className="socail">
                           <h5>
                              Follow us on
                           </h5>
                           <h5>
                           <Link to='/' target='blank'><i className="fab fa-google-plus-g"></i></Link>
                           <Link to='/' target='blank'><i className="fab fa-twitter"></i></Link>
                           <Link to='/' target='blank'><i className="fab fa-facebook-f"></i></Link>
                           <Link to='/' target='blank'><i className="fab fa-instagram"></i></Link>
                           <Link to='/' target='blank'><i className="fab fa-youtube"></i></Link>
                           <Link to='/' target='blank'><i className="fab fa-linkedin-in"></i></Link>
                           </h5>
                        </div>
                        <div className="faddress mb-3">
                           <h6>Lorem Ipsum is simply dummy text  <br /> indore 452001, MP India</h6>
                        </div>
                        <div className="fnumber mb-3">
                          <div>
                            <Link to='/'>123457890,</Link>
                            <Link to='/'>123457890,</Link>
                           </div>
                           <div>
                            <Link to='/'>123457890,</Link>
                            <Link to='/'>123457890,</Link>
                           </div>
                        </div>
                        <div className="fdemail">
                       <Link to='/'>irangatecleaningsearvice@gmail.com</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3  wow fadeInUp" data-wow-delay=".5s">
                     <div className="footer__widget mb-35 footer__pl-70">
                        <div className="footer__widget-title mb-15">
                           <h3>Customer Service</h3>
                        </div>
                        <div className="footer__widget-content">
                           <div className="footer__link footer__link-2">
                              <ul>
                                 <li><Link to='/faq'>FAQ</Link></li>
                                 <li><Link to='/terms'>Terms</Link></li>
                                 <li><Link to='/privacy'>Privacy Policy</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="footer__widget-title mb-15 mt-30">
                           <h3>Corporation</h3>
                        </div>
                        <div className="footer__widget-content">
                           <div className="footer__link footer__link-2">
                              <ul>
                                 <li><Link to='/about'>About us</Link></li>
                                 <li><Link to='/'>Customer Service</Link></li>
                                 <li><Link to='/'>Company</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 wow fadeInUp" data-wow-delay=".7s">
                     <div className="footer__widget mb-35 footer__pl-90">
                        <div className="footer__widget-title mb-15">
                           <h3>Why Choose Use</h3>
                        </div>
                        <div className="footer__widget-content">
                           <div className="footer__link footer__link-2">
                              <ul>
                                 <li><Link to='/'>Shopping Guide</Link></li>
                                 <li><Link to='/'>Blog</Link></li>
                                 <li><Link to='/'>Company</Link></li>
                                 <li><Link to='/contact'>Contact Us</Link></li>
                              </ul>
                           </div>
                           <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" style={{'maxWidth' : '150px'}} /> 
                        </div>
                     </div>
                  </div>
                </div>
            </div>
         </div>
         <div className="footer__bottom">
            <div className="container">
               <div className="footer__copyright">
                  <div className="row">
                     <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="footer__copyright-wrapper footer__copyright-wrapper-2 text-center">
                           <p>© 2022 <span>Iron Gate Cleaning Service</span> .All Rights Reserved. <Link to='/'></Link></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </footer>
       <ToastContainer  position="top-right"  />   
      </>
    );
  }

export default Footer




