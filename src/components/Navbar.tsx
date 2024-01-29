import "../css/navbar.css";

// images
import myLine from '../assets/myLine.png';

// icons
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";

// social icons
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export default function Navbar() {
  return (
    <div id="navbar-wrapper">
      <div id="navbar" className="wheight-100vh">
        <div className="wnavbar-section">
          <IoHomeOutline size={"20px"} className="clickable-icon wcolor-white" />
          <IoLocationOutline size={"20px"} className="clickable-icon wcolor-white" />
          <GoInfo size={"20px"} className="clickable-icon wcolor-white" />
        </div>
        <div className="wnavbar-section" id="navbar-middle">
          <img src={myLine} />
          <div>
            <p
              id="text"
              className="wcolor-white wrotate-90 wfs-2rem wtext-uppercase"
            >
              weatherapp
            </p>
          </div>
          <img src={myLine} />
        </div>
        <div className="wnavbar-section">
          <CiFacebook
            className="clickable-icon wcolor-white"
            size={"20px"}
          />
          <CiYoutube className="clickable-icon wcolor-white" size={"20px"} />
          <CiTwitter className="clickable-icon wcolor-white" size={"20px"} />
        </div>
      </div>
    </div>
  );
}
