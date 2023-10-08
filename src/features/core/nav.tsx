import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <nav className="main-nav navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="mx-auto">
            <Link className="navbar-item py-2 title is-3 has-text-white" to="/">JONS REFLECTIONS</Link>
          </div>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item has-text-centered" to="/">HOME</Link>
          <Link className="navbar-item has-text-centered" to="/reflections">REFLECTIONS</Link>
          <Link className="navbar-item has-text-centered" to="/about">ABOUT</Link>
        </div>
      </nav>
    );
  }

export default Nav;