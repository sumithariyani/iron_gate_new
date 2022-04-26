import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ResetPassword() {
  const [email, setEmail] = useState("");

  const get_cat = async (e) => {
    // e.preventDefault();
    // let org_code = localStorage.getItem('org_code');

    // const options = { headers:{"Content-type": "application/multipart/form-data" }};

    const getData = async () => {
      let formData = new FormData();
      let token = 'a250bcr552s'
      formData.append("token", token);
      formData.append("email", email.trim());

      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        }
      };
      console.log(formData);
      try {
        let response = await axios.post('/iron_gate/admin/api/forgot_password', formData, options);
        console.log(response.data);
        if (response.data.status == true) {
          let user_data = response.data
          // console.log(user_data);
          // localStorage.setItem('user_id', user_data.user_id);
          // localStorage.setItem('user_contact', user_data.user_contact);
          // localStorage.setItem('user_email', user_data.user_email);
          // localStorage.setItem('user_name', user_data.user_name);
          // window.location.href = 'profile';
        }
        //  ccconsole.log(test);
        return response.data;
        // sessionStorage.setItem("pageView", response.data);
      } catch (err) { console.error(err); toast.error('some errror'); return false; }
    }
    let res = await getData();
    if (res.status) {
      // setGet_category(res);
      alert(res.message);
      window.location.href = 'changepassword';
      toast(res.message)
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
  return (
    <>
      <section className="pb-45 pt-45 p-relative border-style userForm">
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-9 cm-lg-9'>
              {/* <form action='/changepassword'> */}
              <div className='card_book'>
                <div className='header-small'>
                  <h1>Forgot Your Password</h1>
                </div>
                <div className='row justify-content-center mt-80 mb-40'>
                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-12 mt-30'>
                        <div className='sign__input'>
                          <h4 className='mb-3' style={{ fontWeight: '400' }}>Please  enter the email address you'd like your password reset <br /> information sent to </h4>
                          <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='from-control' placeholder='Enter your Email Address!' />
                        </div>
                      </div>
                      <div className='col-lg-12 mt-50 text-center'>
                        <button type="submit" onClick={get_cat} className="w-btn w-btn-blue w-btn-blue-header btnpay" href="">Continue</button>
                        <div className='text-center'>
                          <Link to='/login' className='title_user mt-30 backto'>Back to login</Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;