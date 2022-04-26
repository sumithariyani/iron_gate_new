import React, { Component } from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SendMessage() {
  const saveinfo = async (e) =>{
    e.preventDefault();
      
       const Formvlaues = new FormData(e.target);
      // let Formvlaues = Object.fromEntries(data.entries());  
                      //  console.log(Formvlaues);
     

       try{
        let response = await axios.post('/iron_gate/admin/api/add_contact_us',Formvlaues,{ headers:{"Content-type": "application/json" }});
     
        console.log(response.data);
      if(response.data.status === true)
      {
        toast.success(response.data.message); 
        document.getElementById("mForm").reset();
      }else{
        toast.error(response.data.message);
      }
      
      } catch(err){ 
           toast.error('something went wrong please try again'); return false;  }
  
    return false; 


    }
    return (
       <>
      
       <div className='card_book'>
              <div className='header-small'>
                <h1 className='text-inherit'>Send a message</h1>
              </div>
              <form onSubmit={(e)=>{saveinfo(e);}}  id = 'mForm'  >
              <div className='row justify-content-center mt-40 mb-10'>
                  <div className='col-lg-10'>                
              <div className='row'>
              <div className='col-lg-12 mt-20'>
                  <div className='sign__input'>
                    <input required type='text' name='name' className='from-control' placeholder='Enter your Name' />
                  </div>
                </div>
                <div className='col-lg-12 mt-20'>
                  <div className='sign__input'>
                    <input required type='email' name='email' className='from-control' placeholder='Enter your Email' />
                  </div>
                  <input required type='hidden' name = 'token' value={'a250bcr552s'} />
                </div>
                <div className='col-lg-12 mt-20'>
                  <div className='sign__input'>
                    <input  required type='number' name='phone' className='from-control' placeholder='Enter your Phone No.' />
                  </div>
                </div>
                <div className='col-lg-12 mt-20'>
                  <textarea  required name='message' className='textarea textarea1' rows='4' placeholder='Enter Your Message'></textarea>
                </div>

                
                <div className='col-lg-12 mt-30 text-center'>
                  <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay mb-0" >Send</button>
                </div>

              </div>
              </div>
              </div>
              </form>

            </div>
            <ToastContainer  position="top-right"  />   
       </>
  );
}

export default SendMessage;