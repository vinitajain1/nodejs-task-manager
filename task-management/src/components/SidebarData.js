import React, { PureComponent } from 'react'
import * as FaIcons from "react-icons/fa";
import * as BIIcons from "react-icons/bi";
import * as IOIcons from "react-icons/io5"

export const SidebarData = [
    {
        title: "User Profile",
        path: "/user-profile",
        icon: <BIIcons.BiUserCircle />,
        cName:"nav-text"
    },
    {
        title: "View Tasks",
        path: "/view-tasks",
        icon: <FaIcons.FaTasks />,
        cName:"nav-text"
    },
    {
        title: "Create Tasks",
        path: "/create-tasks",
        icon: <IOIcons.IoCreateOutline />,
        cName:"nav-text"
    }
]