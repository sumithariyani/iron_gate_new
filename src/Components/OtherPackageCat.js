import React from "react" ;


function OtherPackageCat() {
    return (
     <>
     <section className='our-team other_package border-style'>
         <div className='container'>
            <div className="text-center">
               <h2 className="text-capitalize">Other Packages In this Category</h2>
            </div>
            <div className='row justify-content-center wow fadeInRight' data-wow-delay=".7s">
               
               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                     <img src={process.env.PUBLIC_URL + '/assets/images/p1.png'} alt="Packages images" />
                     <h5>Floor</h5>
                  </a>
               </div>
               </div>

               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                  <img src={process.env.PUBLIC_URL + '/assets/images/p2.png'} alt="Packages images" />
                     <h5>Sink</h5>
                  </a>
               </div>
               </div>

               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                  <img src={process.env.PUBLIC_URL + '/assets/images/p3.png'} alt="Packages images" />
                     <h5>Dusting</h5>
                  </a>
               </div>
               </div>

               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                  <img src={process.env.PUBLIC_URL + '/assets/images/p1.png'}  alt="Packages images" />
                     <h5>Floor</h5>
                  </a>
               </div>
               </div>

             </div>
         </div>
      </section>

   </>
    );
  }

  export default OtherPackageCat;