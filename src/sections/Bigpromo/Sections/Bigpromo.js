import React from "react";
import withFrame from "../../../components/Frames/Frames";
import { BigPromoSection } from "../../../data/Data";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { Col, Row } from "antd";
import ThemedButton from "../../../components/Button/Button";
import { useMediaQuery } from "react-responsive";

const ChildComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Row gutter={[16, 16]} style={{ paddingLeft: isMobile ? "10%" : "0" }}>
      <Col xs={24} md={12}>
        <ThemedText style={{ textTransform: "capitalize", fontSize: "3rem" }}>
          {BigPromoSection.text1}
        </ThemedText>
      </Col>
      <Col xs={24} md={12}>
        <div>
          <ThemedText style={{ textTransform: "capitalize", fontSize: "1rem" }}>
            {BigPromoSection.text2}
          </ThemedText>
        </div>
        <ThemedButton
          type="button"
          style={{
            width: "80%",
            padding: 10,
            background: "black",
            color: "white",
            border: "none",
            marginTop: "2vh",
          }}
        >
          {BigPromoSection?.btntext}
        </ThemedButton>
      </Col>
    </Row>
  );
};

const EnhancedChild = withFrame(ChildComponent);

const AboutUs = () => {
  return (
    <div>
      <EnhancedChild
        title={BigPromoSection.name1}
        titleBreak={BigPromoSection.name2}
        truePromoSide={true}
      />
    </div>
  );
};

export default AboutUs;
