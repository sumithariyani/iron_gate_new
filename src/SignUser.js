import React,  { useEffect } from 'react';
import SignUp from './Components/SignUp';

function SignUser() {
    
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );

return (
<>


<SignUp />
 

</>
);
}

export default SignUser;
