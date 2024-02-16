import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import dolar from "../assets/Group.png";
import Vector from "../assets/Vector.png";
import stat from "../assets/Vector(1).png";
import dolar2 from "../assets/Group(1).png";
import styles from "../Styles/Notification.module.css";
import { Badge } from "@mui/material";

const Notification = ({ name, risk, color, amount, percent }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <Row
        className={`${
          expand ? styles.ExpandNot_row : styles.Not_row
        } mx-auto mb-3`}
        onClick={() => setExpand(!expand)}
      >
        <Col className={`${styles.colNot} mt-2`}>
          <img src={dolar} alt="" className="me-4" />
          {name}
        </Col>
        <Col className={`${styles.colNot} mt-2`}>
          <img src={Vector} alt="" className="me-4" /> {amount}
        </Col>
        <Col
          className={`${styles.colNot} mt-2`}
          style={{ color: `${expand ? "black" : color}` }}
        >
          <img src={stat} alt="" className="me-4" /> {percent}
        </Col>
        <Col className={`${styles.colNot} mt-2`}>
          <img src={dolar2} alt="" className={` ${styles.img4} me-4`} /> {risk}
        </Col>
        {expand && (
          <Row className={` ${styles.internalRow} mx-auto`}>
            <div onClick={() => setExpand(true)}>
              <p className="mt-4">
                <b>$TSLA</b> just abubnced an acquisition of <b>$NFLX</b> at
                <b> $200 B</b>
              </p>
              <p style={{ marginTop: "-.2rem" }}>
                sfkldhgldjfhgkjdfhjkghdfjkhgkjhdfkjghkjdfhgjkhdfjkhgkjdhfkjghdkjfhgkjdhfjk
                sfkldhgldjfhgkjdfhjkghdfjkhgkjhdfkjghkjdfhgjkhdfjkhgkjdhfkjghdkjfhgkjdhfjk
                sfkldhgldjfhgkjdfhjkghdfjkhgkjhdfkjghkjdfhgjkhdfjkhgkjdhfkjghdkjfhgkjdhfjk
              </p>
            </div>
          </Row>
        )}
      </Row>
    </div>
  );
};

export default Notification;
