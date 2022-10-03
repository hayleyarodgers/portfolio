import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Project(props) {
  return (
    <Row xs={1} md={2} lg={3} className="g-5">
      {props.projects.map((project) => (
        <Col key={project.id}>
          <Card className="rounded-0 h-100">
            <Card.Img
              variant="top"
              src={project.screenshot}
              alt="Project screenshot"
              className="rounded-0"
            />
            <Card.Body>
              <h3>{project.name}</h3>
              <i>{project.technologies}</i>
              <Card.Text>{project.description}</Card.Text>
              <Button
                variant="primary"
                href={project.repoURL}
                target="_blank"
                rel="noopener noreferrer">
                CODE
              </Button>{" "}
              {project.liveAppURL ? (
                <Button
                  variant="primary"
                  href={project.liveAppURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  LIVE APP
                </Button>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
