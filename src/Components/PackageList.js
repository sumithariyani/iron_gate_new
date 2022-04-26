import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const createFragment = require('react-addons-create-fragment');
function PackageList(props) {
  
  const [get_category, setGet_category] = useState([]);

  const get_cat = async () => {

    const getData = async (formDataa) => {
      let formData = new FormData();
      let name = 'a250bcr552s'
      formData.append("token", name);

      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        }
      };

      try {
        let response = await axios.post('/iron_gate/admin/api/get_package', formData, options);

        return response.data;
      } catch (err) { console.error(err); toast.error('some errror'); return false; }
    }

    let res = await getData({ token: 'a250bcr552s' });

    if (res.status) {

      setGet_category(res.data);

    } else {
      toast.error(res.message);
    }
  }

  useEffect(() => {
    get_cat();
  }, []);

  // console.log(get_category);

  const changeHtml = (input) => {
    return <div dangerouslySetInnerHTML={{ __html: input }} />
  }
  const GoPage = (e, id) => {
    e.preventDefault();
    localStorage.setItem('pack_id', id);
    window.location.href = 'package-detail';
  }
  return (
    <>
      <section className="blog__area section_card package_card">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                <h2 className="section__title-5 section__title-5-p mb-15">All Package</h2>
                <p>Bathroom & Kitchen Cleaning    </p>

              </div>
            </div>
          </div>
          <div className="row">
            {/* {(get_category).map((dataarray)=>{ */}

            {(get_category.length > 0) ? get_category.map((item, index) => {

              return <div key={index} className="col-lg-4  wow fadeInUp" data-wow-delay=".3s">
                <div className="card_package">
                  <a to='/package-detail' onClick={e => { GoPage(e, item.package_id) }} >
                    <div className="imght">
                      {/* <img src={process.env.PUBLIC_URL + '/assets/images/p1.png'} /> */}
                      <img src={item.package_image[0]} />
                    </div>
                    <h4>{item.package_title}</h4>
                  </a>
                  {changeHtml(item.description)}

                  <button onClick={e => { GoPage(e, item.package_id) }} className="w-btn w-btn-blue w-btn-blue-header btnblack">View Details</button>
                </div>
              </div>;
            }) : ''}


          </div>
        </div>
      </section>
    </>
  );
}

export default PackageList
