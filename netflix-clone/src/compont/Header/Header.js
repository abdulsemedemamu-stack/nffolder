// import React from "react";
// import "../Header/Header.css";
// import nlogo from "../../asset/image/nlogo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

// function Header() {
//   return (
//     <div className="outer-h">
//       <div className="header-raper">
//         <div className="internal-wraper">
//           <ul>
//             <li>
//               <img src={nlogo} alt="netflixlogo" width={100} />
//             </li>
//             <li>Home</li>
//             <li>Movies</li>
//             <li>TV Shows</li>
//             <li>Latest</li>
//             <li>My List</li>
//             <li>Browse by Language</li>
//           </ul>
//         </div>

//         <div className="header-right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>
//             <li>
//               <NotificationsIcon />
//             </li>
//             <li>
//               <AccountBoxIcon />
//             </li>
//             <li>
//               <ArrowDropDownCircleIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import "./Header.css";
import nlogo from "../../asset/image/nlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-cotainer">
        <div className="header-left">
          <ul>
            <li>
              <img src={nlogo} alt="Netflix Logo" width={100} />
            </li>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
