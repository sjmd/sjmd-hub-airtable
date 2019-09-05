import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Logo from "../components/Header/Logo";
import Nav from "../components/Header/Nav";
import CTA from "../components/Header/CTA";
import "../css/global.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      
      <div className="outerWrap">
        <header id="masthead" className="p-1 md:px-0 flex justify-between">
            <Logo />
            <Nav />
            <CTA />
        </header>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
          {children}
      </div>
    );
  }
}