import React from 'react'


import { useState } from 'react';
import { useNavigate } from "react-router-dom";

 function Signin() {
  const navigate= useNavigate;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
      };
      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
          </div>
        );
      };
     
      // Showing error message if error is true
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };
      const PostData = async(e)=>{
        
        console.log("coming in PostMan");
        e.preventDefault();
             console.log(name);
        const res = await fetch('/signup',{
          method:"POST",
          body:JSON.stringify({
           name,email,password
          }),
          headers: {
            "Content-Type": "application/json"
        }

        });
        const data = await res.json();
        console.log(data);
        if(res.status === 422 || !data)
        {
          window.alert("Invalid Input");
          console.log("Invalid Input"); 
        }
        else{
           window.alert("succefull registration");
           console.log(data);
        }
      }
  return (
    <div>
    <h1>User Registration</h1>
  

  {/* Calling to the methods */}
  {/* <div className="messages">
    {errorMessage()}
    {successMessage()}
  </div> */}

  <form method='POST'>
    {/* Labels and inputs for form data */}
    <label className="label">Name</label>
    <input onChange={handleName} className="input"
      value={name} type="text" />

    <label className="label">Email</label>
    <input onChange={handleEmail} className="input"
      value={email} type="email" />

    <label className="label">Password</label>
    <input onChange={handlePassword} className="input"
      value={password} type="password" />

    <button onClick={PostData} className="btn" type="submit">
      Submit
    </button>
  </form>
</div>
  )
}

export default Signin;