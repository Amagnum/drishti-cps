import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 links">
            <h4>Useful Links</h4>
            <ul>
              <table className="footer_table">
                <tr>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; IIT Indore</a>{" "}
                    </li>
                  </td>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; Careers</a>{" "}
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; IRCC</a>{" "}
                    </li>
                  </td>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; E-Cell</a>{" "}
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <li>
                      {" "}
                      <a href="#">&gt; DSCE</a>{" "}
                    </li>
                  </td>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; WRCB</a>{" "}
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; TATA Centre</a>{" "}
                    </li>
                  </td>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; BETiC</a>{" "}
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; HRC Tender</a>{" "}
                    </li>
                  </td>
                  <td>
                    <li>
                      {" "}
                      <a href="#">&gt; Lab </a>{" "}
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <a href="#">&gt; Helpdesk</a>
                    </li>
                  </td>
                  <td>
                    <li>
                      <a href="#">&gt; </a>Gallery
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <a href="#">&gt; </a>Intranet
                    </li>
                  </td>
                  <td>
                    <li>
                      <a href="#">&gt; </a>MRBS
                    </li>
                  </td>
                </tr>
              </table>
            </ul>
          </div>
          <div className="col-12 col-md-4 contact">
            <h4>Contact Us</h4>
            <p>
              Indian Institute of Technology Indore, Khandwa Road, Simrol,
              Indore 453552, India
            </p>
            <li></li>
            <li>officedrishti@iiti.ac.in</li>
          </div>
          <div className="col-12 col-md-4 newsletter">
            <h4>Subscribe to our newsletter</h4>
            <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
            <input type="text" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="row footer-content">
          <ul>
            <li style={{ backgroundColor: "#FFF", padding: "0.5rem" }}>
              <a href="#">
                <span>
                  <img height="30" src="assets/linkedin.svg" alt="linkedin" />
                </span>
              </a>
            </li>
            <li style={{ backgroundColor: "#FFF", padding: "0.5rem" }}>
              <a href="#">
                <span>
                  <img height="30" src="assets/facebook.svg" alt="facebook" />
                </span>
              </a>
            </li>
            <li style={{ backgroundColor: "#FFF", padding: "0.5rem" }}>
              <a href="#">
                <span>
                  <img height="30" src="assets/twitter.svg" alt="twitter" />
                </span>
              </a>
            </li>
            <li style={{ backgroundColor: "#FFF", padding: "0.5rem" }}>
              <a href="#">
                <span>
                  <img height="30" src="assets/instagram.svg" alt="instagram" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="row copyright">
          <p>
            Copyright © 2020 IITI DRISHTI CPS FOUNDATION All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
