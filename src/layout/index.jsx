import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Nav from "../components/Header/Nav";
import Logo from "../components/Header/Logo";
import "../css/global.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      
      <div className="outerWrap">
        <header id="masthead" className="py-2 max-w-full flex justify-between md:justify-start md:pr-8">
          <Logo />
          <Nav />
        </header>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
          {children}
      </div>
    );
  }
}