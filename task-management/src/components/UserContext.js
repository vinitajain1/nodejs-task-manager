import React from "react";

const UserContext = React.createContext({
    authToken:"",
    user:{}
});

export default UserContext;