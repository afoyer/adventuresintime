import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";

/**
 * Book Renders a vertical flexbox with the image, information and buy links (if available) given book information
 * @param {*} book the book with image, intro, and buy links 
 */
function Book({ book }) {
  return (
    <div className="book-container">
      <Link to={`/books/${book.title}`} className="book-info">
        <h3 className="learnMore">Read More</h3>
        <ImageContainer name={book.image} second='jpg' alt={book.title} path='/Images/' cssclass='book-image'/>
      </Link>
      <p className="book-intro text-center">{book.intro}</p>
      {!book.comingsoon && <h2 className="text-center">Buy Now:</h2>}
      <div className="buy-links">
        {/* Check if amazon is not null */}
        {book.buyAmazon && (
          <a
            href={book.buyAmazon}
            className="buy-anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="buy amazon">
              <p className="text-center">AMAZON</p>
            </div>
          </a>
        )}
        {/* Check if barnes is not null */}
        {book.buyBookPatch && (
          <a
            href={book.buyBookPatch}
            className="buy-anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="buy bookpatch">
              <p className="text-center">BOOK PATCH</p>
            </div>
          </a>
        )}
        {/* Check if barnes is not null */}
        {book.buyBarnesAndNoble && (
          <a
            href={book.buyBarnesAndNoble}
            className="buy-anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="buy barnes">
              <p className="text-center">B&N</p>
            </div>
          </a>
        )}
        {book.buyApple && (
          <a
            href={book.buyApple}
            className="buy-anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="buy apple">
              <p className="text-center">APPLE</p>
            </div>
          </a>
        )}
        {book.comingsoon && (
          <div>
            <h1 className="text-center">Coming Soon.</h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default Book;
