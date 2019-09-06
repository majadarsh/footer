import React from "react";
import autocad from "../img/autocad-logo.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-left ">
            <img className="autocadlogo" src={autocad} />
            <h4 className="mt-5 bannerheader">
              <strong>
                What's new in{" "}
                <span className="text-danger banner-heading">AutoCAD 2019</span>
              </strong>
            </h4>
            <p className="text-left mb-4">
              AutoCAD® 2019 software includes industry-specific toolsets;
              improved workflows <br />
              across desktop, web and mobile; and new features such as DWG™
              compare.
            </p>
            <a
              href="https://www.autodesk.com/products/autocad/free-trial"
              target="_blank"
              className="linkbtn"
            >
              Start your first FREE month
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
