import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <nav className="main-nav navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <div className="container is-fluid">
              <h1 className="title is-3 py-2 has-text-white">JONS REFLECTIONS</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">HOME</Link>
          <Link className="navbar-item" to="/reflections">REFLECTIONS</Link>
          <Link className="navbar-item" to="/about">ABOUT</Link>
        </div>
      </nav>
    );
  }

export default Nav;