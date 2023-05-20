import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  getAllStudent,
  getAllFaculty,
  getAllAdmin,
  getAllDepartment,
  getNotice,
  getAllSubject
} from "../../redux/actions/adminActions";

const FacultyHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotice());
    dispatch(getAllStudent());
    dispatch(getAllFaculty());
    dispatch(getAllAdmin());
    dispatch(getAllDepartment());
    dispatch(getAllSubject);
  }, [dispatch]);
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;
