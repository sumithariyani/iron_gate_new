import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Profile() {

    const [get_category, setGet_category] = useState([]);

    const get_cat = async () => {

        const getData = async (formDataa) => {
            let formData = new FormData();
            let name = 'a250bcr552s'
            let user_id = localStorage.getItem('user_id');
            formData.append("token", name);
            formData.append("user_id", user_id);

            const options = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "type": "formData"
                }
            };

            try {
                let response = await axios.post('/iron_gate/admin/api/get_profile', formData, options);

                return response.data;
            } catch (err) { console.error(err); toast.error('some errror'); return false; }
        }

        let res = await getData({ token: 'a250bcr552s' });

        if (res.status===true) {
            console.log(res);
            setGet_category(res.data);
        } else {
            toast.error(res.message);
        }
    }
  
    useEffect(() => {

        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
            body.classList.remove("body_black");
        }
    });
    useEffect(() => {
        get_cat();
    }, []);

    // console.log(get_category);
    return (
        <>


            <section className="border-style pad-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className='userImg'>
                                <div className='imgbox'>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/profile.png'} />
                                </div>
                                <Link to='./update-profile'>
                                <span className='titleicon mr-20'> <i className="fal fa-edit"></i></span>
                                </Link>
                                <div className=''>
                                    <h4>{get_category.name}</h4>
                                    <div className="certified"><i className="fad fa-badge-check"></i> certified user</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='row mt-90'>
                        <div className='col-lg-4 text-center'>
                            <Link to='/previous-booking' className='usercard'>
                                <h4>05</h4>
                                <h5>Previous Booking</h5>
                            </Link>
                        </div>
                        <div className='col-lg-4 text-center'>
                            <Link to='/total-payment' className='usercard'>
                                <h4>AED 104</h4>
                                <h5>Total Payment</h5>
                            </Link>
                        </div>
                        <div className='col-lg-4 text-center'>
                            <Link to='/your-reviews' className='usercard'>
                                <h4>11</h4>
                                <h5>Your Review</h5>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );

}

export default Profile;