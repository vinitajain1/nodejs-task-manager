import React, {useState} from 'react';
import * as FCIcons from "react-icons/fc";

function UserProfile() {
    const authToken = localStorage.getItem("authToken");
    const user = JSON.parse(localStorage.getItem("user"));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);
    const [_id, setId] = useState(user._id);
    const [avatarURL, setAvatarURL] = useState(`/users/${_id}/avatar`);
    const [password, setPassword] = useState("");

    /**
        Sets the data in the component state
     */
    const updateData = async function(userJsonValue){
        setName(userJsonValue.name);
        setEmail(userJsonValue.email);
        setAge(userJsonValue.age);
        setId(userJsonValue._id);
    }

    /**
        creates user object to be saved to server
     */
    const updateUserProfile = ()=>{
        const userObject = {
            name,
            email,
            age,
        }
        if(password){
            userObject.password = password;
        }
        saveUserProfile(userObject);
    };

    /**
        server call to save user profile
     */
    const saveUserProfile = async function(data){
        const user = await fetch('/users/me', {
            method: 'PATCH', 
            headers: {
            'Content-Type': 'application/json',
             Authorization: authToken
            },
            body: JSON.stringify(data)
        });
        const userJsonValue = await user.json();
        if(userJsonValue.error){
            alert(userJsonValue.error);
        }else{
            alert("User profile saved successfully!");
            updateData(userJsonValue);
        }
        
    };
    /**
        change handlers for name,age,email and password fields
     */
    const handleNameChange = function(event){
        setName(event.target.value);
    };
    const handleAgeChange = function(event){
        setAge(event.target.value);
    };
    const handleEmailChange = function(event){
        setEmail(event.target.value);
    };
    const handlePasswordChange = function(event){
        setPassword(event.target.value);
    };

    /**
        This function call the file click event on click of edit image icon
     */
    const uploadProfilePicture = function(event){
        document.getElementById("upload-profile-picture").click();
    }

    /**
        server call to save profile picture
     */
    const saveUpdatedPicture = async function(event){
        const formData = new FormData();
        formData.append('avatar',event.target.files[0]);
        const response = await fetch('/users/me/avatar', {
            method: 'POST', 
            headers: {
             Authorization: authToken
            },
            body: formData
        });
        const responseJson = response.json();
        if(responseJson.error){
            alert(responseJson.error);
        }else{
            fetchAvatar(_id);
        }
    };

    /**
        fetch user avatar and create url for the same
     */
    const fetchAvatar = async function(_id){
        const response = await fetch(`/users/${_id}/avatar`, {
            method: 'GET', 
            headers: {
             Authorization: authToken
            },
        });
        const avatarBlob = await response.blob();
        setAvatarURL(window.URL.createObjectURL(avatarBlob));
    }
    return (
        <div className="user-profile common-margin common-pages">
            <h1 className="common-center-align-content">User Profile</h1>
            <div className="common-center-align-content">
                <img src={avatarURL} alt="Profile picture" className="rounded-circle profile-picture"/>
                <div className="common-icons upload-profile-picture">
                    <FCIcons.FcEditImage onClick={uploadProfilePicture}/>
                </div>
                <input type="file" id="upload-profile-picture" name="avatar" className="d-none" onChange={saveUpdatedPicture}/>
            </div>
            <div>
                <div className="row common-row-margin">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} onChange={handleNameChange}/>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Age</label>
                        <input type="text" className="form-control" value={age} onChange={handleAgeChange}/>
                    </div>
                </div>
                <div className="row common-row-margin">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>Email</label>
                        <input type="text" className="form-control" value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label>New Password</label>
                        <input type="password" className="form-control" onChange={handlePasswordChange} placeholder="New password"/>
                    </div>
                </div>
                <div className="row common-row-margin">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button className="btn btn-primary" onClick={updateUserProfile}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
