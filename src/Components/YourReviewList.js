import React,  { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import EditReviews from "./EditReviews";

function YourReviewList() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [get_reviews, setGet_reviews] = useState([]);

const get_riv = async () =>{
    
    const getData2 = async (formDataa) => 
                { 
                let formData = new FormData();
                 let name = 'a250bcr552s'   
                 let user_id = localStorage.getItem('user_id');
                formData.append("token",name );
                formData.append("user_id",user_id );
                // formData.append("start_date",startDate.toISOString().split('T')[0] );
                // formData.append("end_date",endDate.toISOString().split('T')[0]);
                  const options = { headers:{ "Content-Type": "multipart/form-data",
                  "Accept": "application/json",
                  "type": "formData"}};
                  try{
                    let response = await axios.post('/iron_gate/admin/api/get_user_review',formData,options);
                    // console.log(response);
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

// console.log();

return (
    <>
<div className='row'>
  <div className='col-lg-12'>
    <form>
      <div className='filter'>
        <div className='mr-20'>
        <label className='d-block'>From Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      </div>
      <div className='mr-20'>
      <label className='d-block'>To Date</label>
       <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      </div>
      <div>
         <label className='d-block'>.</label>
        <button type="submit" className="btn btnsubmit w-btn">Submit</button>
        </div>
      </div>
    
    </form>
  </div>
</div>

<div className='row'>
<div className='col-lg-12'>
    <div className='previous_list'>
    <ul>

    {(get_reviews.length >0)? get_reviews.map((item,index)=>{    
  return  <li  key={index}  className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>{item.package_name}</h4>
        <h6>{item.created_at}</h6>
      </div>
      <div className='ratings'>
        <i className={(item.rating>=1) ? " fas fa-star active" :'fas fa-star'}></i>
        <i className={(item.rating>=2) ? " fas fa-star active" :'fas fa-star'}></i>
        <i className={(item.rating>=3) ? " fas fa-star active" :'fas fa-star'}></i>
        <i className={(item.rating>=4) ? " fas fa-star active" :'fas fa-star'}></i>
        <i className={(item.rating>=5) ? " fas fa-star active" :'fas fa-star'}></i>
      
      {/* <li className= {(item.rating>=1) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=2) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=3) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=4) ? "active" :''} ><i className="icon_star"></i></li>
                  <li className= {(item.rating>=5) ? "active" :''} ><i className="icon_star"></i></li> */}
       <div className='editreview'>
      <EditReviews review_id={item.review_id} />
      </div>
      </div>
     
    </div>   
   </li>;
 }):'' }

   {/* <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Kitchen Cleanin</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Car Cleaning</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Ac Repair</h4>
        <h6>12:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Sofa Cleaning</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Car Cleanin</h4>
        <h6>12:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li> */}


   </ul>
    </div>
</div>
</div>

</>
);
}
export default YourReviewList;