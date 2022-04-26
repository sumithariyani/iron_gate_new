import React,{ useEffect,useState }  from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FaqList() {

  
const [get_info, setGet_info] = useState([]);
   
const get_cat = async () =>{

  const getData = async (formDataa) => 
              { 
                let formData = new FormData();
                let name = 'a250bcr552s';  
              
              formData.append("token",name );
              formData.append("category_id",1 );

                const options = { headers:{ "Content-Type": "multipart/form-data",
                     "Accept": "application/json","type": "formData"}};
                   console.log(formData); 
                try{
                  let response = await axios.post('/iron_gate/admin/api/get_faqs',formData,options);
                
                  return   response.data;
                } catch(err){ console.error(err); toast.error('some errror'); return false;  }
             } 
             
             
             
            
             let res = await getData({token:'a250bcr552s'}); 
               console.log(res); 
               
             if(res.status){
               setGet_info(res.data);
             //  setGet_infoDtl(<div dangerouslySetInnerHTML={ { __html: res.data.page_detail}} />);
             }else{
                 toast.error(res.message);
             }
            }

            useEffect(() => {
              get_cat();
            },[]);    
     
       console.log(get_info);     

     const changeHtml = (input)=>{
        return <div dangerouslySetInnerHTML={ { __html: input}} />
     }

          


return (
<>
 <div className="row">
     <div className='col-lg-12'>
               <div className="faq__wrapper faq_style wow fadeInUp" data-wow-delay=".3s" >
                        <div className="accordion" id="accordionExample">
                        {(get_info.length >0)? get_info.map((item,index)=>{
                         
                           return<div key = {index}  className="accordion-item">
                             <h2 className="accordion-header" id={"heading"+index}>
                               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target= {"#collapse"+index}  aria-expanded="true" aria-controls="collapseOne">
                                  {changeHtml(item.question)}
                               </button>
                             </h2>
                             <div id={"collapse"+index} className="accordion-collapse collapse show" aria-labelledby={"heading"+index} data-bs-parent="#accordionExample">
                               <div className="accordion-body">
                               {changeHtml(item.answer)} </div>
                             </div>
                           </div> }) :''}
  
                         </div>
                     </div>
                     </div>
               </div>
</>
);
}

export default FaqList;
