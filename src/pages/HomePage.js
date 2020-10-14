import React from "react";
import Book from "./../components/Book";
import { books } from "./../data/Books";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Adventures-in-Time | Home</title>
        <meta
          name="description"
          content="Welcome to the Navy Gray Series of carefully researched,
              historically accurate novels of the Civil War at Sea."
        />
      </Helmet>
      <div className="cover">
        <div className="intro flex">
          <div className="title-banner">
            <h3 className="title text-center">Hibberd V. B. Kline, III</h3>
            <h2 className="title text-center">Adventures-in-Time</h2>
            <h1 className="title text-center">
              Navy Gray Novels of the Civil War at Sea
            </h1>
          </div>
          <div className="home-intro">
            <p className="intro-text text-center">
              Welcome to the Navy Gray Series of carefully researched,
              historically accurate novels of the Civil War at Sea. These books
              attempt to reproduce the actual attitudes, conflicts, and
              challenges of the people of the 1860’s by immersing the reader in
              the politics, technology, activities, attitudes, and speech
              patterns of the mid-nineteenth century. <br /> Actual persons,
              places, and things are incorporated throughout. General attitudes,
              beliefs, and facts of daily life are authentic as understood by
              the writer.{" "}
            </p>
          </div>
        </div>
        <div className="book-list flex">
          {books.map((item, index) => {
            return <Book key={index} book={item} />;
          })}
        </div>
      </div>
    </>
  );
}
export default HomePage;
