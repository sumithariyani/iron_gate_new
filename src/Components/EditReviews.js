import React, { useState,useEffect } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';



function EditReviews(props){
    // console.log(props.review_id);
    let reviw_id = props.review_id
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [stars, setStars] = useState(0);
    const [review, setReview] = useState('');
    
    const [edit_review, setEdit_review] = useState([]);

    const get_review = async () => {
  
      const getreview = async (formDataa) => {
        let formData = new FormData();
        let name = 'a250bcr552s'
        let user_id = localStorage.getItem('user_id');
        formData.append("token", name);
        formData.append("user_id", user_id);
        formData.append("rating", stars);
        formData.append("review_id", reviw_id);
        formData.append("review", review);
  
        const options = {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "type": "formData"
          }
        };
  
        try {
          let response = await axios.post('/iron_gate/admin/api/edit_review', formData, options);
          
          if(response.data.status){
              alert(response.data.message);
              window.location.href='your-reviews';
            }else{
                alert(response.data.message);
          }
          
          return response.data;
        //   setEdit_review(response.data);
        } catch (err) { //console.error(err); toast.error('some errror'); return false; 
    }
      }
  
      let res = await getreview({ token: 'a250bcr552s' });
  
    //   if (res.status) {
  
    //     setEdit_review(res.data);
  
    //   } else {
    //     toast.error(res.message);
    //   }
    }
  
    // useEffect(() => {
    //     get_review();
    // }, []);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setStars(newRating);
      };
    

return(

    <>
     <Link to='#' onClick={onOpenModal}><i className="fal fa-edit"></i></Link>

      <Modal  open={open} onClose={onCloseModal} center> 
      <div className='modal_haff'>
      <h1 className="previous_title">
         <img className="mr-10" src="/reactweb/assets/images//reviews.jpg" alt="reviews icon" style={{maxWidth:'40px'}}/> Your Reviews</h1>
    <div className='row'>
        <div className='col-lg-12'>
            {/* <form> */}
                <div className='d-flex rating_modal mb-20 mt-20'>
                {/* <input type="text" className='' placeholder='Headline' /> */}
                <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={37}
                            isHalf={true}
                            emptyIcon={<i className="fas fa-star"></i>}
                            halfIcon={<i className="fas fa-star-half-alt"></i>}
                            fullIcon={<i className="fas fa-star"></i>}
                            activeColor="#ffd700">
                    </ReactStars>
                    </div>
                   
                    <textarea placeholder='Describe your experience(optional)' value={review} onChange={(e)=>setReview(e.target.value)}  name='' id='' rows='5'></textarea>
                    <div  className='button-payment text-end mt-20'>
                        <div className='d-inline-flex'>
                        <button type='button' className='btn  w-btn w-btn-white mr-20'>Edit</button>
                        <button type='submit' onClick={get_review} className='btn btnsubmit w-btn'>Post</button>
                        </div>
                     </div>
            {/* </form> */}
            </div>
        </div>
    </div>

      </Modal>
    </>
);

}

export default EditReviews;