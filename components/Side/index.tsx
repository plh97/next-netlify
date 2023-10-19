import React from "react";
import routes from "@/routes";
import SideItem from "./SideItem";

import "./index.scss";

export default function Side() {
  return (
    <div className="Side__container">
      <div className="Side__nav">
        {routes
          .filter((route) => route.content)
          .map((route) => (
            <SideItem
              icon={route.icon}
              key={route.path}
              className="Side__nav-item"
              path={route.path ?? ""}
            >
              {route.content}
            </SideItem>
          ))}
      </div>
    </div>
  );
}
