import React, { Component } from "react";
import { Link } from "gatsby";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav flex items-center overflow-x-scroll flex-grow mx-2" role="navigation">
        <Link className="p-1 md:py-4 md:mr-2 theme-font" to="/read-this">Read</Link>
        <Link className="p-2 md:py-4 md:mr-2 theme-font" to="/watch-this">Watch</Link>
        <Link className="p-2 md:py-4 md:mr-2 theme-font" to="/listen-to-this">Listen</Link>
        <Link className="p-2 md:py-4 md:mr-2 theme-font" to="/click-this">Click</Link>
        <Link className="p-2 md:py-4 md:mr-2 theme-font" to="/facilitate-this">Facilitate</Link>
      </nav>
    );
  }
}

export default Nav;