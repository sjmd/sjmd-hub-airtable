import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../css/global.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="main-wrap flex flex-wrap overflow-hidden">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
