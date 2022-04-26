import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function PopularCategory() {
   const [get_category, setGet_category] = useState([]);
   const [get_all_catval, setGet_all_category] = useState([]);
   
const get_all_cat = async () =>{

   let org_code = localStorage.getItem('org_code');
    
   const getcat_Data = async (formDataa) => 
               { 
               let formData = new FormData();
                let name = 'a250bcr552s'   
               formData.append("token",name );
                   
                 const options = { headers:{ "Content-Type": "multipart/form-data",
                 "Accept": "application/json",
                 "type": "formData"}};
                    console.log(formData); 
                 try{
                   let response = await axios.post('/iron_gate/admin/api/get_featured_category',formData,options);
                 
                   return   response.data;
                 } catch(err){ console.error(err); toast.error('some errror'); return false;  }
              }  
             
              let res = await getcat_Data({token:'a250bcr552s'}); 
           
              if(res.status){
               setGet_all_category(res.data);
              }else{
                  toast.error(res.message);
              }
             }
 
             useEffect(() => {
               get_all_cat();
             },[]);  
          let dataarray =  get_category.data;
   const get_cat = async () => {
 
     const getData = async (formDataa) => {
       let formData = new FormData();
       let name = 'a250bcr552s'
       formData.append("token", name);
 
       const options = {
         headers: {
           "Content-Type": "multipart/form-data",
           "Accept": "application/json",
           "type": "formData"
         }
       };
 
       try {
         let response = await axios.post('/iron_gate/admin/api/get_package', formData, options);
 
         return response.data;
       } catch (err) { console.error(err); toast.error('some errror'); return false; }
     }
 
     let res = await getData({ token: 'a250bcr552s' });
 
     if (res.status) {
 
       setGet_category(res.data);
 
     } else {
       toast.error(res.message);
     }
   }
 
   useEffect(() => {
     get_cat();
   }, []);
 
   console.log('test by shubh');
   console.log(get_all_catval);
   const GoPage = (e, id) => {
      e.preventDefault();
      localStorage.setItem('pack_id', id);
      window.location.href = 'package-detail';
    }
    return (
 <>

<section className="blog__area section_card home_services">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 section__title-5-p mb-15">Home Services</h2>
                       
                     </div>
                  </div>
               </div>
               <div className="row">
               {(get_category.length > 0) ? get_category.map((item, index) => {
                return  <div  key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a to='/package-detail' onClick={e => { GoPage(e, item.package_id) }}>
                              <img src={item.package_image[0]} alt="" /> 
                           </a>
                        </div>
                        <div className="blog__content-5">
                          <h3 className="blog__title-5"><a href="#">{item.package_title}</a></h3>
                           
                        </div>
                     </div>
                  </div>;
            }) : ''}

                  {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/1.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                          
                           <h3 className="blog__title-5"><a href="#">Door Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/5.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                         
                           <h3 className="blog__title-5"><a href="#">Furniture Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/3.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                          
                           <h3 className="blog__title-5"><a href="#">Bedroom Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div> */}

               </div>
            </div>
    </section> 

    <section className="blog__area section_card p-0">
    <div className="chooseus__area pt-90 pb-90">
		<div className="chooseus__area-left-image" ></div>
		<div className="container">
			<div className="row align-items-center">
				<div className="col-xl-5 col-lg-4 lg-mb-30">
					<div className="chooseus__area-left">
						
					</div>
				</div>
				<div className="col-xl-7 col-lg-8">
					<div className="chooseus__area-right wow fadeInRight" data-wow-delay="0.4s" >
						<div className="chooseus__area-right-title mb-40">
							
							<h2>Expert house  <br /> cleaning service you can trust.</h2>
						</div>
						<div className="row">
                  {(get_all_catval ?? []).map((get_all_catval)=>{
						return	<div className="col-md-4 pr-0 md-pl-0 md-mb-20">
                     <Link to={{
  pathname: "/packages",
  state: {
    cat_id: get_all_catval.cat_id,
  }
}} >
								<div className="chooseus__area-right-icon-list">
                        <img src={get_all_catval.cat_image} alt=""  /> 
									<p>{get_all_catval.cat_name}</p>
								</div>
                        </Link>
							</div>;
                      })}

							{/* <div className="col-md-4 pr-0 md-mb-20 m">
								<div className="chooseus__area-right-icon-list center">	
                        <img src={process.env.PUBLIC_URL + '/assets/images/image-02-06.png'} alt=""  /> 
									<p>House Cleaning</p>
								</div>
							</div>
							<div className="col-md-4 pl-0 md-pr-0">
								<div className="chooseus__area-right-icon-list">	
                        <img src={process.env.PUBLIC_URL + '/assets/images/image-02.png'} alt=""  /> 
									<p>House Cleaning</p>
								</div>
							</div> */}

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

export default PopularCategory
