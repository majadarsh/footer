import React from "react";
import educator from "../icons/educator.png";
import Call from "../icons/Call.png";
import Talk from "../icons/Talk.png";

export const subscribeData = [
  {
    label: () => (
      <span>
        AUTOCAD
        <br />
        <br />
      </span>
    ),
    description:
      "Now includes specialised toolsets, the new AutoCAD web app and the AutoCAD mobile app.",
    price: "$ 1,575.00 /year",
    planUrl:
      "https://www.autodesk.com/products/autocad/subscribe?referrer=%2Fproducts%2Fautocad%2Fsubscribe",
    linkUrl: "https://www.autodesk.com/products/autocad/free-trial",
    linkText: "Download Free Trial >"
  },
  {
    label: () => (
      <span>ARCHITECTURE, ENGINEERING & CONSTRUCTION COLLECTION</span>
    ),
    description: "Get AutoCAD + Revit + Civil 3D + more",
    price: "$ 2,755.00 /year",
    planUrl:
      "https://www.autodesk.com/collections/architecture-engineering-construction/subscribe?plc=AECCOL&term=1-YEAR&support=ADVANCED&quantity=1",
    linkUrl:
      "https://www.autodesk.com/collections/architecture-engineering-construction/overview",
    linkText: "Learn more about the collection >"
  },
  {
    label: () => <span>PRODUCT DESIGN & MANUFACTURING COLLECTION</span>,
    description: "Get AutoCAD + Inventor + more ",
    price: "$ 2,525.00 /year",
    planUrl:
      "https://www.autodesk.com/collections/product-design-manufacturing/subscribe?referrer=%2Fcollections%2Fproduct-design-manufacturing%2Fsubscribe&plc=PDCOLL&term=1-YEAR&support=ADVANCED&quantity=1",
    linkUrl:
      "https://www.autodesk.com/collections/product-design-manufacturing/overview",
    linkText: "Learn more about the collection >"
  }
];

export const helpSubscribeData = [
  {
    icon: educator,
    description:
      "Are you a student or educator? Get AutoCAD free for 3 years (US site)",
    url: "https://www.autodesk.com/education/free-software/autocad"
  },
  {
    icon: Talk,
    description: "Talk to a sales representative 1-855-233-9694 ",
    url: "tel:18552239694"
  },
  {
    icon: Call,
    description: "Have Autodesk contact you",
    url: "https://www.autodesk.com/contact?product=ACD"
  }
];
