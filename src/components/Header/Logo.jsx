import React, { Component } from "react";
import { Link } from "gatsby";

class Logo extends Component {
  render() {
    return (
      <Link className="Logo flex items-center md:mr-2" to="/">
       <svg className="lightbulb h-8 mr-2 md:mr-0 w-auto md:w-12 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453 680"><path d="M177 634a45 45 0 0 0 91 1z" fill="#294b5f"/><path d="M144 521l160 1c10-49 40-96 73-145 37-58 76-117 76-175C455 92 354 1 229 0S1 87 0 197c0 58 37 118 73 177 32 50 62 98 71 147z" fill="#f3f600"/><path d="M142 326a4 4 0 0 1 3-4 6 6 0 0 1 2 0 7 7 0 0 1 2 2 47 47 0 0 1 8 16 70 70 0 0 1 3 7 24 24 0 0 1-13-6 18 18 0 0 1-5-15zm77-39a8 8 0 0 1 7-4 9 9 0 0 1 7 4 15 15 0 0 1-1 13 59 59 0 0 1-6 10 45 45 0 0 1-6-10 14 14 0 0 1-1-13zm74 54a48 48 0 0 1 9-16 7 7 0 0 1 2-2 5 5 0 0 1 2 0c1 0 3 2 3 5a18 18 0 0 1-6 14 25 25 0 0 1-12 6l2-7zm-131 17l5 20 8 36 26 107h7l-23-109-8-36-4-19a102 102 0 0 0 52-32 103 103 0 0 0 52 33l-4 19-9 36-25 108h7l28-107 9-35 5-21a37 37 0 0 0 23-9 27 27 0 0 0 9-23 15 15 0 0 0-10-12 16 16 0 0 0-10 0 18 18 0 0 0-6 4 55 55 0 0 0-12 20l-3 10s-9 1-30-13a73 73 0 0 1-17-18 69 69 0 0 0 10-13 29 29 0 0 0 3-10 19 19 0 0 0-3-11 20 20 0 0 0-9-9 25 25 0 0 0-7-1 17 17 0 0 0-7 1 19 19 0 0 0-10 8 18 18 0 0 0-2 11 29 29 0 0 0 3 10 67 67 0 0 0 9 14 77 77 0 0 1-18 17c-21 14-30 13-30 13l-3-10a55 55 0 0 0-11-20 18 18 0 0 0-7-5 18 18 0 0 0-9 0 15 15 0 0 0-11 12 27 27 0 0 0 9 24 37 37 0 0 0 23 9z" fill="#b2b200"/><path fill="#294b5f" d="M153 584l1-21 140 2-1 21z"/><path fill="#294b5f" d="M164 626l1-21 117 1-1 21z"/><path fill="#93979a" d="M305 565v-21l-163-1v21l87 1-76 20v21h76l-65 20v21l117 1 1-21h-53l64-20v-21l-64-1 75-20h1z"/></svg> 
       <span className="hub-icon text-xl font-black">HUB</span>
       {/* <svg className="hub-icon h-5 md:h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 564 365"><path fill="currentColor" d="M506 169c31-14 42-46 42-71 0-60-34-98-90-98H337v249c-3 37-26 56-54 56-30 0-55-22-55-63V0h-64v152H64V0H0v360h64V211h100v31c0 80 54 123 119 123 19 0 37-4 54-12v7h131c61 0 96-50 96-108 0-33-19-73-58-83zM401 59h41c32 0 42 19 42 40s-10 45-40 45h-43zm52 241h-52v-49-52h49c38 0 49 30 49 52 0 27-13 49-46 49z"/></svg> */}
      </Link>
    );
  }
}

export default Logo;