import React from "react";
import "./Main.css";
import { Col, Row } from "antd";
import { centerDiv } from "../../../styles/Format";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { MainSection } from "../../../data/Data";
import ThemedButton from "../../../components/Button/Button";
import { FaCalendarAlt, FaHotel, FaMap, FaMoon } from "react-icons/fa";
import ThemedInput from "../../../components/InputFeild/ThemedInput";
import { FaLocationPin } from "react-icons/fa6";

export default function Main() {
  return (
    <div className="main" style={centerDiv}>
      <div className="container">
        <Row>
          <Col xs={24} md={12} style={{ ...centerDiv, display: "block" }}>
            <ThemedText
              style={{
                color: "white",
                textTransform: "capitalize",
                display: "block",
                fontSize: 40,
              }}
            >
              {MainSection?.text1}
            </ThemedText>

            <ThemedButton
              type="button"
              style={{
                marginLeft: 10,
                width: 200,
                padding: 10,
                background: "black",
                color: "white",
                border: "none",
                marginTop: "5vh",
                marginBottom: "10vh",
              }}
            >
              {MainSection?.btntext}
            </ThemedButton>

            <ThemedText
              style={{
                color: "white",
                textTransform: "capitalize",
                display: "block",
                fontSize: 14,
                marginBottom: 50,
              }}
            >
              {MainSection?.text2}
            </ThemedText>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              // height: "50vh",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                // height: "80%",
                borderRadius: 20,
                padding: 20,
                paddingTop: 40,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <FaHotel style={{ fontSize: "20px", color: "black" }} />{" "}
                <ThemedText style={{ padding: 10 }}>
                  {MainSection?.col2heading}
                </ThemedText>
              </div>
              <div style={{ marginTop: 20 }}>
                <ThemedText style={{ fontSize: "0.9rem", color: "grey" }}>
                  {MainSection?.text1co}
                </ThemedText>
                <br />
                <ThemedInput
                  label={
                    <FaLocationPin
                      size={10}
                      style={{
                        borderRadius: 999,
                        background: "white",
                        padding: 10,
                      }}
                    />
                  }
                  placeholder="Electra Street - Abu Dhabi"
                  style={{
                    background: "#f7f7f7",
                    height: "3.2vh",
                    borderRadius: 20,
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <ThemedText style={{ fontSize: "0.9rem", color: "grey" }}>
                      {MainSection?.text2Col1}
                    </ThemedText>
                    <br />
                    <ThemedInput
                      label={
                        <FaCalendarAlt
                          size={10}
                          style={{
                            borderRadius: 999,
                            background: "white",
                            padding: 10,
                          }}
                        />
                      }
                      placeholder="Select Date"
                      style={{
                        background: "#f7f7f7",
                        height: "3.2vh",
                        borderRadius: 20,
                        marginTop: 10,
                        width: "100%",
                        borderRadius: 10,
                      }}
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <ThemedText style={{ fontSize: "0.9rem", color: "grey" }}>
                      {MainSection?.text2Col3}
                    </ThemedText>
                    <br />
                    <ThemedInput
                      label={
                        <FaMoon
                          size={10}
                          style={{
                            borderRadius: 999,
                            background: "white",
                            padding: 10,
                          }}
                        />
                      }
                      placeholder="2 Nights"
                      style={{
                        background: "#f7f7f7",
                        height: "3.2vh",
                        borderRadius: 20,
                        marginTop: 10,
                        width: "100%",
                        borderRadius: 10,
                      }}
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginTop: 20 }}>
                <ThemedText style={{ fontSize: "0.9rem", color: "grey" }}>
                  {MainSection?.text2Col3}
                </ThemedText>
                <br />
                <ThemedInput
                  label={
                    <FaCalendarAlt
                      size={10}
                      style={{
                        borderRadius: 999,
                        background: "white",
                        padding: 10,
                      }}
                    />
                  }
                  placeholder="2 Adult, 1 Child 1 Room"
                  style={{
                    background: "#f7f7f7",
                    height: "3.2vh",
                    borderRadius: 20,
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                />
              </div>
              <ThemedButton
                type="button"
                style={{
                  marginLeft: 10,
                  width: "100%",
                  padding: 10,
                  background: "black",
                  color: "white",
                  border: "none",
                  marginTop: "5vh",
                  marginBottom: "10vh",
                }}
              >
                {MainSection?.btntextx}
              </ThemedButton>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
