
import React from 'react';
import BookList from '../src/compo/BookList';

const App = () => {
  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about the serious issues of rape and racial inequality.',
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A novel that presents a dystopian future under a totalitarian regime.',
    },
    {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      description: 'A novel about the voyage of the whaling ship Pequod.',
    },
  ];

  return (
    <div className="App">
      <h1 style={{color:'white'}}>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
