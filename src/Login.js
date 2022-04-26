import React,  { useEffect } from 'react';
import Login from './Components/Login';

function BookingPackage() {
    
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );

return (
<>


<Login />
 

</>
);
}

export default BookingPackage;
