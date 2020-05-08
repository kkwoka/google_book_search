import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css';

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Google Books Search</h1>
                    <h4>Search for and Save Books of Interest</h4>
                </Jumbotron>

                <Card>
                    <header id="searchHeader">
                        <i class="fas fa-book"></i>Book Search
                    </header>
                    <CardContent>
                        {/* <form> */}
                            <Input
                                onChange={() => {}}
                                name="title"
                                placeholder="Search"
                            />
                            <FormBtn
                                disabled={!(formObject.title)}
                                onClick={() => {}}
                            >
                                Submit Book
                            </FormBtn>
                        {/* </form> */}
                    </CardContent>
                </Card>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;
