import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Alert } from "react-bootstrap";
import logo from "../assets/Jone Aly.png";
import notify from "../assets/Vector(15).png";
import Notification from "./Notification";
import GeekLabComp2 from "./GeekLabComp2";
import styles from "../Styles/GeekLapsMain.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../data/Slices";
import { Badge } from "@mui/material";

const GeekLaps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const notification = useSelector((state) => state.GeekLabs.notification);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // console.log(searchQuery);
  // Filter notifications based on search query
  const FilteredNotification = () => {
    // item.name.toLowerCase().includes(searchQuery.toLowerCase())
    if (searchQuery !== "") {
      return notification.filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return notification;
  };

  return (
    <div className="mt-3">
      <Container fluid>
        <Row className="ms-2">
          <Col
            xs={{ order: 2 }}
            xl={{ order: 1 }}
            className="col-10 col-xl-8 me-2 ms-5"
          >
            <Row className="d-flex justify-content-between mb-4">
              <Col className="col-3 col-lg-2">
                <img src={logo} alt="" className="w-100" />
              </Col>
              <Col className="col-6 col-lg-9 ms-0">
                <Form.Control
                  className={`mx-auto text-start ${styles.search}`}
                  type="search"
                  placeholder="Search By Name"
                  style={{ color: "white" }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Col>
              <Col className="col-3 col-sm-2 col-lg-1 position-relative">
                {/* Add the green circle and number as an overlay */}
                <div className={styles.notifyContainer}>
                  <Badge badgeContent={8} color="success">
                    {" "}
                    <img src={notify} alt="" className="" />
                  </Badge>
                  {/* <div className={styles.notifyNumber}>5</div>{" "} */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className={` ${styles.NonificationCol} ms-auto`}>
                {FilteredNotification().length === 0 && (
                  <Alert key="warning" variant="warning">
                    {" "}
                    There is no Nonification
                  </Alert>
                )}
                {FilteredNotification().map(
                  ({ name, color, risk, amount, percent }, idx) => (
                    <Notification
                      key={idx} // Add a unique key
                      name={name}
                      color={color}
                      risk={risk}
                      amount={amount}
                      percent={percent}
                    />
                  )
                )}
              </Col>
            </Row>
          </Col>
          <GeekLabComp2 />
        </Row>
      </Container>
    </div>
  );
};

export default GeekLaps;
