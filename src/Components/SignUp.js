import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'



function SignUp() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [contry, setContry] = useState("")
  const [region, setRegion] = useState("")
  const [city, setCity] = useState("")
  const [area, setArea] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [building_name, setBuilding_name] = useState("")
  const token = 'a250bcr552s'

function test_signup(e){
  e.preventDefault();
 
  const headers = {
    'Content-Type' : 'application/json; charset=UTF-8',
   
    "Access-Control-Allow-Origin": "*"
  }
 
let item = {token,name,email,password,phone,contry,region,city,area,zipcode,building_name};
var formdata = 'token='+token+'&name='+name+'&email='+email+'&password='+password;
var formdata = formdata+'&phone='+phone+'&country='+'UAE'+'&region='+region+'&city='+city;
var formdata = formdata+ '&area='+area+'&zipcode='+zipcode+'&building_name='+building_name;

// axios.post('/iron_gate/admin/api/register',JSON.stringify(item),{
//   headers: headers
// })
// const test = 'token='+token;

axios({
  method: 'post',
  url: '/iron_gate/admin/api/register',
  data: formdata
})
      .then(response => {
        alert(response.data.message); 
        window.location.href='login';
        // console.log(response.data.message)
      })
      .catch(error => { console.log(error)})
  // console.warn(item);
}
return (
<>
  <section className="pb-45 pt-45 p-relative border-style userForm">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          {/* <form action='/'> */}
            <div className='card_book'>
              <div className='header-small'>
                <h1>Sign Up</h1>
              </div>             
              <div className='row mt-60 mb-40'>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='from-control' placeholder='Name' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}   className='from-control' placeholder='E-mail' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='from-control' placeholder='Password' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='password'  className='from-control' placeholder='Confirm Password' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='number' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} className='from-control' placeholder='Phone No.' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                  <select name='contry'  onChange={(e)=>setContry(e.target.value)} id=''>
                      <option >select</option>
                      <option value={contry}>UAE</option>
                  </select>
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name ='region' value={region} onChange={(e)=>setRegion(e.target.value)} className='from-control' placeholder='Region' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='city' value={city} onChange={(e)=>setCity(e.target.value)} className='from-control' placeholder='City' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='area' value={area} onChange={(e)=>setArea(e.target.value)} className='from-control' placeholder='Area' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='zipcode' value={zipcode} onChange={(e)=>setZipcode(e.target.value)} className='from-control' placeholder='Zip Code' />
                  </div>
                </div>
                <div className='col-lg-12 mt-30'>
                  <textarea name='address' value={building_name} onChange={(e)=>setBuilding_name(e.target.value)} className='textarea'  rows='5' placeholder='Building name, House number'></textarea>
                </div>

                


                <div className='col-lg-12 mt-50 text-center'>
                <button type="submit" onClick={test_signup} className="w-btn w-btn-blue w-btn-blue-header btnpay" href="">Sign Up</button>
                </div>

                
                <div className='col-lg-12 mt-50 text-center'>
                <div className='text-center mb-10'>
                  <a href='#' className='title_user mb-0 fntw500'>Already Have An Account</a>
                  </div>
                  <Link className="w-btn w-btn-blue w-btn-blue-header btnpay mb-0" to='/login'>Login</Link>
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

export default SignUp;
