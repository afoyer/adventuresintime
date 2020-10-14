import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/" className="NavLink">
        <h1>Home</h1>
      </Link>

      <div className="NavLink dropdown">
        <h1>Books</h1>
        <div className="dropdown-content">
          <Link to="/books/conflicting_loyalties">Conflicting Loyalties</Link>
          <Link to="/books/for_arms">For Arms</Link>
          <Link to="/books/home_at_war">Home At War</Link>
        </div>
      </div>
      <Link to="/about-the-author" className="NavLink">
        <h1>Author</h1>
      </Link>
      <div className="contact-div">
        <p className="contactme text-center">Contact:</p>
        <p className="contact email text-center">
          <a href="mailto:name@email.com">hibberdkline.author@gmail.com</a>
        </p>
      </div>
    </nav>
  );
}
export default NavBar;
