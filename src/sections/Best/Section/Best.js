import { Col, Row } from "antd";
import React from "react";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { BestSection } from "../../../data/Data";
import ThemedButton from "../../../components/Button/Button";
import { centerDiv } from "../../../styles/Format";
import { useMediaQuery } from "react-responsive";

export default function Best() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div>
      <Row className="container">
        <Col span={isMobile ? 24 : 12}>
          <ThemedText
            style={{ fontSize: isMobile ? "2rem" : "3rem", fontWeight: "bold" }}
          >
            {BestSection.title}
          </ThemedText>
        </Col>
        <Col span={isMobile ? 24 : 12}>
          <ThemedText>{BestSection.title2}</ThemedText>
        </Col>
      </Row>
      <br />
      <div
        style={{
          ...centerDiv,
          height: isMobile ? "30vh" : "40vh",
          justifyContent: "left",
          borderRadius: 20,
          backgroundImage: `url(${BestSection.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: isMobile ? 10 : 20,
          margin: "20px",
        }}
      >
        <div style={{ display: "block" }} className="container">
          <div>
            <ThemedText
              style={{
                fontSize: isMobile ? "1.8rem" : "2.4rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {BestSection.span}
            </ThemedText>
            <br />
            <ThemedText
              style={{
                fontSize: isMobile ? "1.8rem" : "2.4rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {BestSection.span1}
            </ThemedText>
          </div>
          <ThemedText style={{ color: "white" }}>
            {BestSection.text2}
          </ThemedText>
          <br />
          <ThemedText style={{ color: "white" }}>
            {BestSection.text3}
          </ThemedText>
          <br />
          <ThemedButton
            style={{
              marginTop: 20,
              width: isMobile ? 200 : 250,
              padding: 10,
              border: "none",
            }}
          >
            {BestSection.btnText}
          </ThemedButton>
        </div>
      </div>
    </div>
  );
}
