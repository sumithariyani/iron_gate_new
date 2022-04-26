import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function RecentBlogs() {


   const [get_category, setGet_category] = useState([]);


   const get_cat = async () => {

      let org_code = localStorage.getItem('org_code');

      // const options = { headers:{"Content-type": "application/multipart/form-data" }};

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
         console.log(formData);
         try {
            let response = await axios.post('/iron_gate/admin/api/get_related_blog', formData, options);
            return response.data;
         } catch (err) { console.error(err); toast.error('some errror'); return false; }
      }

      let res = await getData({ token: 'a250bcr552s' });

      if (res.status) {
         console.log(res);
         setGet_category(res);
      } else {
         toast.error(res.message);
      }
   }
   useEffect(() => {
      get_cat();
   }, []);
   let dataarray = get_category.data;
   // if(get_category.status==true){
   console.log(dataarray);


   return (
      <>

         <section className="blog__area section_card recnt_blogs">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 section__title-5-p mb-15">Recent Blogs</h2>

                     </div>
                  </div>
               </div>
               <div className="row" style={{ justifyContent: 'center' }} >

                  {(dataarray ?? []).map((dataarray) => {
                     return <Link to={{
                        pathname: "/blog-detail",
                        state: {
                           blog_id: dataarray.blog_id,
                        }
                     }} >
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                           <div className="blog__item-5 mb-30">
                              <div className="blog__thumb-5 fix w-img">
                                 <a href="#">
                                    <img src={dataarray.image} alt="" />
                                 </a>
                              </div>
                              <div className="blog__content-5">
                                 <h3 className="blog__title-5"><a href="#">{dataarray.title}</a></h3>
                                 {/* <p style={{ justifyContent:'center', overflow: 'hidden' }} >{dataarray.description}</p> */}
                                 <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', lineClamp: 2, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', }} >{dataarray.description}</p>
                              </div>
                           </div>
                        </div> </Link>;
                  })}


                  {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://keanc.netlify.app/assets/img/blog-4.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                         
                           <h3 className="blog__title-5"><a href="#">Heading 3</a></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  {/* <a href="#" className="link-btn">View More <i className="arrow_right"></i> </a> */}
                  {/* </div>
                     </div>
                  </div> */}
                  {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://keanc.netlify.app/assets/img/blog-4.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                         
                           <h3 className="blog__title-5"><a href="#">Heading 3</a></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  {/* <a href="#" className="link-btn">View More <i className="arrow_right"></i> </a> */}
                  {/* </div>
                     </div>
                  </div> */}

               </div>
            </div>
         </section>

      </>
   );
}

export default RecentBlogs
