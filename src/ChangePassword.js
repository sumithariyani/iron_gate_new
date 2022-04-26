import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ChangePassword() {

  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("")
  const [newpassword, setNewpassword] = useState("")
  const [newpasswordconfirm, setNewpasswordconfirm] = useState("")
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const get_cat = async () => {
    // let org_code = localStorage.getItem('org_code');

    // const options = { headers:{"Content-type": "application/multipart/form-data" }};

    const getData = async () => {
      let formData = new FormData();
      let token = 'a250bcr552s'
      let user_id = localStorage.getItem('user_id')
      formData.append("token", token);
      formData.append("user_id", user_id);
      formData.append("old_password", password);
      formData.append("new_password", newpassword);
      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        }
      };
      console.log(formData);
      try {
        let response = await axios.post('/iron_gate/admin/api/change_password', formData, options);
        console.log(response.data);
        if (response.data.status == true) {
          let user_data = response.data
          // window.location.href = 'profile';
        }
        //  ccconsole.log(test);
        return response.data;
        // sessionStorage.setItem("pageView", response.data);
      } catch (err) { console.error(err); toast.error('some errror'); return false; }
    }
    let res = await getData();
    if (res.status) {
      console.log(res)
      alert(res.message)
      localStorage.clear();
      window.location.href = 'login';
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
              {/* <form action='/login'> */}
              <div className='card_book'>
                <div className='header-small'>
                  <h1>Change Password</h1>
                </div>
                <div className='row justify-content-center mt-80 mb-40'>
                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-12 mt-30'>
                        <div className='sign__input'>
                          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='from-control' placeholder='Enter Old Password' />
                        </div>
                      </div>
                      <div className='col-lg-12 mt-30'>
                        <div className='sign__input'>
                          <input type={passwordShown ? "text" : "password"} name='' value={newpassword} onChange={(e) => setNewpassword(e.target.value)} className='from-control' placeholder='New Password' />
                        </div>
                      </div>
                      <div className='col-lg-12 mt-30'>
                        <div className='sign__input'>
                          <input type={passwordShown ? "text" : "password"} name='' value={newpasswordconfirm} onChange={(e) => setNewpasswordconfirm(e.target.value)} className='from-control' placeholder='Confirm New Password' />
                        </div>
                      </div>

                      <div className='col-lg-12 mt-30'>
                        <div className='showpass'>
                          <label for='showpassword'>
                            <input type='checkbox' onClick={togglePassword} id='showpassword' />
                            <span>Show Password</span>
                          </label>
                        </div>
                      </div>
                      <div className='col-lg-12 mt-40 text-center'>
                        <button type="submit" onClick={get_cat} className="w-btn w-btn-blue w-btn-blue-header btnpay mb-10" href="">Submit</button>
                        {/* <div className='text-center'>
                  <Link to='/login' className='title_user mt-30 backto'>Back to login</Link>
                  </div> */}
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

export default ChangePassword;