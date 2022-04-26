import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function PaymentList(){

    const [get_payment, setGet_payment] = useState([]);
    const [get_payment_history, setGet_payment_history] = useState([]);
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
                        let response = await axios.post('/iron_gate/admin/api/get_payment_history',formData,options);
                        // console.log(response);
                        return   response.data;
                      } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                   }  
                  
                   let res = await getData2({token:'a250bcr552s'}); 
                
                   if(res.status){
    // console.log(res.data);
                    setGet_payment(res.data);
                    setGet_payment_history(res.data.payment_history);
    
                   }else{
                       toast.error(res.message);
                   }
                  }
      
                  useEffect(() => {
                    get_riv();
                  },[]); 
                //   console.log(get_payment);
                //   console.log(get_payment_history[0].order_id);
    
    return(
        <>
         <div className="row justify-content-center">
                  <div className="col-lg-10">
                 <ul>
                 {(get_payment_history.length >0)? get_payment_history.map((item,index)=>{  
                     return <li  key={index} className='list-total'>
                         <h5> <span>{index+1}. </span> Kitchen Cleaning</h5>
                         <h5>{item.final_total}</h5>
                     </li>;
                }):'' }
                
                     {/* <li  className='list-total'>
                         <h5> <span>2. </span>Carpet Cleaning</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>3. </span>Car Dry Clean</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>3. </span>Appliance Repai</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>5. </span>Vehicle Service</h5>
                         <h5>₹300</h5>
                     </li> */}


                     <li  className='total-payment'>
                         <h5>TOTAL</h5>
                         <h5>{get_payment.total_payment}</h5>
                     </li>
                     <li  className='button-payment text-end mt-20'>
                        <div className='d-inline-flex'>
                        {/* <Link to='#' className='btn  w-btn w-btn-white mr-20'>Edit Service</Link>
                        <Link to='#' className='btn btnsubmit w-btn'>Pay Now</Link> */}
                        </div>
                     </li>
                 </ul>
                  </div>
                  </div>
        </>
);
}

export default PaymentList;