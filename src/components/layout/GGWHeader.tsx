import * as React from "react";

const GGWHeader = () => {
  return (
    <div className="container-fluid">
      <div className="ams-header">
        <header>
          <img
            className="ams-header__logo"
            src="../static/logo-short.svg"
            height="45px"
            alt="Logo gemeente Amsterdam"
          />
        </header>
        <span className="header-title">
          <b>Gebied in beeld</b>
        </span>
      </div>
    </div>
  );
};

export default GGWHeader;
