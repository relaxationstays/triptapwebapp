import React, { useState } from "react";
import { Layout, Menu, Button, Switch, Drawer } from "antd";
import { useMediaQuery } from "react-responsive";
import { headerDataSection } from "../../data/Data";
import { Row, Col } from "antd";
import { centerDiv } from "../../styles/Format";
import ThemedText from "../../components/ThemedText/ThemedText";
import "./style.css";
import ThemedButton from "../../components/Button/Button";
import { FiAlignRight } from "react-icons/fi";
import logo from "../../assets/logo.png";

const HeaderOne = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Row style={{ width: "100%", paddingTop: 20 }}>
        <Col
          span={isMobile ? 24 : 4}
          style={{
            ...centerDiv,
            justifyContent: isMobile ? "space-between" : "center",
          }}
        >
          {/* <ThemedText
            className="headerTitle"
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            {headerDataSection?.name}
          </ThemedText> */}
          <img src={logo} width={"100%"} />

          {isMobile && (
            <FiAlignRight
              size={30}
              onClick={showDrawer}
              style={{ top: 0, marginRight: 10 }}
            />
          )}
        </Col>
        {!isMobile && (
          <Col span={isMobile ? 24 : 8} style={centerDiv}>
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
        )}

        <Col
          span={isMobile ? 24 : 12}
          style={{
            textAlign: isMobile ? "center" : "right",
            position: "relative",
          }}
        >
          {isMobile ? (
            <>
              <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                visible={drawerVisible}
              >
                {headerDataSection?.headertext?.map((item, index) => (
                  <ThemedText
                    key={item.id}
                    style={{
                      marginBottom: 10,
                      textTransform: "capitalize",
                      display: "block",
                      textAlign: "left",
                    }}
                    className="headerTitle"
                  >
                    {item.title}
                  </ThemedText>
                ))}
                <Switch
                  checkedChildren="EN"
                  unCheckedChildren="ES"
                  onChange={handleLanguageChange}
                  style={{ marginBottom: 20 }}
                />

                {/* {headerDataSection?.headerButtom?.map((item) => (
                  <ThemedButton
                    type="button"
                    style={{
                      marginBottom: 10,
                      width: "100%",
                      background: item.name === "register" ? "black" : "white",
                      color: item.name === "register" ? "white" : "black",
                    }}
                    key={item.id}
                  >
                    {item?.name}
                  </ThemedButton>
                ))} */}
              </Drawer>
            </>
          ) : (
            <div align="right" style={{}}>
              <Switch
                checkedChildren="EN"
                unCheckedChildren="ES"
                onChange={handleLanguageChange}
                style={{
                  position: "absolute",
                  marginLeft: "-10%",
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
          )}
        </Col>
      </Row>
    </>
  );
};

export default HeaderOne;
