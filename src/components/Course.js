import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/boot-api";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(id);
        toast.success("Course deleted");
        update(id);
      },
      (error) => {
        console.log(id);
        toast.error("Sever problem");
      }
    );
  };

  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold" tag="h5">
            {course.title}
          </CardTitle>
          <CardSubtitle>{course.description}</CardSubtitle>
          <Container>
            <Button className="btn-warning mr-3">Update</Button>
            <Button
              className="btn-danger ml-3"
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
