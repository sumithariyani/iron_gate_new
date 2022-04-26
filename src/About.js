import React,  { useEffect,useState } from 'react';
import Subscribe from './Components/Subscribe';
import RecentBlogs from './Components/RecentBlogs';
import Download_app from './Components/Download_app';
import OurTeam from './Components/OurTeam';
import Counter from './Components/Counter';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function About() {


   const [get_info, setGet_info] = useState();

      const [get_infoDtl, setGet_infoDtl] = useState();
   
   const get_cat = async () =>{
   
     let org_code = localStorage.getItem('org_code');
     
    // const options = { headers:{"Content-type": "application/multipart/form-data" }};
      
     const getData = async (formDataa) => 
                 { 
                   let formData = new FormData();
                   let name = 'a250bcr552s';  
                   
   
                 formData.append("token",name );
   
                   const options = { headers:{ "Content-Type": "multipart/form-data",
                        "Accept": "application/json","type": "formData"}};
                      console.log(formData); 
                   try{
                     let response = await axios.post('/iron_gate/admin/api/get_about_us_content',formData,options);
                   
                     return   response.data;
                   } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                }
                let res = await getData({token:'a250bcr552s'}); 
                  console.log(res); 
                if(res.status){
                  setGet_info(res.data.page_title);
                  setGet_infoDtl(<div dangerouslySetInnerHTML={ { __html: res.data.page_detail}} />);
                }else{
                    toast.error(res.message);
                }
               }
   
               useEffect(() => {
                 get_cat();
               },[]);    
               
                 
             console.log(get_info);      

  return (
    <>
  
<main>
     
<section className="hero__banner p-relative d-flex align-items-center"> 
  <div className="container">
     <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
           <div className="hero__content pr-80 text-center">
            <h1 className='text-white'>About us</h1>
           </div>
        </div>
        
     </div>
  </div>
</section>

     <section className="about__area pb-45 pt-45 p-relative">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-7 order-last">
                     <div className="about__wrapper about__wrapper-2 mb-20">
                        <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title">{get_info}</h2>
                         
                        {get_infoDtl }
                           </div>
                     </div>
                  </div>
                  <div className="col-lg-5 wow fadeInRight order-lg-first text-center" data-wow-delay=".7s">
                     <div className="about__thumb-wrapper-2 p-relative m-img">
                        <img src={process.env.PUBLIC_URL + '/assets/images/service1.png'} alt="" /> 
                     </div>
                  </div>
               </div>
            </div>
      </section>  

 
   <Download_app />

   <OurTeam />
   
   <Counter />

   <div className="callus"><h2>Call us 0123456789</h2></div>    


</main>

    </>
  );
}

export default About;