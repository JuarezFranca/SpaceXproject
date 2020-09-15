import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faCubes,
  faBook
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Rockets",
    path: "/rockets",
    icon: <FontAwesomeIcon icon={faRocket} />
  },
  {
    label: "capsules",
    path: "/capsules",
    icon: <FontAwesomeIcon icon={faCubes} />
  },
  {
    label: "history",
    path: "/history",
    icon: <FontAwesomeIcon icon={faBook} />
  }
];

export default navButtons;