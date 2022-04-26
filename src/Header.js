import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function Header() {
   var user_id = localStorage.getItem('user_id');
   const logout = (e) => {
      localStorage.clear();
      window.location.href = 'home';
   }
   return (
      <>
         <header>
            <div id="header-sticky" className="header__area header__transparent header__padding">
               <div className="container p-0">
                  <div className="row align-items-center">
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-6">
                        <div className="logo">
                           <Link to='/home' className='homelogo'>
                              <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" width='100px' />
                              <img src={process.env.PUBLIC_URL + '/assets/images/wlogo.png'} alt="logo" width='100px' />
                           </Link>
                        </div>
                     </div>
                     <div className="col-lg-8 d-none d-lg-block text-end">
                        <div className="main-menu">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><NavLink activeclassname="active" to='/about'>About</NavLink ></li>
                                 <li><NavLink to='/blog-list'>Blog</NavLink ></li>
                                 <li><NavLink to='/packages'>Packages</NavLink ></li>
                                 <li><NavLink to='/contact'>Contact Us</NavLink ></li>

                                 {/* <li><NavLink  to='/login'>Login / Sign up</NavLink ></li> */}
                                 {user_id ?
                                    <li><NavLink to='/' onClick={e => { logout(e) }}>Logout</NavLink ></li>
                                    // <li> <a onClick={e => { logout(e) }} > Logout</a> </li>
                                    : <li><NavLink to='/login'>Login</NavLink ></li>
                                 }
                                  <li><NavLink activeclassname="active" to='/profile'>Profile</NavLink ></li>


                                 {/* <li><NavLink  to='/login'>{user_id ? 'Logout' : 'Login / Sign up'}</NavLink ></li> */}

                                 {/* <li><div className="language">
                                    <select>
                                       <option>ENG</option>
                                       <option>HINDI</option>
                                    </select>
                                 </div>
                                 </li> */}



                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className='mobile_btn'>
                        <Sidebar />
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}

export default Header;