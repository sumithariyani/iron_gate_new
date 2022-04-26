import React,  { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function PreviousBookingList() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [get_pack, setGet_pack] = useState([]);
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
                      let response = await axios.post('/iron_gate/admin/api/get_orders',formData,options);
                      // console.log(response);
                      return   response.data;
                    } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                 }  
                
                 let res = await getData2({token:'a250bcr552s'}); 
              
                 if(res.status){
  console.log(res.data);
                    setGet_pack(res.data);
             
                 }else{
                     toast.error(res.message);
                 }
                }
    
                useEffect(() => {
                  get_riv();
                },[]); 
              //   console.log(get_payment);

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
    {(get_pack.length >0)? get_pack.map((item,index)=>{  
   return <li key={index} className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>{item.package_name}</h4>
        <h6>{item.date}</h6>
      </div>
      <div className=''>
         <Link to='#' className='w-btn w-btn-3 w-btn-1'>{item.final_total}</Link> 
      </div>
    </div>   
   </li> ;
    }):''}
   {/* <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Kitchen Cleanin</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className=''>
         <Link to='#' className='w-btn w-btn-3 w-btn-1'>COMPLETED</Link> 
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Car Cleaning</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className=''>
         <Link to='#' className='w-btn w-btn-3 w-btn-1'>COMPLETED</Link> 
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Ac Repair</h4>
        <h6>12:11PM 01APR202</h6>
      </div>
      <div className=''>
         <Link to='#' className='w-btn actbn'>ACTIVE</Link> 
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Sofa Cleaning</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className=''>
         <Link to='#' className='w-btn w-btn-3 w-btn-1'>COMPLETED</Link> 
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Car Cleanin</h4>
        <h6>12:11PM 01APR202</h6>
      </div>
      <div className=''>
         <Link to='#' className='w-btn actbn'>ACTIVE</Link> 
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
export default PreviousBookingList;