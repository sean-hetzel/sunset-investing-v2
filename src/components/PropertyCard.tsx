import React, { ReactElement } from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Progress
} from "reactstrap";
import { Link } from "react-router-dom";

interface Props {}

export default function PropertyCard({}: Props): ReactElement {
  return (
    <>
      <Container>
        <Row className="row-grid justify-content-between">
          <Col className="px-2 py-2" lg="4" sm="12">
            <Card className="card-stats">
              <CardBody color="primary">
                <CardTitle tag="p">$937,950</CardTitle>
                <ListGroup>
                  <ListGroupItem color="primary">Rent: $2000</ListGroupItem>
                  <ListGroupItem color="primary">
                    Leased for the next 3 years.
                  </ListGroupItem>
                  <ListGroupItem color="primary">
                    Appreciated by 4.2% last year.
                  </ListGroupItem>
                  <ListGroupItem color="primary">
                    Appreciation is predicted to be 3.8% next year.
                  </ListGroupItem>
                  <ListGroupItem color="primary">
                    Percentage Owned
                    <Progress value="50"></Progress>
                    50%
                  </ListGroupItem>
                </ListGroup>
                <CardFooter className="text-center">
                    <Link to="/properties/:id">
                  <Button className="btn-simple" color="primary">
                    View
                  </Button>
                  </Link>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
