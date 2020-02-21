import React, { ReactElement } from "react";
import { Container, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

interface Props {}

export default function PropertyCard({}: Props): ReactElement {
  return (
    <>
      <Container>
        <Row className="row-grid justify-content-between">
          <Col className="px-2 py-2" lg="6" sm="12">
            <Card className="card-stats">
              <CardBody>
              <CardTitle tag="p">$937,950</CardTitle>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
