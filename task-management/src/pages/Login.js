import React, {useState} from 'react';
import Login from "../components/Login";
import SignUp from "../components/SignUp";

function LoginSignup(props){
    const [isLogin,setIsLogin]=useState(true);
    const renderSignUp = function(){
        setIsLogin(!isLogin);
    }
    const componentToRender = isLogin ? <Login handleLogin={props.handleLogin}/>:<SignUp handleSignup={props.handleSignup}/>;
    const loginSignupOption = isLogin? "Sign up" : "Login";
    const loginSignupText = isLogin? "Don't have an account?" : "Already have an account?";
    return(
         <div className="login common-margin common-pages login-page">
         {componentToRender}
            <div className="d-flex">
                <p><strong>{loginSignupText}</strong></p><span className="common-link" onClick={renderSignUp}>{loginSignupOption}</span>
            </div>
        </div>
    )
}




export default LoginSignup;