import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>audio descrption</li>
              <li>Investore haltation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>jobs</li>
              <li>Cockie Prefernce</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Terms of Use</li>
              <li>Croporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Mideia Center</li>
              <li>Privacy</li>
              <li>Contact Use</li>
            </ul>
          </div>
        </div>
        <div className="copy-write">&Coppy:1997-2026 Netflix,Inc</div>
      </div>
    </div>
  );
}

export default Footer;
