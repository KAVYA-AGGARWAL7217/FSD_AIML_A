import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({setregData}) => {
    const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
    function getData(e)
    {
        e.preventDefault();
        const data={name,email,password}
        setregData(data);
        alert("Registration successfull")
    }
  return (
    <div><h1>Register Here</h1>
     <form>
  <div class="form-group">
  <label for="exampleInputEmail1">Name</label>
  <input type="text" class="form-control" id="exampleCheck1" onChange={(e)=>setName(e.target.value)}/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={getData}>Register</button>
</form></div>
  )
}

export default Register