import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Crousel from './Crousel';

function Login() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const PostData = async (e) => {

    console.log("coming in PostMan");
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      body: JSON.stringify({
        email, password
      }),
      headers: {
        "Content-Type": "application/json"
      }

    });
    const data = await res.json();
    console.log(data);
    if (res.status===422||!data ) {
      window.alert("Please enter valid email and password");
      console.log("Invalid Input");
    }
    
    else {

      window.alert("succefull registration");
      console.log("you haave made it");
      console.log(data);
     
      navigate('/Signin');
      
      
     
    }
  }
  return (
    <>
      <div className='MainBox'>
        <div className='Loginbox'>
          <form>

            <h1>Login</h1>
            <div className='inputBox'>
              <label className="label">Email</label>
              <input onChange={handleEmail} className="input"
                value={email} type="email" placeholder="Email.." />
            </div>


            <div className='inputBox'>

              <label className="label">Password</label>
              <input onChange={handlePassword} className="input"
                value={password} type="password" placeholder="password.." />
            </div>

            <div className='inputBox'>
              <button onClick={PostData} className="btn" type="submit">
                Submit
              </button>
            </div>



          </form>
        </div>
      </div>

    </>
  )
}

export default Login