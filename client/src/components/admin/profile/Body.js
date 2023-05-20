import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <AssignmentIndIcon />
            <h1>Profile</h1>
          </div>
          <div
            onClick={() => navigate("/admin/update")}
            className="flex space-x-2 cursor-pointer">
            <SecurityUpdateIcon />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl ">
          <div className="absolute left-[50%] top-[-10%]">
            <Avatar src={user.result.avatar} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="flex py-10 ml-10 space-x-40">
            <div className="flex flex-col space-y-10">
              <Data label="Name" value={user.result.name} />
              <Data label="Email" value={user.result.email} />
              <Data label="Username" value={user.result.username} />
              <Data label="Department" value={user.result.department} />
            </div>
            <div className="flex flex-col space-y-10 ">
              <Data label="DOB" value={user.result.dob} />
              <Data label="Joining Year" value={user.result.joiningYear} />
              <Data label="Contact Number" value={user.result.contactNumber} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
