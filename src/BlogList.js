import React from 'react';
import ListBlog from './Components/ListBlog';


function BlogList(){
return(
<>
  <section className="hero__banner p-relative d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
          <div className="hero__content pr-80 text-center">
            <h1 className='text-white'>List of Blogs</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

<ListBlog />
  


</>

);

}

export default BlogList;
