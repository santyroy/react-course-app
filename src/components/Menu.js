import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/">
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
        >
          View Courses
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#">
          Contact Us
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#">
          About
        </Link>
      </ListGroup>
    </div>
  );
};
export default Menu;

/**
 *
 * <ListGroupItem tag="a" href="/">Home</ListGroupItem>
 *
 * If we use <ListGroupItem> and 'href' then page would reload.
 *
 * In order to make the page not to load and dynamically refresh the DOM
 * we have to replace <ListGroupItem> with <Link> and 'href' with 'to'
 *
 */
