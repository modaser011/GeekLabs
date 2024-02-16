import React, { useEffect, useState } from "react";
import styles from "../Styles/Industeries.module.css";
import downArrow from "../assets/Vector(14).png";
import rightArrow from "../assets/[CITYPNG.COM]HD Youtube YT White Triangle Symbol Play Icon PNG - 2000x2000.png";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../data/Slices";
const Industeries = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const industriesData = useSelector((state) => state.GeekLabs.industries1);
  const industriesData2 = useSelector((state) => state.GeekLabs.industries2);

  //console.log(industriesData);
  return (
    <Row>
      <div
        onClick={() => setShow(!show)}
        className="d-flex"
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        <img
          className={styles.image}
          src={show ? downArrow : rightArrow}
          alt={show ? "rightArrow" : "downArrow"}
        />
        <h5 className="mb-3">Industry</h5>
      </div>
      {show && (
        <Row className="d-flex justify-content-between ms-1">
          <Col className={` ${styles.IndusteriesCol} mx-1 col-7 `}>
            {" "}
            {industriesData &&
              industriesData.map(({ name, img }, idx) => (
                <div
                  key={idx}
                  className={` ${
                    idx === 0 ? styles.industriesDiv1 : styles.industriesDiv
                  } d-flex `}
                >
                  <img src={img} alt="" className={styles.industImage} />
                  <p>{name}</p>
                </div>
              ))}
          </Col>
          <Col className={` ${styles.IndusteriesCol} me-2 col-4 `}>
            {" "}
            {industriesData &&
              industriesData2.map(({ name, img }, idx) => (
                <div
                  key={idx}
                  className={` ${
                    idx === 0 ? styles.industriesDiv1 : styles.industriesDiv
                  } d-flex `}
                >
                  <img src={img} alt="" className={styles.industImage} />
                  <p>{name}</p>
                </div>
              ))}
          </Col>
        </Row>
      )}
    </Row>
  );
};

export default Industeries;
