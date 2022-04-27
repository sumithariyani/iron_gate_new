import React from "react" ;
import { Link } from "react-router-dom";
import{useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function FeaturedCategory() {

  const [get_category, setGet_category] = useState([]);


const get_cat = async () =>{

  let org_code = localStorage.getItem('org_code');
   
  const getData = async (formDataa) => 
              { 
              let formData = new FormData();
               let name = 'a250bcr552s'   
              formData.append("token",name );
                  
                const options = {headers:{ 'Access-Control-Allow-Origin': '*',
                 "Content-Type": "multipart/form-data",
                 "changeOrigin": true,
                "Accept": "application/json",
                'Referer': 'https://sumithariyani.github.io',
                'referrerPolicy': 'no-referrer-when-downgrade',
                'Access-Control-Allow-Headers': 'Accept',
                "type": "formData"}};
                   console.log(formData); 
                try{
                  let response = await axios.post('https://gorest.co.in/public/v2/users',formData,options);
                  return   response.data;
                } catch(err){ console.error(err); toast.error('some errror'); return false;  }
             }  
            
             let res = await getData({token:'a250bcr552s'}); 
          
             if(res.status){
             setGet_category(res);
             }else{
                 toast.error(res.message);
             }
            }

            useEffect(() => {
              get_cat();
            },[]);  
         let dataarray =  get_category.data;
            // if(get_category.status==true){
              // console.log(dataarray);
            // }
return (
<>
  <section className="blog__area section_card ">

    <div className="container pb-60">
      <div className="row">
        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
          <div className="section__title-wrapper section__title-wrapper-5 text-center mb-0 wow fadeInUp" data-wow-delay=".3s">
            <h2 className="section__title-5 section__title-5-p mb-15">Featured Categories</h2>
            <p className="mb-0">Lorem Ipsum is simply dummy</p>
          </div>
        </div>
      </div>
      <div className="process-items">
        <div className="row justi-style">
 {(dataarray ?? []).map((dataarray)=>{
   return  <> <div className="single-item col-lg-2 col-md-6">
<Link to={{
  pathname: "/packages",
  state: {
    cat_id: dataarray.cat_id,
  }
}} >
<div className="item">
    <div className="thumb">
       <div className="img-thumb">
       {/* <img src={dataarray.cat_image} alt=""   />  */}
       <img src={dataarray.cat_image} alt="" style={{width: '135px'}} /> 
       </div>
       <h5>{dataarray.cat_name}</h5>
    </div>
  </div>
  </Link>
</div>  </>;
 })}
        

     

          {/* <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/cleanig.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/wosh.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/toilet.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/homecleaning.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
            <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/office.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </section>

</>
);
}

export default FeaturedCategory
