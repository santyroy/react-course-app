import React from "react";
import "./App.css";
import Header from "./components/Header";
import AllCourse from "./components/AllCourse";
import AddCourse from "./components/AddCourse";
import { Container, Row, Col } from "reactstrap";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/view-courses" component={AllCourse} exact />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
