import React,{ useEffect,useState }  from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; 
 
function ListBlog() {
  const history = useHistory();
  
const [get_info, setGet_info] = useState([]);
   
const get_cat = async () =>{

  const getData = async () => 
              { 
                let formData = new FormData();
              
                  formData.append("token",'a250bcr552s' );
            

                const options = { headers:{ "Content-Type": "multipart/form-data",
                     "Accept": "application/json","type": "formData"}};
                   console.log(formData); 
                try{
                  let response = await axios.post('/iron_gate/admin/api/get_blog',formData,options);
                
                  return   response.data;
                } catch(err){ console.error(err); toast.error('some errror'); return false;  }
             } 
             
             
             
            
             let res = await getData(); 
               console.log(res); 
               
             if(res.status){
               setGet_info(res.data);
               }else{
                 toast.error(res.message);
             }
            }

            useEffect(() => {
              get_cat();
            },[]);    
     
       console.log(get_info);     

// '/blog-detail'
const b_dtlFun = (id)=>{
  localStorage.setItem('blog_id', id);
  history.push('/blog-detail'); 
    
}
    return (
      <>    
  <section className="">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className='blog_list_style gx-5'>
          {(get_info.length >0)? get_info.map((item,index)=>{ 
            return<li key={index}  onClick = {e=>{b_dtlFun(item.blog_id)}}  >
              <img src={item.image } alt='blog image' />
              <h5>{item.title}</h5>
                <p>{   item.description.slice(0,25) }</p>
                </li>}) :''}
          
          </ul>
        </div>
      </div>
    </div>
  </section>
      </>
      );
    }
  
  export default ListBlog
  