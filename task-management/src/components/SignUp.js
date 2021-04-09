import React, {useState} from 'react';



function SignUp(props){
    const onSignupFormSubmit=function(e){
        e.preventDefault();
        const userData={
            name: e.target.name.value,
            age: e.target.age.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        props.handleSignup(userData);
    }
    return(
        <>
            <h1 className="">Sign Up</h1>
                <form onSubmit={onSignupFormSubmit}>
                    <div className="form-group row">
                        <label className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label">Name</label>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <input type="text" className="form-control" name="name" placeholder="Name" required/>
                        </div>
                    </div> 
                    <div className="form-group row">
                        <label className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label">Age</label>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <input type="text" className="form-control" name="age" placeholder="age"/>
                        </div>
                    </div> 
                    <div className="form-group row">
                        <label className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label" required>Email</label>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <input type="text" className="form-control" name="email" placeholder="Email"/>
                        </div>
                    </div> 
                    <div className="form-group row">
                        <label className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-form-label" required>Password</label>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <input type="text" className="form-control" name="password" placeholder="Password"/>
                        </div>
                    </div>   
                    <div class="form-group row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <button className="btn btn-primary float-right">Sign Up</button>
                        </div>
                    </div>      
                </form>
        </>
    )

}

export default SignUp;