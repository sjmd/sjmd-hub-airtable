import React, { Component } from "react";
import { Link } from "gatsby";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav flex items-center overflow-x-scroll md:ml-0" role="navigation">
        <Link className="p-2 md:py-4 md:px-2 md:mr-2 theme-font" to="/read-this">Read</Link>
        <Link className="p-2 md:py-4 md:px-2 md:mr-2 theme-font" to="/watch-this">Watch</Link>
        <Link className="p-2 md:py-4 md:px-2 md:mr-2 theme-font" to="/listen-to-this">Listen</Link>
        <Link className="p-2 md:py-4 md:px-2 md:mr-2 theme-font" to="/click-this">Click</Link>
        <Link className="p-2 md:py-4 md:px-2 md:mr-2 theme-font" to="/facilitate-this">Facilitate</Link>
      </nav>
    );
  }
}

export default Nav;