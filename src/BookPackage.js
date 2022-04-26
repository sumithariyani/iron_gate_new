import React,  { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import BookingPackage from './Components/BookingPackage';

function BookPackage() {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );

    return (
    <>
    
   <BookingPackage />

    </>
    );
  }
  
  export default BookPackage;