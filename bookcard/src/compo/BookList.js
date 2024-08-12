
import React from 'react';
import BookCard from '../compo/BookCard';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
};

export default BookList;
