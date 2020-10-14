import React, { useState, useEffect } from "react";

import { readmoredata } from "./../data/ReadMoreData";
import { Redirect } from "react-router-dom";
function BookReadMore({ match }) {
  const [unknown, setUnknown] = useState(false);
  useEffect(() => {
    const getBook = async () => {
      const book = await readmoredata.find(
        (book) => book.id === match.params.id
      );
      if (book) {
        setBook(book);
      } else {
        setUnknown(true);
      }
    };
    getBook();
  }, [match.params.id]);
  const [book, setBook] = useState({});

  return (
    <>
      {unknown && <Redirect to="/404" />}
      <div className="readmore_page">
        <div className="read_more">
          <div className="readmore_info flex">
            <div>
              <h1 className="text-center">{book.alt}</h1>
              {book.content}
            </div>
            <div className="imagelinks">
              <img src={book.image} alt={book.alt} className="readmore_image" />
              <div className="buy-links noflex">
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
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}
export default BookReadMore;
