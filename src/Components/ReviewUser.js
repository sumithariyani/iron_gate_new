import React,{useState,useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';




function ReviewUser() {
  
const [get_reviews, setGet_reviews] = useState([]);

const get_riv = async () =>{
    
    const getData2 = async (formDataa) => 
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
                    let response = await axios.post('/iron_gate/admin/api/get_review',formData,options);
                    return   response.data;
                  } catch(err){ console.error(err); toast.error('some errror'); return false;  }
               }  
              
               let res = await getData2({token:'a250bcr552s'}); 
            
               if(res.status){

                setGet_reviews(res.data);

               }else{
                   toast.error(res.message);
               }
              }
  
              useEffect(() => {
                get_riv();
              },[]); 


const changeHtml = (input)=>{
       return <div dangerouslySetInnerHTML={ { __html: input}} />
}
return (
<>
  <div className="review-style wow fadeInRight" data-wow-delay=".1s">
    <div className="row">
      <div className="col-lg-12">
      {(get_reviews.length >0)? get_reviews.map((item,index)=>{    
        return<div className="review-list">
          <div className="userImg">
            <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} />
          </div>
          <div>
            <div className="reviewUser">



              <h3>{ item.user_name}</h3>

              
              <div className="rating">
                <ul>
                  <li className= {(item.rating>=1) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=2) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=3) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=4) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=5) ? "active" :''} ><i className="icon_star"></i></li>
                 
                </ul>
              </div>
            </div>
            <div className="commment">
            { changeHtml(item.review)}
              <div className='certified'>
                <i className="fad fa-badge-check"></i> certified user
              </div>

            </div>
          </div>

        </div>

}):''}
      </div>
    </div>
  </div>
</>
)};

export default ReviewUser;
