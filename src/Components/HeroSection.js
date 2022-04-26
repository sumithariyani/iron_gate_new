import React,{ useEffect,useState }  from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useHistory } from 'react-router-dom';

const options = [
   { value: 'Abu Dhabi', label: 'Abu Dhabi' },
   { value: 'Sharjah', label: 'Sharjah' },
   { value: 'AfghanisUmm Al Quwaintan', label: 'Umm Al Quwain' },
   { value: 'Dubai', label: 'Dubai' },
   { value: 'Fujairah', label: 'Fujairah' }
 ]

function HeroSection() {

   const history = useHistory();
   const [pack_data, setPack_data] = useState([]);
   const [pack_name, setPack_name] = useState([]);
const fun = async(e)=>{
   
   let name = e.target.value;
   setPack_name(name);
   if(name == ''){ return false;}
   let formData = new FormData();
            formData.append("token",'a250bcr552s' );
            formData.append("search_title", name );
               const options = { headers:{ "Content-Type": "multipart/form-data",
                  "Accept": "application/json","type": "formData"}};
                  console.log(formData); 
               try{
               let response = await axios.post('/iron_gate/admin/api/search_package',formData,options);
                 setPack_data(response.data.data); 
               } catch(err){ console.error(err); toast.error('some errror'); return false;  }
            } 

            // console.log(pack_data); 
           
           
const r_fun = async(id)=>{
        
         localStorage.setItem('pack_id', id);
         history.push('/package-detail'); 
       
}
    return (
 <div className="App">

<section className="hero__area hero__height p-relative d-flex align-items-center"> 
  
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-12 mt-70">
            <div className="hero__content pr-80 text-center">
               <h2 className="hero__title wow fadeInUp" data-wow-delay=".3s">Home services, on demand.</h2>
               {/* <p className="wow fadeInUp" data-wow-delay=".5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> */}
               <div className="hero__search wow fadeInUp " data-wow-delay=".7s">
                  <form action="#" className="fromstyle">
                   <span className="location_icon">
                   <i className="fad fa-location"></i>
                     {/* <input type="search" placeholder="Your Location" className='w-200' /> */}
                    
                     <Select options={options} className='w-200' />
                   
                    </span>
                    <div className="d-inline">
                     <div className='join-from'>
                     <input type="text" onChange={e=>{fun(e)}} placeholder="Search for services" />
                       <button type="submit" className="w-btn w-btn-2"><i className="far fa-search"></i></button>
                     </div>
                    <div className='filter_service'>
                       <ol>
                         {(pack_data.length >0) && pack_name!='' ? pack_data.map((item,index)=>{
                              return<li key={index} onClick = {e=> {r_fun(item.package_id)}}>{item.package_title}</li>
                                      }) : ''}
                           </ol>
                       </div>    

                     <div className="hero__search-info">
                     <span><a href="#"> Carpet Cleaning</a> </span>
                     <span><a href="#">Window Cleaning, House Cleaning</a> </span>

                  </div>
                     </div>
                  </form>
               
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  
      </div>
    );
  }

export default HeroSection
