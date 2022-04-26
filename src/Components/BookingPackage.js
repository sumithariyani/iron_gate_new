import React , { Component } from 'react';
import { Link } from "react-router-dom";
import{useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '8', label: '8' },
]
var  promocodes = [
 
]
let promessage='';
var  promocodes_sec = [
  { value: '', label: 'Select' },
]
function BookingPackage(props) {
  let pack_id =   localStorage.getItem('pack_id');
  const [isChecked, setIsChecked] = useState(false);
  const [promessage, setPromessage] = useState('');
  
  const [checked, setChecked] = useState("");
  const [get_category, setGet_category] = useState([]);
  const [get_promocode, setGet_promocode] = useState([]);
  const [promo, setPromo] = useState([]);
  const [getpackage, setPackage] = useState([]);
  const [employee, setEmployee] = useState("")
  const [employee_count, setEmployee_count] = useState("")
  const [date, setDate] = useState("")
  const [hours, setHours] = useState("")
  const [instruction, setInstruction] = useState("")
  const [promocode, setPromocode] = useState([]);
  const [price, setPrice] = useState('');
  const user_id = localStorage.getItem('user_id');
  const package_id =  localStorage.getItem('pack_id')

  

         let dataarray =  get_category.data;
            // if(get_category.status==true){
              // console.log(dataarray);
            // }
            const getpromocode = async () =>{

              const getPromo = async (formDataa) => 
                          { 
                          let testurl = '/iron_gate/admin/api/get_promo_code' ;
                          let formData = new FormData();
                          let name = 'a250bcr552s'   
                          formData.append("token",name );     
                            const options = { headers:{ "Content-Type": "multipart/form-data",
                            "Accept": "application/json",
                            "type": "formData"}};
                               console.log(formData); 
                            try{
                              let response = await axios.post(testurl,formData,options);
                              // console.log(response.data); 
                              return   response.data;
                            } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                         }  
                        
                         let res = await getPromo({token:'a250bcr552s'}); 
                      
                         if(res.status){
                        console.log(res.data)
                        res.data.map((dataarray,index)=>{
                          promocodes = [
                            ...promocodes_sec,
                            { value: dataarray.promo_code, label: dataarray.promo_code }
                          ];
                          promocodes_sec = promocodes;
                          // promocodes_sec.append("value",'test');  
                          console.log(promocodes);
                        });
                          setGet_promocode(res.data);
                         }
                        }
                        useEffect(() => {
                          getpromocode();
                        },[]); 



            const get_package = async () =>{

              const getPAck = async (formDataa) => 
                          { 
                            let testurl = '/iron_gate/admin/api/get_package_detail' ;
                          let formData = new FormData();
                           let name = 'a250bcr552s'   
                          formData.append("token",name );
                          formData.append("package_id",package_id );
                              
                            const options = { headers:{ "Content-Type": "multipart/form-data",
                            "Accept": "application/json",
                            "type": "formData"}};
                               console.log(formData); 
                            try{
                              let response = await axios.post(testurl,formData,options);
                              // console.log(response.data); 
                              return   response.data;
                            } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                         }  
                        
                         let res = await getPAck({token:'a250bcr552s'}); 
                      
                         if(res.status){
                           
                          setPackage(res.data);
                          setPrice(res.data.price);
  
                         }else{
                             toast.error(res.message);
                         }
                        }
                        useEffect(() => {
                          get_package();
                        },[]); 

           
            const get_cat = async () =>{

              const getData = async (formDataa) => 
                          { 
                            let testurl = '/iron_gate/admin/api/get_employee' ;
                          let formData = new FormData();
                           let name = 'a250bcr552s'   
                          formData.append("token",name );
                              
                            const options = { headers:{ "Content-Type": "multipart/form-data",
                            "Accept": "application/json",
                            "type": "formData"}};
                               console.log(formData); 
                            try{
                              let response = await axios.post(testurl,formData,options);
                              // console.log(response.data); 
                              return   response.data;
                            } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                         }  
                        
                         let res = await getData({token:'a250bcr552s'}); 
                      
                         if(res.status){
                         setGet_category(res);
                         
                         }else{
                             toast.error(res.message);
                         }
                        }
                        useEffect(() => {
                          get_cat();
                        },[]);  
                        const update_cat = async (e) => {
                          e.preventDefault();
                          // let org_code = localStorage.getItem('org_code');
                      
                          // const options = { headers:{"Content-type": "application/multipart/form-data" }};
                      
                          const updateData = async () => {
                            let formData = new FormData();
                            let token = 'a250bcr552s'
                            formData.append("token", token);
                            formData.append("user_id", user_id);
                            formData.append("package_id", package_id);
                            formData.append("date", date);
                            formData.append("hours", hours);
                            formData.append("employee_id", employee);
                            formData.append("instruction", instruction);
                            const options = {
                              headers: {
                                "Content-Type": "multipart/form-data",
                                "Accept": "application/json",
                                "type": "formData"
                              }
                            };
                            // console.log(formData);
                            try {
                              let response = await axios.post('/iron_gate/admin/api/add_order', formData, options);
                              console.log(response.data);
                              if (response.data.status == true) {
                                // console.log(response);
                              }
                              //  ccconsole.log(test);
                              return response.data;
                              // sessionStorage.setItem("pageView", response.data);
                            } catch (err) { console.error(err); toast.error('some errror'); return false; }
                          }
                          let res = await updateData();
                          if (res.status) {
                            // setGet_category(res);
                            // alert(res.message);
                            toast(res.message)
                          } else {
                            toast.error(res.message);
                          }
                        }
  function testfunction(e){

if(e.value<employee_count){
  setEmployee_count(e.value)
  console.log(employee_count);
  console.log(employee);
  for(let j=0; j<=employee.length; j++) {
  setEmployee([
    ...employee.slice(0, j),
    ...employee.slice(j + 1)
  ]);
}

  // employee.splice(0,employee.length)
  console.log(employee);
  var x = document.getElementsByClassName("testcheckbox");
  let i ;
  for(i=0; i<=x.length; i++) {
    console.log(x);
    //  x[i].checked = false;
   }
  }else{
  setEmployee_count(e.value)

}
    
    
  }  
  function in_array(array, pcode) {
    for(var i=0;i<array.length;i++) {
      // console.log();
         if(array[i].promo_code === pcode) return array[i];
    }
    return false;
}
  
   function verify_promo(e){
  const verifycode = async () =>{
    const getpromoData = async (formDataa) => 
    { 
      let testurl = '/iron_gate/admin/api/check_promo_code' ;
    let formData = new FormData();
     let name = 'a250bcr552s'   
     formData.append("token",name);
     formData.append("promo_code",e.value);
     const options = { headers:{ "Content-Type": "multipart/form-data",
      "Accept": "application/json",
      "type": "formData"}};
         console.log(formData); 
      try{
        let response = await axios.post(testurl,formData,options);
       
        return   response.data;
      } catch(err){ console.error(err); toast.error('some errror'); return false;  }
   }  
   let res = await getpromoData({token:'a250bcr552s'}); 
   if(res.status){
     let pmc = res.data ;
     let des ;
    // console.log(res.data); 
     if(pmc.minimum_order_amount<=price){
       des = (pmc.discount * price)/100
if(des>pmc.max_discount_amount){
  des = pmc.max_discount_amount;
}
setPrice(price-des);
       setPromessage('Promo Code Applied')
     }
    // promessage='test';
    // setGet_category(res);
    }else{
      setPromessage('Invalid Promocode')    
        // toast.error(res.message);
    }
  }
    verifycode();
  
    //  alert('test');
    // var result = in_array(get_promocode, e.value);
    //  console.log(result);
    // setPromo(e.value)
    //  alert('test');
   } 


   const handleOnChange = (e) => {
     let status = e.target.checked;
if(status===true){
     if(employee_count> employee.length ){
      setEmployee([...employee, e.target.value])
      e.target.checked = true
     }else{
    e.target.checked = false   
     } 
    }else{
      var index = employee.indexOf(e.target.value);
  if (index > -1) {
    employee.splice(index, 1);
  }
    }
    //  console.log(e.target.checked);
   
    // setEmployee(e.target.value)
    // e.target.checked = false
    // console.log(employee_count);
    // console.log(employee.length);
   
    // setIsChecked(!isChecked);
  };
 
  console.log(get_promocode);

return (
<>
  <section className="about__area pb-45 pt-45 p-relative border-style">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          {/* <form> */}
            <div className='card_book'>
              <div className='header-small'>
                <h1>Book A Package</h1>
              </div>
              <div className='row'>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name=''  className='from-control' readOnly value={getpackage.package_title}  placeholder='Car Cleaning' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  {/* <div className='sign__input'> */}
                  <Select options={options} className='w-200' onChange={testfunction}  />
                    {/* <input type='text' name=''  className='from-control' readOnly value={getpackage.package_title}  placeholder='Car Cleaning' /> */}
                  {/* </div> */}
                </div>
                {/* <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name=''  className='from-control' onChange={get_promocode}  value={promocode} placeholder='Promocode' />
                  </div>
                </div> */}
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                      <input type='date' value={date} onChange={(e) => setDate(e.target.value)} name=''  className='from-control' placeholder='1 cleaner with Sup' />
                  </div>
                </div>
              
                {/* <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='number' name='' className='from-control' placeholder='Phone No.' />
                  </div>
                </div> */}

                <div className='col-lg-12 mt-30'>
                  <label className='label'>Hours</label>

                  <div className='radio_hourse_style'>

                    <label className="radio_hours">
                      <input value='1' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>1 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input  value='2' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>2 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input value='3' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>3 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input  value='4' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>4 Hour</span>
                    </label>

                    {/* <div className='radio_hours'>
                      <a className="w-btn w-btn-blue w-btn-blue-header btnblack" href="">+more</a>
                    </div> */}

                  </div>
                </div>
                
                <div className='col-lg-12 mt-30'>
                  <label className='label'>Select An Employee</label>

                  <div className='radio_hourse_style'>
                  {(dataarray ?? []).map((dataarray,index)=>{
                    return <label  key={index} className="radio_hours employe_style">
                      {/* <input   onChange={(e) => setEmployee(e.target.value)}  type="checkbox" name="employee" value={dataarray.id} /> */}
                      <input  onChange={handleOnChange}  checked={isChecked.index}   type="checkbox" className='testcheckbox' name="employee" value={dataarray.id} />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>{dataarray.name}</small>
                      </span>
                    </label>;
 })}

                    {/* <label className="radio_hours employe_style">
                      <input type="radio" name="employee" id='' />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>John Pauls</small>
                      </span>
                    </label>

                    <label className="radio_hours employe_style">
                      <input type="radio" name="employee" id='' />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>John Pauls</small>
                      </span>
                    </label>

                    <label className="radio_hours employe_style">
                      <input type="radio" name="employee" id='' />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>John Pauls</small>
                      </span>
                    </label>
*/}
                    {/* <div className='radio_hours'>
                      <a className="w-btn w-btn-blue w-btn-blue-header btnblack" href="">+more</a>
                    </div>  */}

                  </div>



                </div>

                <div className='col-lg-12 mt-30'>
                  <label className='label'>Add Instruction</label>
                  <textarea name=''  value={instruction} onChange={(e) => setInstruction(e.target.value)}  className='textarea' rows='5'></textarea>
                </div>
                <div className='col-lg-6 mt-30'>
                  <Select options = {promocodes} onChange={verify_promo} placeholder='Select Promo Code' />
                  <span id='promessage'>{promessage}</span>
                  </div>


              <div className='row justify-content-center'>
                <div className='col-lg-9'>
                <div className='totalcard'>
                <div className='itemcard'>
                  <div className=''>
                  <span>Item Total</span>
                   </div>
                  <div className=''>
                    <span><strong>AED 1500</strong></span>         
                  </div>
                </div>

                <div className='itemcard'>
                  <div className=''>
                  <h6>Coupon - (QWEASDER55)</h6>
                 </div>
                  <div className=''>
                  <h6>you saved AED150</h6>
                  </div>
                </div>

                <div className='itemcard'>
                  <div className=''>
                  <span className='fnt-20'>Grand Total</span>
                 </div>
                  <div className=''>
                    <span className='fnt-20'><strong>AED 1500</strong></span>
                  </div>
                </div>

                </div>
                </div>
              </div>

                <div className='col-lg-12 mt-50 text-center'>
                  <label className='label text-uppercase'>Aed {price}</label>
                  <label className='label text-uppercase'>Aed {price}</label>
                  <a className="w-btn w-btn-blue w-btn-blue-header btnpay" onClick={update_cat} href="">PAY NOW</a>
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

export default BookingPackage;
