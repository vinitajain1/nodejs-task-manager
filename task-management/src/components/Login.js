import React, {useState} from 'react';

function Login(props){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = function(){
        props.handleLogin({email,password});
    };
    const handleEmailChange = function(event){
        setEmail(event.target.value);
    };
    const handlePasswordChange = function(event){
        setPassword(event.target.value);
    };
    return(
        <>
            <h1 className="">Login</h1>
                    <div className="form-group row">
                        <label class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label">Email</label>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <input type="text" class="form-control" placeholder="Email address" onChange={handleEmailChange}/>
                        </div>
                    </div> 
                    <div className="form-group row">
                        <label class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label">Password</label>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <input type="password" class="form-control" placeholder="Password" onChange={handlePasswordChange}/>
                        </div>
                    </div>    
                    <div class="form-group row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button class="btn btn-primary float-right" onClick={handleLogin}>Login</button>
                    </div>
                </div>      
        </>
    )

}

export default Login;