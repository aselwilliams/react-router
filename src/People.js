import { useState } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

function People() {
  const [books, setBooks] = useState(data);
  console.log(books);
  return (
    <div>
      <h1>People Page</h1>
      <div className="container">
        {books.map((book) => (
          <div key={book.id}>
            <h4>{book.title}</h4>
            <img src={book.image} />
            <div>
              <Link to={`/book/${book.id}`}>Learn More </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
