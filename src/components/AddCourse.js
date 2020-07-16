import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/boot-api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({});

  // Form Handler function
  const handleForm = (e) => {
    console.log(course);
    addCourse(course);
    e.preventDefault();
  };

  // function to post data on server

  const addCourse = (course) => {
    axios.post(`${base_url}/courses`, course).then(
      (response) => {
        console.log(response);
        toast.success("Course added sucessfully");
        // setCourse({}); // to clear the fields once course has been added. -NOT WORKING
      },
      (error) => {
        console.log(error);
        toast.error("Problem occured");
      }
    );
  };

  return (
    <div>
      <h3 className="text-center">Fill Course Details</h3>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input
            id="courseId"
            name="id"
            type="number"
            placeholder="Enter Course Id"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="courseTitle">Course Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter Course Title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="courseDesc">Course Id</Label>
          <Input
            id="description"
            name="description"
            type="textarea"
            placeholder="Enter Course Description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          ></Input>
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success mb-5">
            Add Course
          </Button>

          <Button type="reset" color="warning ml-3 mb-5">
            Clear
          </Button>
        </Container>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddCourse;
