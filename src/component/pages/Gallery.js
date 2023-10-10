import React from 'react';
import Goku from '../Goku';
import Vegeta from '../Vegeta';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Gallery(props) {
    return (
            <Container>
      <Row>
        <Col md={4}>
          <Goku />
        </Col>
        <Col md={4}>
          <Vegeta />
        </Col>
      </Row>
    </Container>
    );
}

export default Gallery;