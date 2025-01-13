import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { BsDisplay } from "react-icons/bs";
import { Col, Row } from "antd";

import "./Frame.css";
import { BigPromoSection } from "../../data/Data";
// This is the higher-order component
const withFrame = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { titleBreak, truePromoSide, title, ...restProps } = this.props;
      return (
        <>
          <div style={{ marginTop: "5vh" }}>
            <Row>
              <Col span={4}>
                {title && (
                  <div>
                    <ThemedText
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        display: "block",
                        textTransform: "capitalize",
                      }}
                    >
                      {title}
                    </ThemedText>
                    <ThemedText
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {titleBreak}
                    </ThemedText>
                    {/* titleBreak */}
                  </div>
                )}
              </Col>
              <Col span={20}>
                <WrappedComponent {...restProps} />
              </Col>
            </Row>
          </div>

          {truePromoSide && (
            <ul className="itempropSlide">
              {BigPromoSection.imagedata.map((item) => (
                <li
                  style={
                    item?.bg
                      ? {
                          backgroundImage: `url(${item.bg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  <ThemedText
                    style={{ textTransform: "capitalize", fontSize: "1.2rem" }}
                  >
                    {item.text1}
                    <br />
                    {item.text12} <br />
                    {item.text13} <br />
                  </ThemedText>
                  <br />
                  <ThemedText
                    style={{ textTransform: "capitalize", fontSize: "0.8rem" }}
                  >
                    {item.text2}
                  </ThemedText>

                    {item.promo && (
                  <label className="iconTxxt">
                      <span style={{ padding: 10 }}>{item.promo}</span>
                  </label>
                    )}
                  <label className="icon">{item.textimage}</label>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    }
  };
};

export default withFrame;
