import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { BsDisplay } from "react-icons/bs";
import { Col, Row } from "antd";

import "./Frame.css";
import { BigPromoSection } from "../../data/Data";
import FlipCard from "./FlipCard/Flipcard";
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
              {BigPromoSection.imagedata.map((item, i) => (
                <FlipCard
                  bg={item.bg}
                  index={i}
                  promo={item.promo}
                  label={item.text1}
                  descp={item.text2}
                />
              ))}
            </ul>
          )}
        </>
      );
    }
  };
};

export default withFrame;
