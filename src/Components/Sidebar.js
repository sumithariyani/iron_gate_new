import React, { useState } from "react";
import {NavLink} from 'react-router-dom';

function Sidebar() {

    const [isOpen, setIsopen] = useState(false);

    const Sidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
                <div className="btn btn-primary" onClick={Sidebar} >
                    <i className="fa fa-bars"></i>
                       </div>
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0"><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" width="80px" /></h4>
                            <div className="btn btn-primary" onClick={Sidebar}><i className="fa fa-times"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                            <li><NavLink onClick={Sidebar}  className="sd-link" activeclassname="active " to='/about'>About</NavLink ></li>
                              <li><NavLink onClick={Sidebar} className="sd-link"  to='/blogs'>Blog</NavLink ></li>
                              <li><NavLink onClick={Sidebar} className="sd-link"  to='/packages'>Packages</NavLink ></li>
                              <li><NavLink onClick={Sidebar} className="sd-link"  to='/contact'>Contact Us</NavLink ></li>
                              <li><NavLink onClick={Sidebar} className="sd-link"  to='/login'>Login / Sign up</NavLink ></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={Sidebar}></div>
           
        </>
    );
}

  export default Sidebar;
