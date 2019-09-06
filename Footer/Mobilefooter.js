import React from "react";
import fb from "../icons/fb.png";
import insta from "../icons/insta.png";
import ln from "../icons/in.png";
import twitter from "../icons/twitter.png";
import global from "../icons/worldwide.png";

const Mobilefooter = () => {
  return (
    <section className="mfooter">
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 socialicon">
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
            </ul>
            <br />
            <a
              href="https://www.autodesk.com/social-media"
              className=""
              target="_blank"
            >
              All social media
            </a>
            <hr />
            <a href="https://www.autodesk.com/site-selector" target="_blank">
              <img src={global} /> Worldwide sites
            </a>

            <hr />
          </div>

          <div className="col-12 text-left">
            <a href="https://www.autodesk.com/products" target="_blank">
              PRODUCTS
            </a>
            <a href="https://www.autodesk.com/store" target="_blank">
              BUYING
            </a>
            <a href="https://knowledge.autodesk.com/support" target="_blank">
              SUPPORT & LEARNING
            </a>
            <a href="https://www.autodesk.com/company" target="_blank">
              AUTODESK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mobilefooter;
