import React from "react";

const copyright = () => {
  return (
    <section className="copyright">
      <div className="container">
        <ul class="nav justify-content-center">
          <li>
            <a href="#"> Privacy settings </a>
          </li>
          |
          <li>
            <a
              href="https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement"
              target="_blank"
            >
              {" "}
              Privacy/Cookies{" "}
            </a>
          </li>
          |
          <li>
            <a
              href="https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement#mixpanel"
              target="_blank"
            >
              {" "}
              About our Ads{" "}
            </a>
          </li>
          |
          <li>
            <a
              href="https://www.autodesk.com/company/legal-notices-trademarks"
              target="_blank"
            >
              {" "}
              Legal Notices & Trademarks{" "}
            </a>
          </li>
          |
          <li>
            <a
              href="https://www.autodesk.com/genuine/report-piracy"
              target="_blank"
            >
              {" "}
              Report Noncompliance{" "}
            </a>
          </li>
          |
          <li>
            <a href="https://www.autodesk.com/sitemap" target="_blank">
              {" "}
              Site map{" "}
            </a>
          </li>
          |
          <li>
            <a> © 2018 Autodesk Inc. All rights reserved </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default copyright;
