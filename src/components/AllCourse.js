import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/boot-api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllCourse = () => {
  // As because it is a function based approach so we cannot use life cycle method of a class
  // An alternative to this is the use of 'hooks' in react js which mimics the work of the methods.

  useEffect(() => {
    document.title = "All Courses";
    getAllCoursesFromServer();
  }, []);

  // function to load data from server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // for success
        console.log(response);
        toast.success("Courses has been loaded");
        // add courses to the array
        setCourses(response.data);
      },
      (error) => {
        // for error
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  // to update the state of the course array
  const updateCourseState = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  const [courses, setCourses] = useState([
    { title: "Java Course", description: "This is demo course" },
    { title: "Django Course", description: "This is demo course" },
    { title: "React JS Course", description: "This is demo course" },
    { title: "Angular Course", description: "This is demo course" },
  ]);

  return (
    <div>
      <div className="text-center">
        <h3>All Courses</h3>
        <p>List of courses are as follows:</p>
      </div>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourseState} />
          ))
        : "No Courses"}
      <ToastContainer />
    </div>
  );
};

export default AllCourse;
