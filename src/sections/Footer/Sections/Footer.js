import React from "react";
import { Layout, Row, Col } from "antd";
import ThemedText from "../../../components/ThemedText/ThemedText";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";
const { Footer } = Layout;

const FooterPage = () => {
  // const isMobile = useMediaQuery(())
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Footer
      className="Footer"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: 0,
        paddingTop: 20,
        paddingBottom: 20,
        // textAlign: "center", // Center text in the footer
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", width: "100%" }}>
          <ThemedText
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: 0,
              textAlign: "center",
              width: "100%",
              display: "block",
              fontSize: `calc(100vw / 6)`,
            }}
          >
            Uphill
          </ThemedText>
        </div>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ color: "#fff" }}>Tools</h3>
            <p style={{ fontSize: "16px", color: "#fff", marginTop: "-10px" }}>
              At Uphill Travels, we believe that every <br />
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
            <p style={{ margin: 0, color: "white" }}>Hello@greenify.com</p>
            <p style={{ margin: 0, color: "white" }}>+32(2) 322 918 9484</p>
          </Col>
        </Row>
        <Row justify="space-around" style={{ marginTop: "10vh" }}>
          <Col span={10}>
            <div>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  textAlign: "left",
                  width: "100%",
                  fontSize: isMobile ? 14 : 18,
                }}
              >
                Copyright © Uphill Travels 2024
              </p>
            </div>
          </Col>
          <Col span={14}>
            <div align="right">
              <p
                style={{
                  margin: 0,
                  color: "white",
                  width: "100%",
                  fontSize: isMobile ? 14 : 18,
                  textAlign: "right",
                }}
              >
                <a href="/" style={{ color: "#fff", marginRight: "20px" }}>
                  Privacy Policy
                </a>
                <a href="/" style={{ color: "#fff" }}>
                  Terms Of Use
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterPage;
