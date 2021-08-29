import { useState, useEffect } from 'react';
import axios from 'axios';

function Books() {
  const [name, setName] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('/api/books/v0/books')
      // .get('http://localhost:8000/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = async (env) => {
    env.preventDefault();

    try {
      const url = '/api/books/v0/books';
      // const url = 'http://localhost:8000/books';
      const response = await axios.post(url, { name });

      setBooks([...books, response.data]);
      setName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h4>Create a book</h4>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input value={name} onChange={(env) => setName(env.target.value)} />
          <button type='submit'>Crear</button>
        </form>
      </div>
      <div>
        <h2>List of books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Books;
