import React from "react";

import fb from "../icons/fb.png";
import insta from "../icons/insta.png";
import ln from "../icons/in.png";
import twitter from "../icons/twitter.png";
import global from "../icons/worldwide.png";
import yt from "../icons/youtube.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-md-2 socialicon footerblock">
            <h6 className="">FOLLOW AUTODESK</h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="https://www.facebook.com/autodesk" target="_blank">
                  <img src={fb} /> Facebook
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.instagram.com/autodesk" target="_blank">
                  <img src={insta} /> Instagram
                </a>
              </li>
              <li class="nav-item">
                <a href="https://twitter.com/autodesk" target="_blank">
                  <img src={twitter} /> Twitter
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.linkedin.com/company/autodesk"
                  target="_blank"
                >
                  <img src={ln} /> LinkedIn
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.youtube.com/user/Autodesk" target="_blank">
                  <img src={yt} /> Youtube
                </a>
              </li>
            </ul>
            <br />
            <a
              href="https://www.autodesk.com/social-media"
              className=""
              target="_blank"
            >
              All social media
            </a>
            <br />
            <a href="https://www.autodesk.com/site-selector" target="_blank">
              <img src={global} /> Worldwide sites
            </a>
          </div>

          <div className="col-md-2 text-left footerblock">
            <h6>PRODUCTS</h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="https://www.autodesk.com/free-trials" target="_blank">
                  Free product trials
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/solutions/3d-cad-software"
                  target="_blank"
                >
                  3D CAD software
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/collections/architecture-engineering-construction/overview"
                  target="_blank"
                >
                  Civil engineering
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/products/autocad-lt/overview"
                  target="_blank"
                >
                  Drafting
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/solutions/manufacturing"
                  target="_blank"
                >
                  Manufacturing
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/solutions/product-design/overview"
                  target="_blank"
                >
                  Product design
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.autodesk.com/solutions" target="_blank">
                  Find by industry
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.autodesk.com/collections" target="_blank">
                  Industry collections
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 text-left footerblock">
            <h6>BUYING</h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="https://www.autodesk.com/buy-online" target="_blank">
                  Buy online
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/store/all-promotions"
                  target="_blank"
                >
                  Special offers
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/store-footer-help-account?mktvar004=ilt_wwm_amer_us_nc__Footer_SupportAssistance_ManageAct"
                  target="_blank"
                >
                  Manage your account
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://help.autodesk.com/view/STORE/ENU/"
                  target="_blank"
                >
                  Help with buying
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/store-footer-help-download?mktvar004=ilt_wwm_amer_us_nc__Footer_ShoppingWithUs_DLSoftware#download-info"
                  target="_blank"
                >
                  Download your software
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/store-footer-help-return?mktvar004=ilt_wwm_amer_us_nc__Footer_ShoppingWithUs_OrderReturn#returns-and-cancellations"
                  target="_blank"
                >
                  Returns &amp; refunds
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.autodesk.com/renewal" target="_blank">
                  Subscription renewal
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 text-left footerblock">
            <h6>SUPPORT & LEARNING</h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  href="https://knowledge.autodesk.com/support"
                  target="_blank"
                >
                  Product support
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://knowledge.autodesk.com/customer-service/download-install"
                  target="_blank"
                >
                  Software installation, registration &amp; licensing
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://knowledge.autodesk.com/downloads"
                  target="_blank"
                >
                  Updates &amp; service packs
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://knowledge.autodesk.com/support/system-requirements"
                  target="_blank"
                >
                  System requirements
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/education/home?mktvar004=ilt_wwm_amer_us_nc__Footer_SubscNSoftware_EDU"
                  target="_blank"
                >
                  Students &amp; educators
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="http://au.autodesk.com/au-online/overview"
                  target="_blank"
                >
                  Classes on demand
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.autodesk.com/events" target="_blank">
                  Events &amp; training
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/training-and-certification/overview"
                  target="_blank"
                >
                  Training &amp; certification
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="http://au.autodesk.com/?mktvar004=ilt_wwm_amer_us_nc__Footer_ADSK_AU"
                  target="_blank"
                >
                  Autodesk University
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-left footerblock">
            <h6>AUTODESK</h6>
            <p>
              <i>
                Autodesk is a leader in 3D design, engineering and entertainment
                software.
              </i>
            </p>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  data-wat-val="about us"
                  href="https://www.autodesk.com/company"
                  target="_blank"
                >
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.autodesk.com/careers" target="_blank">
                  Careers
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/company/contact-us"
                  target="_blank"
                >
                  Contact us
                </a>
              </li>
              <li class="nav-item">
                <a href="http://investors.autodesk.com/" target="_blank">
                  Investor relations
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/trust/overview"
                  target="_blank"
                >
                  Trust center
                </a>
              </li>
              <li class="nav-item">
                <a href="http://news.autodesk.com/" target="_blank">
                  Newsroom
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/company/suppliers"
                  target="_blank"
                >
                  Suppliers
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.autodesk.com/affiliate-program/overview"
                  target="_blank"
                >
                  Affiliate program
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
