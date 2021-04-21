import './App.css';
import React, { Component,useState } from 'react';
import TaskManager from "./components/TaskManager";
import Login from "./pages/Login";
import UserContext from "./components/UserContext";


function App(){

    const [userData,setUserData] = useState({
        authToken:localStorage.getItem("authToken"),
        user:JSON.parse(localStorage.getItem("user")),
    });

  const handleLogin = async function(loginCredentials){
    const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(loginCredentials)
        });
      const userData = await response.json()
      if(userData.error){
        alert(userData.error)
      }else{
        initializeLocalStorage(userData);
      }
  }

  const handleSignup = async function(user){
    const response = await fetch('/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(user)
        });
        const userData = await response.json();
        if(userData.error){
            alert(userData.error)
        }else{
            initializeLocalStorage(userData);
        }
  }

  const handleLogout = async function(){
      const response = await fetch('/users/logout', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem("authToken")
              }, 
          });
      const responseJson = await response.json();
      if(responseJson.error){
        alert(responseJson.error);
      }else{
        emptyLocalStorage();
      }
           
  }

  const emptyLocalStorage = function(){
    localStorage.clear();
    setUserData({});
  }

  const initializeLocalStorage = function(userData){
    localStorage.setItem("authToken",userData.token);
    localStorage.setItem("user",JSON.stringify(userData.user));
    setUserData({
      authToken:userData.token,
      user:userData.user
      });
  }

  const componentToRender = userData.authToken && userData.user
                            ?(
                              <UserContext.Provider value={userData}>
                                  <TaskManager handleLogout={handleLogout}/>
                              </UserContext.Provider>
                            )
                            :<Login handleLogin={handleLogin} handleSignup={handleSignup}/>
  return(
    <>
      {componentToRender}
    </>
  )
}

export default App;
