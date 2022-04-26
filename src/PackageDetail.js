import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Package_detail_slider from './Components/Package_detail_slider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReviewUser from './Components/ReviewUser';
import ReviewAdd from './Components/ReviewAdd';
import PackageFaq from './Components/PackageFaq';
import OtherPackageCat from './Components/OtherPackageCat';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const ratingChanged = (newRating) => {
  console.log(newRating);
};


function PackageDetail() {

  useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );



      const [get_pack, setGet_pack] = useState([]);

      const get_cat = async () =>{
          
          const getData = async (formDataa) => 
                      { 
                      let formData = new FormData();
                       let name = 'a250bcr552s'   
                      formData.append("token",name );
                      
                      let pack_id = localStorage.getItem('pack_id');
                      formData.append("package_id",pack_id );
                          
                        const options = { headers:{ "Content-Type": "multipart/form-data",
                        "Accept": "application/json",
                        "type": "formData"}};
                        
                        try{
                          let response = await axios.post('/iron_gate/admin/api/get_package_detail',formData,options);
                         
                          return   response.data;
                        } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                     }  
                    
                     let res = await getData({token:'a250bcr552s'}); 
                  
                     if(res.status){
  
                      setGet_pack(res.data);
  
                     }else{
                         toast.error(res.message);
                     }
                    }
        
                    useEffect(() => {
                      get_cat();
                    },[]); 
   
    console.log(get_pack);
      
    const changeHtml = (input)=>{
               return <div dangerouslySetInnerHTML={ { __html: input}} />
      }
      let props = {
        package_id: get_pack.package_id,
        package_title: get_pack.package_title,
        packdtl:get_pack.description,
        total_review : get_pack.total_review,
        package_image : get_pack.package_image
        }
 
    return (
       <>
       <Package_detail_slider {...props}  />
       <section className="about__area pb-45 pt-45 p-relative border-style">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-12">
                  <Tabs>
                     <TabList>
                    <Tab>Reviews</Tab>
                    <Tab>Add a Review</Tab>
                    <Tab>FAQ</Tab>
                    </TabList>

                    <TabPanel>
                   <ReviewUser  />
                    </TabPanel>

                    <TabPanel>
                    <ReviewAdd />

                    </TabPanel>
                    <TabPanel>
                   <PackageFaq />
                    </TabPanel>
                </Tabs>
                   </div>
                
               </div>
            </div>
</section>  

{/* <OtherPackageCat /> */}
<ToastContainer  position="top-right"  />     
    </>
  );
}

export default PackageDetail;