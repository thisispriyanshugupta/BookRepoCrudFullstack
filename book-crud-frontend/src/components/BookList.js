import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('There was an error fetching the books!', error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <Link to={`/edit/${book.id}`}>Edit</Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add a new book</Link>
    </div>
  );
};

export default BookList;
