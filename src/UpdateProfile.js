import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function UpdateProfile(){

    const [get_category, setGet_category] = useState([]);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [region, setRegion] = useState("")
    const [city, setCity] = useState("")
    const [area, setArea] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [building_name, setBuilding_name] = useState("")
    let user_id = localStorage.getItem('user_id');
    const get_cat = async () => {

        const getData = async (formDataa) => {
            let formData = new FormData();
            let token = 'a250bcr552s'
           
            formData.append("token", token);
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

        if (res.status) {
            console.log(res.data);
            setGet_category(res.data);
            // console.log(get_category);
            setName(res.data.name);
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setCountry(res.data.country);
            setRegion(res.data.region);
            setCity(res.data.city);
            setArea(res.data.area);
            setZipcode(res.data.zipcode);
            setBuilding_name(res.data.building_name);
          

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
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );
      useEffect(() => {
        get_cat();
    }, []);

      
    const save_cat = async () => {
        // let org_code = localStorage.getItem('org_code');
    
        // const options = { headers:{"Content-type": "application/multipart/form-data" }};
    
        const saveData = async () => {
          let formData = new FormData();
          let token = 'a250bcr552s'
          formData.append("token", token);
          formData.append("email", email.trim());
          formData.append("user_id", user_id);
          formData.append("name", name.trim());
          formData.append("phone", phone.trim());
          formData.append("country", country.trim());
          formData.append("region", region.trim());
          formData.append("city", city.trim());
          formData.append("area", area.trim());
          formData.append("zipcode", zipcode.trim());
          formData.append("building_name", building_name.trim());
        
          const options = {
            headers: {
              "Content-Type": "multipart/form-data",
              "Accept": "application/json",
              "type": "formData"
            }
          };
          console.log(formData);
          try {
            let response = await axios.post('/iron_gate/admin/api/edit_profile', formData, options);
            console.log(response.data);
            if (response.data.status == true) {
            
              window.location.href = 'profile';
            }
            //  ccconsole.log(test);
            return response.data;
            // sessionStorage.setItem("pageView", response.data);
          } catch (err) { console.error(err); toast.error('some errror'); return false; }
        }
        let res = await saveData();
        if (res.status) {
          // setGet_category(res);
          // alert(res.message);
          toast(res.message)
        } else {
          toast.error(res.message);
        }
      }
return(
    <>
    <section className='update_profile'>
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-lg-10'>
            {/* <form> */}
            <h3 className='text-center'>Update Profile</h3>
            <div className='userImg mb-20'>
             <div className='imgbox'>
             <img src={process.env.PUBLIC_URL + '/assets/images/profile.png'} />
             </div>
             <div className='userimgs'>
                 <label for='fileID'>
                 <input type='file'  name='fileprofile' id='fileID'  />
                   {/* <span className='titleicon mr-20'> <i className="fal fa-edit"></i></span> */}
                  {/* <span className='titlesmall'> Change Profile Picture </span> */}
             </label>
             </div>          
         </div>
         <div className='row'>
         <div className='input_type col-lg-12'>
            <input type='text' name='' id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Change Name' />
         </div>
         <div className='input_type col-lg-12'>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}  name='' id="" placeholder='Update Email Address' />
         </div>
         <div className='input_type col-lg-7 pr-50'>
             <div className='d-flex'>
             <select className='mr-20' name='' id="" >
                 <option>971</option>
                 {/* <option>82</option> */}
             </select>
             <input type='text' name='' value={phone}  onChange={(e) => setPhone(e.target.value)}  id="" placeholder='Update Mobile No.' />
             </div>     
         </div>
         <div className='input_type col-lg-5'>
            {/* <div className='otpinput'>
                <h5 className='mr-20'>ENTER OTP</h5>
                <input type='text' maxLength='1' name='f1' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f2' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f2' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f4' id='' />
            </div> */}
         </div>
         <div className='mt-10 buttonsubmit'>
         <div className="d-flex justify-content-end">
             <button className="btn  w-btn w-btn-white mr-20">Decline</button>
             <button className="btn btnsubmit w-btn" onClick={save_cat} >Save</button></div>
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

export default UpdateProfile;