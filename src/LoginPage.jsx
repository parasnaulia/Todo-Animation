import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Login from './Login';

const LoginPage = () => {
   const [isLoading,setIsLoading]= useState(true);
   useEffect(()=>{
    setTimeout(()=>{
       setIsLoading(false)

    },500)

   },[])
  return (
    <div>
       {isLoading===true?<Loader/>: <Login/>}

      
    </div>
  )
}

export default LoginPage
