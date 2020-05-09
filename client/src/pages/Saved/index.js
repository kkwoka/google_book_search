// import React, { useEffect, useState } from "react";
import React from 'react';
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css';

function Saved() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Saved Books</h1>
                </Jumbotron>

                <Card>
                    <header id="searchHeader">
                        <i class="fas fa-book"></i>Book Search
                    </header>
                    <CardContent>
                        * 1st book here *
                    </CardContent>
                </Card>
          </Col>
        </Row>
      </Container>
    );
}


export default Saved;
