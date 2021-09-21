import React from "react";
import { useEffect,useState } from "react";
const App = () => {
const [data, setData] = useState({});
useEffect(() => {
  (async() => {
    try{
      const res = await fetch("http://localhost:5000")
      const serverData = await res.json()
      setData(serverData);
      console.log(serverData);
    }
    catch(err){
      console.log(err);
    }
  }
    )();
}, []);


  return (
    <>
      {data.msg}
    </>
  )
}

export default App;
