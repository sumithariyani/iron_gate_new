import React from 'react';
import Download_app from './Components/Download_app';
import PackageList from './Components/PackageList';
import PackageTwo from './Components/PackageTwo';

function Packages() {
 return (
    <>


<section className="hero__banner p-relative d-flex align-items-center"> 
  <div className="container">
     <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
           <div className="hero__content pr-80 text-center">
            <h1 className='text-white'>Packages</h1>
           </div>
        </div>
        
     </div>
  </div>
</section>

<PackageList />

<Download_app />

<PackageTwo />


    </>
  );
}

export default Packages;