import React, { Fragment } from "react";

import contentData from "../utils/content-data";
import { Col, Row } from "react-bootstrap";

const Content = () => (
  <Fragment className="next-steps-my-5">
    <Row className="d-flex-justify-content-between1">Brought to you by Elijah Heath and Tanner Syx</Row>
    <Row className="d-flex-justify-content-between">
      {contentData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <a target="_blank" rel="noopener noreferrer" href={col.link}>
              {col.title}
            </a>
          </h6>
          <p>{col.description}</p>
        </Col>
      ))}
    </Row>
  </Fragment>
);

export default Content;
