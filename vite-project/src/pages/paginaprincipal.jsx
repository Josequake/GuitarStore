import React from "react";
import Paginaprincipalform from "../components/paginaprincipalform";
import Navbarform from "../components/navbarform";
import Footerform from "../components/footerform";

const paginaprincipal = () => {
  return (
    <div>
      <div>
      <Navbarform />
      </div>
      <div>
      <Paginaprincipalform />
      </div>
      <div>
      <footer>
        <Footerform />
      </footer>
      </div>
    </div>
  );
};

export default paginaprincipal;
