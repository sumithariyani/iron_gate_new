import React,{useRef,useState} from "react" ;
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function ReviewAdd() {

  const [stars, setStars] = useState(0);


const ratingChanged = (newRating) => {
 
  setStars(newRating);

  // console.log('jk reading ==');
  console.log(newRating);
};
const savedata = async(e)=>{
  e.preventDefault();
  let formData = new FormData(e.target);
  formData.append('rating',stars);
  const options = { headers:{ "Content-Type": "multipart/form-data",
  "Accept": "application/json",
  "type": "formData"}};
  try{
    let response = await axios.post('/iron_gate/admin/api/add_review',formData, options );
 
   console.log(response.data);
  if(response.data.status === true)
  {
    toast.success(response.data.message); 
    document.getElementById("FormID").reset();
    
  }else{
    toast.error(response.data.message);
  }
  return false;
  } catch(err){ 
       toast.error('something went wrong please try again'); return false;  }


return false; 

};


    return (
        <>
        <form  onSubmit={e =>{savedata(e)}} id ='FormID'  >
            <div className="row justify-content-center">
                <div className="col-lg-8">
                 <div className='review_add mt-20'>
                    <div className="mb-20">
                     <h5 className="mr-10">What is your rating?</h5>
                     <ReactStars
                            count={5}
                         onChange={ratingChanged}
                            size={30}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fas fa-star-half-alt"></i>}
                            fullIcon={<i className="far fa-star"></i>}
                            name = 'rating'

                           

                            activeColor="#ffd700">
                              
                    </ReactStars>
                              </div>
                            {/* <input type="email" className='form-control' placeholder='Enter your email' style={{border:'none', height:'45px'}} /> */}
                           <input type='hidden' name =  'package_id' value = {localStorage.getItem('pack_id')} /> 
                           <input type='hidden' name =  'user_id' value = {localStorage.getItem('user_id')} /> 
                           <input type='hidden' name =  'token' value = {'a250bcr552s'} /> 
                            
                            
                              <textarea name="review" className="textarea textarea1 mt-20" rows='4' placeholder="Your Review"></textarea>
                              <div className="text-center">
                              <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay" style={{width : '50%'}}>Submit</button>
                              </div>
                             
                    </div>
                    </div>
                    </div>

                   

                    </form>
                    <ToastContainer  position="top-right"  />      
        </>
);
}

export default ReviewAdd