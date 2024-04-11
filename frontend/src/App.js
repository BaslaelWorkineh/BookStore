import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API endpoint
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        // Set the fetched data to the state
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  return (
    <div>
      <h1>Bookstore</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Publication Date: {book.publication_date}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Price: {book.price}</p>
            <p>Description: {book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
