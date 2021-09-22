import React from 'react';
import { useState } from "react";

const Form = () => {
  const [user,setUser]=useState({name: ""})
  let name,value;
  const handleInput=(e)=>{
    console.log(e);
    name= e.target.name;
    value= e.target.value;
    setUser({...user, [name]:value});
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {name}=user;
    const res= await fetch("/submit",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    })
    const data = await res.json();
  
    console.log(data);
    if(res.status===422|| !data){
      console.log("invalid");
      window.alert("invalid");
    }
    else{
      console.log("valid");
      window.alert("valid");
    }
  }

  return (
    <form method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={user.name} onChange={handleInput} />
      <input type="submit" onClick={handleSubmit}/>
    </form>
  );
};
export default Form;
