import React from "react" ;


function OurTeam() {
    return (
     <>
     <section className='our-team'>
         <div className='container'>
            <div className="text-center">
               <h2>Our Team</h2>
            </div>
            <div className='row justify-content-center wow fadeInRight' data-wow-delay=".7s">
               
               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                     <img src={process.env.PUBLIC_URL + '/assets/images/team.jpg'} alt="team images" />
                     <h5>John Jones</h5>
                  </a>
               </div>
               </div>

               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                     <img src={process.env.PUBLIC_URL + '/assets/images/team-2.jpg'} alt="team images" />
                     <h5>John Jones</h5>
                  </a>
               </div>
               </div>

               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                     <img src={process.env.PUBLIC_URL + '/assets/images/team-3.jpg'} alt="team images" />
                     <h5>John Jones</h5>
                  </a>
               </div>
               </div>

               <div className='col-lg-3'>
               <div className="team_list">
                  <a href="#">
                     <img src={process.env.PUBLIC_URL + '/assets/images/team-4.jpg'} alt="team images" />
                     <h5>John Jones</h5>
                  </a>
               </div>
               </div>

             </div>
         </div>
      </section>

   </>
    );
  }

  export default OurTeam;