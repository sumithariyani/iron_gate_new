import React from "react" ;


function PackageFaq() {
    return (
        <>
        <div className="row justify-content-center mt-20 mb-20">
        <div className="col-lg-10">
        <div className="faq__wrapper wow fadeInUp" data-wow-delay=".3s" >
                        <div className="accordion" id="accordionExample">
                           <div className="accordion-item">
                             <h2 className="accordion-header" id="headingOne">
                               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               What is Lorem Ipsum?
                               </button>
                             </h2>
                             <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                               <div className="accordion-body">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                               </div>
                             </div>
                           </div>
                           <div className="accordion-item">
                             <h2 className="accordion-header" id="headingTwo">
                               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Where does it come from?
                               </button>
                             </h2>
                             <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                               <div className="accordion-body">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,</p>
                               </div>
                             </div>
                           </div>
                           <div className="accordion-item border-none">
                             <h2 className="accordion-header" id="headingThree">
                               <button className="accordion-button collapsed pb-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               Where can I get some?
                               </button>
                             </h2>
                             <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                               <div className="accordion-body">
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                               </div>
                             </div>
                           </div>
                         </div>
                     </div>
        </div>
        </div>
        </>
);
}

export default PackageFaq