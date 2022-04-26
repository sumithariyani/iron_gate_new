import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Related_blogs from './Components/Related_blogs';
import Download_app from './Components/Download_app';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Blogs(props) {
   let blog_id = props.location.state.blog_id
   const [get_category, setGet_category] = useState([]);

   const get_cat = async () => {

      let org_code = localStorage.getItem('org_code');

      // const options = { headers:{"Content-type": "application/multipart/form-data" }};

      const getData = async (formDataa) => {
         let formData = new FormData();
         let name = 'a250bcr552s'
         formData.append("token", name);
         formData.append("blog_id", blog_id);
         const options = {
            headers: {
               "Content-Type": "multipart/form-data",
               "Accept": "application/json",
               "type": "formData"
            }
         };
         // console.log(formData);
         try {
            let response = await axios.post('/iron_gate/admin/api/get_blog_detail', formData, options);
            return response.data;
         } catch (err) { console.error(err); toast.error('some errror'); return false; }
      }

      let res = await getData({ token: 'a250bcr552s' });

      if (res.status) {
         // console.log(res);
         setGet_category(res.data);
      } else {
         toast.error(res.message);
      }
   }
   useEffect(() => {
      get_cat();
   }, []);
   // console.log(get_category);


   return (
      <>
         <main>
            <section className="hero__banner p-relative d-flex align-items-center">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-12 mt-70">
                        <div className="hero__content pr-80 text-center">
                           <h1 className='text-white'>Blog</h1>
                        </div>
                     </div>

                  </div>
               </div>
            </section>


            <section className="about__area pb-45 pt-45 p-relative border-style">
               <div className="container">
                  <div className="row ">
                     <div className="col-lg-7 order-last">
                        <div className="about__wrapper about__wrapper-2 mb-20">
                           <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                              <h2 className="section__title">{get_category.title}</h2>
                              <p>{get_category.description}</p>
                              {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Lorem Ipsum is not simply random text. It has roots in a piece of classical  making it over 2000 years old. Richard McClintock, </p> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5 wow fadeInRight order-lg-first text-center" data-wow-delay=".7s">
                        <div className="about__thumb-wrapper-2 p-relative m-img">
                           <img src={get_category.image} alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <Download_app />

            <Related_blogs />

         </main>

      </>
   );
}

export default Blogs;