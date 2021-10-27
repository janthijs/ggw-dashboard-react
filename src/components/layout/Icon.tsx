import * as React from "react";
import "./Icon.scss";

const Icon = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="icon-wrapper">
      <div className="icon-container col-12">
        <img
          className="icon"
          src={`static/icons/${icon}`}
          alt={`Icoon voor ${title}`}
        />
      </div>
      {title && <div className="title col-12">{title}</div>}
    </div>
  );
};

export default Icon;
