import React, { useState } from "react";
import styles from "../Styles/Sidebar.module.css";
import logo from "../assets/street suite logo-04 1.png";
import alert from "../assets/Vector(2).png";
import trining from "../assets/Vector(3).png";
import Automation from "../assets/Group(4).png";
import Portfolio from "../assets/Vector(5).png";
import Trading from "../assets/Vector(4).png";
import person from "../assets/Group 101(2).png";
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={styles.sidebar}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={styles.partialSidebar}>
        <div className={isExpanded ? styles.fullSidebar : ""}>
          <div className="d-flex">
            <img
              src={logo}
              alt="Logo"
              className={`mx-auto w-75 h-75 ${styles.mainLogo} ${
                isExpanded ? `mt-4 mb-4` : `mt-4 mb-5`
              } ${isExpanded ? styles.visible : styles.hidden}`}
            />
          </div>
          <div>
            {!isExpanded && (
              <div className="d-block">
                <img
                  src={alert}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4 `}
                />
                <img
                  src={trining}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={Automation}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={Portfolio}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={Trading}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={person}
                  alt="Logo"
                  className={`${styles.person2} ms-3 me-2`}
                />
              </div>
            )}
            {isExpanded && (
              <>
                <div>
                  <div
                    style={{ color: "white" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={alert}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Alerts
                  </div>
                  <div
                    style={{ color: "white" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={trining}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Training
                  </div>
                  <div
                    style={{ color: "gray" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={Automation}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Automation
                  </div>
                  <div
                    style={{ color: "gray" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={Portfolio}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Portfolio
                  </div>

                  <div
                    style={{ color: "gray" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={Trading}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Trading
                  </div>
                </div>
                <div className={styles.personWrapper}>
                  <div className={` ${styles.Links} mb-3 d-flex`}>
                    <img
                      src={person}
                      alt="Logo"
                      className={`${styles.person} ms-4 me-2`}
                    />
                    <div className="d-block" style={{ marginTop: "-3px" }}>
                      <p
                        style={{
                          fontSize: "17px",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Moni Roy
                      </p>
                      <br />
                      <p style={{ marginTop: "-2.5rem", color: "gray" }}>
                        Beginner
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
