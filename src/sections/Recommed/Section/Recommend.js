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
            <Col span={24} md={12} lg={6} key={item.title}>
              <div
                style={{
                  ...centerDiv,
                  height: isMobile ? "30vh" : "40vh",
                  borderRadius: 20,
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: 20,
                  margin: "20px 0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    marginTop: "auto",
                    height: "50%",
                    position: "relative",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "white",
                        width: "45%",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ color: "white" }}>{item.description}</div>
                    <br />
                  </div>
                  <ThemedButton
                    type="button"
                    style={{
                      width: "100%",
                      padding: 10,
                      background: "white",
                      border: "none",
                      marginTop: "5vh",
                      marginBottom: "10vh",
                      color: "black",
                    }}
                  >
                    {item?.action}
                  </ThemedButton>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
