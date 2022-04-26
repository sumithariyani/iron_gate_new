import React,  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PaymentList from './Components/PaymentList'

function TotalPayment() {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );
    return (
        <>
<section className="pb-50 pt-50 p-relative border-style total_list_payment">
            <div className="container">
            <div className="row">
                  <div className="col-lg-12">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25">
                        <h1 className="previous_title section__title-5 section__title-5-p mb-15 text-start">
                          <i className="fal fa-shield-check"></i> Total Payment</h1>
                      </div>
                  </div>
               </div>
              <PaymentList />
            </div>
    </section>
        </>
   );
 }
export default TotalPayment;
