import React, { Component } from "react";
import Architech from "../icons/Architech.png";
import AutocadElectrical from "../icons/Autocad-Electrical.png";
import Autocadmap3d from "../icons/Autocad-map-3d.png";
import Autocadmechanical from "../icons/Autocad-mechanical.png";
import Autocadmep from "../icons/Autocad-mep.png";
import Autocadplant3d from "../icons/Autocad-plant-3d.png";
import Autocadrasterdesign from "../icons/Autocad-raster-design.png";

import ArchitechMobile from "../icons/architecture-icon-blue-1.png";
import AutocadElectricalMobile from "../icons/electrical-icon-blue-1.png";
import Autocadmap3dMobile from "../icons/map-3d-icon-blue-1.png";
import AutocadmechanicalMobile from "../icons/mechanical-icon-blue-1.png";
import AutocadmepMobile from "../icons/mep-icon-blue-1.png";
import Autocadplant3dMobile from "../icons/plant-3d-icon-blue-1.png";
import AutocadrasterdesignMobile from "../icons/raster-icon-blue-1.png";

export const toolsets = [
  {
    label: () => (
      <p>
        AutoCAD <br /> Architecture
      </p>
    ),
    description:
      "Speed architectural design and drafting with an industry-specific toolset that includes 8,000+ intelligent objects and styles.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-architecture",
    imgSrc: Architech
  },
  {
    label: () => (
      <p>
        AutoCAD <br /> Electrical
      </p>
    ),
    description:
      "Efficiently create, modify, and document electrical controls systems with an industry-specific toolset for electrical design.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-electrical",
    imgSrc: AutocadElectrical
  },
  {
    label: () => (
      <p>
        AutoCAD <br /> Map 3D
      </p>
    ),
    description:
      "Incorporate geographic information system and CAD data with an industry-specific toolset for GIS and 3D mapping.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-map-3d",
    imgSrc: Autocadmap3d
  },
  {
    label: () => (
      <p>
        AutoCAD <br /> Mechanical
      </p>
    ),
    description:
      "Design faster with an industry-specific toolset for mechanical engineering including 700,000+ intelligent parts and features.",
    url: "https://www.autodesk.com/products/autocad-mechanical/overview",
    imgSrc: Autocadmechanical
  },
  {
    label: () => (
      <p>
        AutoCAD <br /> MEP
      </p>
    ),
    description:
      "Draft, design, and document building systems with an industry-specific toolset for MEP (mechanical, electrical, and plumbing).",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-mep",
    imgSrc: Autocadmep
  },
  {
    label: () => (
      <p>
        AutoCAD <br /> Plant 3D
      </p>
    ),
    description:
      "Use an industry-specific toolset for plant design and engineering to create P&IDs and integrate them into a 3D plant design model.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-plant-3d",
    imgSrc: Autocadplant3d
  },
  {
    label: () => (
      <p>
        AutoCAD <br /> Raster Design
      </p>
    ),
    description:
      "Use raster design tools in a specialized toolset to edit scanned drawings and convert raster images to DWG™ objects.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-raster-design",
    imgSrc: Autocadrasterdesign
  }
];

export const toolsetsMobile = [
  {
    label: "AutoCAD Architecture",
    description:
      "Speed architectural design and drafting with an industry-specific toolset that includes 8,000+ intelligent objects and styles.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-architecture",
    imgSrc: ArchitechMobile
  },
  {
    label: "AutoCAD Electrical",
    description:
      "Efficiently create, modify, and document electrical controls systems with an industry-specific toolset for electrical design.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-electrical",
    imgSrc: AutocadElectricalMobile
  },
  {
    label: "AutoCAD  Map 3D",
    description:
      "Incorporate geographic information system and CAD data with an industry-specific toolset for GIS and 3D mapping.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-map-3d",
    imgSrc: Autocadmap3dMobile
  },
  {
    label: "AutoCAD  Mechanical",
    description:
      "Design faster with an industry-specific toolset for mechanical engineering including 700,000+ intelligent parts and features.",
    url: "https://www.autodesk.com/products/autocad-mechanical/overview",
    imgSrc: AutocadmechanicalMobile
  },
  {
    label: "AutoCAD MEP",
    description:
      "Draft, design, and document building systems with an industry-specific toolset for MEP (mechanical, electrical, and plumbing).",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-mep",
    imgSrc: AutocadmepMobile
  },
  {
    label: "AutoCAD Plant 3D",
    description:
      "Use an industry-specific toolset for plant design and engineering to create P&IDs and integrate them into a 3D plant design model.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-plant-3d",
    imgSrc: Autocadplant3dMobile
  },
  {
    label: "AutoCAD Raster Design",
    description:
      "Use raster design tools in a specialized toolset to edit scanned drawings and convert raster images to DWG™ objects.",
    url:
      "https://www.autodesk.com/products/autocad/included-toolsets/autocad-raster-design",
    imgSrc: AutocadrasterdesignMobile
  }
];
