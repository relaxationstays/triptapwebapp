import React from "react";
import { Layout, Row, Col } from "antd";
import ThemedText from "../../../components/ThemedText/ThemedText";

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <Footer style={{ backgroundColor: "#000", color: "#fff", padding: 0 }}>
      <div className="container">
        <Row justify="center">
          <Col>
            <ThemedText
              style={{
                fontSize: "6rem",
                fontWeight: "bold",
                color: "#fff",
                padding: 0,
              }}
            >
              TripTrap.
            </ThemedText>
          </Col>
        </Row>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ color: "#fff" }}>Tools</h3>
            <p style={{ fontSize: "16px", color: "#fff", marginTop: "-10px" }}>
              At TripTrap, we believe that every <br />
              journey is an opportunity for
              <br /> adventure, discovery, <br />
              and unforgettable experiences.
            </p>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <h3 style={{ color: "#fff" }}>Navigation</h3>
            <p style={{ margin: 0 }}>Services</p>
            <p style={{ margin: 0 }}>Products</p>
            <p style={{ margin: 0 }}>About</p>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <h3 style={{ color: "#fff" }}>Tools</h3>
            <p style={{ margin: 0 }}>Visual Sales</p>
            <p style={{ margin: 0 }}>Trend Analysis</p>
            <p style={{ margin: 0 }}>Customer Segmentation</p>
            <p style={{ margin: 0 }}>Real-Time Dashboard</p>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <h3 style={{ color: "#fff" }}>Address</h3>
            <p style={{ margin: 0 }}>8502 Preston Rd. Inglewood</p>
            <p style={{ margin: 0 }}>Maine</p>
            <p style={{ margin: 0 }}>98380</p>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <h3 style={{ color: "#fff" }}>Contact</h3>
            <ThemedText style={{ margin: 0, color: "white" }}>
              Hello@greenify.com
            </ThemedText>
            <ThemedText style={{ margin: 0, color: "white" }}>
              +32(2) 322 918 9484
            </ThemedText>
          </Col>
        </Row>
        <Row justify="space-around" style={{ marginTop: "10vh" }}>
          <Col>
            <ThemedText style={{ margin: 0, color: "white" }}>
              Copyright © TripTrap 2023
            </ThemedText>
          </Col>
          <Col>
            <div align="right">
              <ThemedText style={{ margin: 0, color: "white" }}>
                <a href="/" style={{ color: "#fff", marginRight: "20px" }}>
                  Privacy Policy
                </a>
                <a href="/" style={{ color: "#fff" }}>
                  Terms Of Use
                </a>
              </ThemedText>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterPage;
