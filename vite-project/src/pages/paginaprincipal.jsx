import React from "react";
import Paginaprincipalform from "../components/paginaprincipalform";
import Navbarform from "../components/navbarform";
import Footerform from "../components/footerform";

const paginaprincipal = () => {
  return (
    <div>
      <Navbarform />
      <Paginaprincipalform />
      <footer>
        <Footerform />
      </footer>
    </div>
  );
};

export default paginaprincipal;
