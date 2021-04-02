import React, { useEffect, useState } from "react";


function LoggedIn(props){
  const message = props.message
  return (
    <div>
      <label>You are logged in: {message}</label>
    </div>
  );
}

function NotLoggedIn(props){
  const errorMessage = props.message
  return (
    <div>
      <label>You cannot access this page: {errorMessage}</label>
    </div>
  );
}

export default function CatList() {
  const [status, setStatus] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function loadCats() {
      //fetch the cat list
      
      const response = await fetch("http://localhost:4000/cats?limit=10", {
        //use the authorization
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      });

      setStatus(response.status)
      if (response.status !== 200) {
        const json = await response.json()
        setMessage(json.message)
      } else {
        const text = await response.text()
        setMessage(text)
      }
    }
    //invoke the function
    loadCats();
  }, []);


  
  if (status === 200){
    return <LoggedIn message={message}/>
  } else {
    return <NotLoggedIn message={message}/>
  }
}
