import React , {useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

const Signout = () =>  {
  const navigate = useNavigate();
  useEffect(() =>{
    fetch('/signout',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }).then((res) =>{
         navigate('/Signin');
         console.log(res.status);
         if(res.status !== 200)
         {
          const error = new Error(res.error);
          throw error;
         }
    }).catch((err) =>{
           console.log(err);
    });
  },[]);
  return (
    <div>This is  signout pages</div>
  )
}

export default Signout;