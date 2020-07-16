import React from "react";
import { Jumbotron, Container, Button, Card, CardBody } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Card className="text-center bg-warning mt-2 mb-5">
        <CardBody>
          <h1 className="display-7 font-weight-bold">
            Welcome to Course Application
          </h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;
