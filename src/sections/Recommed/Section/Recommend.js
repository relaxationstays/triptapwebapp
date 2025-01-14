import { Col, Row } from "antd";
import React from "react";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { BestSection, recommendSection } from "../../../data/Data";
import ThemedButton from "../../../components/Button/Button";
import { centerDiv } from "../../../styles/Format";
import { useMediaQuery } from "react-responsive";

export default function Recommend() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div style={{ marginTop: "10vh", marginBottom: "10vh" }}>
      <Row className="container">
        <Col span={24} md={12}>
          <ThemedText style={{ fontSize: "3rem", fontWeight: "bold" }}>
            {recommendSection.name}
          </ThemedText>
        </Col>
        <Col span={24} md={12}>
          <ThemedText>{recommendSection.text2}</ThemedText>
          <br />
          <ThemedText>{recommendSection.text2x}</ThemedText>
        </Col>
      </Row>
      <br />

      <div className="container">
        <Row gutter={[16, 16]}>
          {recommendSection.array.map((item) => (
            <Col
              span={24}
              md={12}
              lg={6}
              key={item.title}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: isMobile ? "30vh" : "40vh",
                  borderRadius: 20,
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: 20,
                  margin: "20px 0",
                  position: "relative",
                  // textAlign: "center", // Center-align text horizontally
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "bottom",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ color: "white" }}>{item.description}</div>
                </div>
                <ThemedButton
                  type="button"
                  style={{
                    width: "100%",
                    padding: 10,
                    // background: "green",
                    border: "none",
                    borderRadius: 5,
                  }}
                >
                  {item?.action}
                </ThemedButton>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
