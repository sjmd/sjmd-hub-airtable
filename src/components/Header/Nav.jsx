import React, { Component } from "react";
import { Link } from "gatsby";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav flex items-center overflow-x-scroll md:ml-0" role="navigation">
        <Link className="px-2 py-3 md:py-4 md:mr-2 theme-font" to="/read-this">Read</Link>
        <Link className="px-2 py-3 md:py-4 md:mr-2 theme-font" to="/watch-this">Watch</Link>
        <Link className="px-2 py-3 md:py-4 md:mr-2 theme-font" to="/listen-to-this">Listen</Link>
        <Link className="px-2 py-3 md:py-4 md:mr-2 theme-font" to="/click-this">Click</Link>
        <Link className="px-2 py-3 md:py-4 md:mr-2 theme-font" to="/facilitate-this">Facilitate</Link>
      </nav>
    );
  }
}

export default Nav;