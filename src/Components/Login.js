import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
// import ReactSession from 'react-client-session';
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [get_category, setGet_category] = useState([]);
  const get_cat = async () => {
    // let org_code = localStorage.getItem('org_code');

    // const options = { headers:{"Content-type": "application/multipart/form-data" }};

    const getData = async () => {
      let formData = new FormData();
      let token = 'a250bcr552s'
      formData.append("token", token);
      formData.append("email", email.trim());
      formData.append("password", password.trim());
      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        }
      };
      console.log(formData);
      try {
        let response = await axios.post('/iron_gate/admin/api/login', formData, options);
        console.log(response.data);
        if (response.data.status == true) {
          let user_data = response.data.data
          console.log(user_data.user_id);
          localStorage.setItem('user_id', user_data.user_id);
          localStorage.setItem('user_contact', user_data.user_contact);
          localStorage.setItem('user_email', user_data.user_email);
          localStorage.setItem('user_name', user_data.user_name);
          window.location.href = 'profile';
        }
        //  ccconsole.log(test);
        return response.data;
        // sessionStorage.setItem("pageView", response.data);
      } catch (err) { console.error(err); toast.error('some errror'); return false; }
    }
    let res = await getData();
    if (res.status) {
      // setGet_category(res);
      // alert(res.message);
      toast(res.message)
    } else {
      toast.error(res.message);
    }
  }
  return (
    <>
      <section className="pb-45 pt-45 p-relative border-style userForm">
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-9 cm-lg-9'>
              {/* <form action='/profile'> */}
              <div className='card_book'>
                <div className='header-small'>
                  <h1>Login</h1>
                </div>
                <div className='row justify-content-center mt-80 mb-40'>
                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-12 mt-30'>
                        <div className='sign__input'>
                          <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='from-control' placeholder='Enter your Email' />
                        </div>
                      </div>
                      <div className='col-lg-12 mt-30'>
                        <div className='sign__input'>
                          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='from-control' placeholder='Enter your Password' />
                        </div>
                      </div>


                      <div className='col-lg-12 mt-50 text-center'>
                        {/* <Link to='/profile'  className='w-btn w-btn-blue w-btn-blue-header btnpay'>Login</Link> */}
                        <button type="submit" onClick={get_cat} className="w-btn w-btn-blue w-btn-blue-header btnpay">Login</button>
                        <div className='text-center'>
                          <Link to='/forgotpassword' className='title_user mt-30'>Forgot Password ?</Link>
                        </div>
                      </div>


                      <div className='col-lg-12 mt-80 text-center'>
                        <div className='text-center mb-30'>
                          <Link to='/signup' className='title_user mb-30'>New User ?</Link>
                        </div>
                        <Link className="w-btn w-btn-blue w-btn-blue-header btnpay" to='/signup'>Sign Up</Link>
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

export default Login;
