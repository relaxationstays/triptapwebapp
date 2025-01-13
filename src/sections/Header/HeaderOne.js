import React from "react";
import { Layout, Menu, Button, Switch } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { headerDataSection } from "../../data/Data";
import { Row, Col } from "antd";
import { centerDiv } from "../../styles/Format";
import ThemedText from "../../components/ThemedText/ThemedText";
import "./style.css";
import ThemedButton from "../../components/Button/Button";

const HeaderOne = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <>
      <Row style={{ width: "100%", paddingTop: 10 }}>
        <Col span={isMobile ? 24 : 2} style={centerDiv}>
          <div className="logo" style={{}}>
            <ThemedText
              className="headerTitle"
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              {headerDataSection?.name}
            </ThemedText>
          </div>
        </Col>
        <Col span={isMobile ? 24 : 10} style={centerDiv}>
          {headerDataSection?.headertext?.map((item, index) => (
            <ThemedText
              key={item.id}
              style={{ marginRight: 20, textTransform: "capitalize" }}
              className="headerTitle"
            >
              {item.title}
            </ThemedText>
          ))}
        </Col>
        <Col
          span={isMobile ? 24 : 12}
          style={{
            textAlign: isMobile ? "center" : "right",
            position: "relative",
          }}
        >
          <div align={isMobile ? "center" : "right"} style={{}}>
            <Switch
              checkedChildren="EN"
              unCheckedChildren="ES"
              onChange={handleLanguageChange}
              style={{
                position: "absolute",
                marginLeft: isMobile ? "-10%" : "-10%",
                marginTop: 5,
              }}
            />
            {headerDataSection?.headerButtom?.map((item) => (
              <ThemedButton
                type="button"
                style={{
                  marginLeft: 10,
                  width: 150,
                  background: item.name === "register" ? "black" : "white",
                  color: item.name === "register" ? "white" : "black",
                }}
                key={item.id}
              >
                {item?.name}
              </ThemedButton>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeaderOne;
