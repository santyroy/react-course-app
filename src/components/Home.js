import React, { useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Jumbotron>
        <p className="lead text-center">
          This is a couse on React JS. Here the application will hit the API(s)
          which are being run in the backend via a Spring Boot application.
        </p>
        <Container className="text-center">
          <Button color="dark">Start Learning</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
