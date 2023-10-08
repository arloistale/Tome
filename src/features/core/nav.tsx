import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <nav className="main-nav navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="mx-auto py-2">
              <Link className="navbar-item title is-3 has-text-white" to="/">JONS REFLECTIONS</Link>
            </div>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item has-text-centered" to="/">HOME</Link>
            <Link className="navbar-item has-text-centered" to="/reflections">REFLECTIONS</Link>
            <Link className="navbar-item has-text-centered" to="/about">ABOUT</Link>
          </div>
        </div>
      </nav>
    );
  }

export default Nav;