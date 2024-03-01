import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src="./images/logo192.png" alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((val, ind) => {
          // Dynamically create icon component based on val.icon
          const IconComponent = val.icon;

          return (
            <div
              className={selected === ind ? "menuitem active" : "menuitem"}
              key={ind}
              onClick={() => {
                setSelected(ind);
              }}
            >
              <div>
                {/* Render the icon component */}
                <IconComponent />
              </div>
              <span>{val.heading}</span>
            </div>
          );
        })}
        <div className="menuitem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
