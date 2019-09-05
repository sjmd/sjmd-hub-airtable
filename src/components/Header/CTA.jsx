import React, { Component } from "react";
import { Link } from "gatsby";

class CTA extends Component {
  render() {
    return (
      <nav className="CTA flex items-center" role="navigation">
        <a className="p-2 md:py-4 flex items-center text-blue-700 theme-font uppercase tracking-wider" data-formkit-toggle="96e99be32b" href="https://social-justice-minus-dogma.ck.page/96e99be32b">
            <span className="text-sm mr-1">Submit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-5 text-blue-500" viewBox="0 0 576 512"><path fill="currentColor" d="M384 128H256V0h6.1a24 24 0 0 1 17 7l97.9 98a24 24 0 0 1 7 16.9zm0 260.8V488a24 24 0 0 1-24 24H24a24 24 0 0 1-24-24V24A24 24 0 0 1 24 0h200v136a24 24 0 0 0 24 24h136v91.7L288 347v69h69zm-128-5a11.3 11.3 0 0 1-9.4-6.3 44.9 44.9 0 0 0-66-14.2l-13.8-41.6a24 24 0 0 0-45.6 0L103 376.3a11.2 11.2 0 0 1-10.6 7.7H80a16 16 0 0 0 0 32h12.4a43.2 43.2 0 0 0 41-29.5l10.6-32 16.8 50.6a16 16 0 0 0 29.5 2l7.7-15.3a11 11 0 0 1 10-6.2 11 11 0 0 1 10.2 6.5A43 43 0 0 0 256 416z" opacity=".4"/><path fill="currentColor" d="M246.7 377.5a44.9 44.9 0 0 0-66-14.2l-14-41.6a24 24 0 0 0-45.5 0L103 376.3a11.2 11.2 0 0 1-10.6 7.7H80a16 16 0 0 0 0 32h12.4a43.2 43.2 0 0 0 41-29.5l10.6-32 16.8 50.6a16 16 0 0 0 29.5 2l7.7-15.3a11 11 0 0 1 10-6.2 11 11 0 0 1 10.2 6.5A43 43 0 0 0 256 416v-32.1a11.3 11.3 0 0 1-9.3-6.3zM288 347v69h69l161.7-162.8-68-67.9zm280.5-179.7l-31.8-31.8a25.5 25.5 0 0 0-36 0l-27.3 27.2 67.9 67.9 27.3-27.3a25.4 25.4 0 0 0 0-36z"/></svg>            
        </a>
        <a className="p-2 md:p-4 flex items-center text-blue-700 theme-font uppercase tracking-wider" data-formkit-toggle="96e99be32b" href="https://social-justice-minus-dogma.ck.page/96e99be32b">
            <span className="text-sm mr-1">Subscribe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-5 text-blue-500" viewBox="0 0 35.8 35.8"><path fill="currentColor" d="M31.3 6.7V18l-11.4 8.3a3.6 3.6 0 0 1-4 0L4.5 18V6.7a2.2 2.2 0 0 1 2.2-2.2h22.4a2.2 2.2 0 0 1 2.2 2.2z" opacity=".4"/><path fill="currentColor" d="M23.5 15.7H12.3a1.1 1.1 0 0 0-1.1 1.1v1.1a1.1 1.1 0 0 0 1.1 1.1h11.2a1.1 1.1 0 0 0 1.1-1.1v-1.1a1.1 1.1 0 0 0-1.1-1.1zm1.1-4.5a1.1 1.1 0 0 0-1.1-1.1H12.3a1.1 1.1 0 0 0-1.1 1.1v1.1a1.1 1.1 0 0 0 1.1 1.1h11.2a1.1 1.1 0 0 0 1.1-1.1zM23 2.9C21.9 2 19.5 0 17.9 0s-4 2-5.1 2.9l-2.2 1.6h14.6zM4.5 9l-3.2 2.4A3.3 3.3 0 0 0 0 14v.8L4.5 18zm30 2.4L31.3 9v9l4.5-3.2V14a3.3 3.3 0 0 0-1.3-2.6zM17.9 29.2a5.7 5.7 0 0 1-3.3-1.1L0 17.5v14.9a3.4 3.4 0 0 0 3.4 3.4h29.1a3.4 3.4 0 0 0 3.3-3.4V17.5L21.2 28.1a5.7 5.7 0 0 1-3.3 1.1z"/></svg>
        </a>
      </nav>
    );
  }
}

export default CTA;