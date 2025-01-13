import { Col, Row } from "antd";
import React from "react";
import { centerDiv } from "../../styles/Format";
import ThemedInput from "../../components/InputFeild/ThemedInput";
import { FaSearch } from "react-icons/fa";
import { headerTwoSection } from "../../data/Data";
import ThemedButton from "../../components/Button/Button";
import { useMediaQuery } from "react-responsive";

export default function HeaderTwo() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const buttonsToDisplay = isMobile
    ? headerTwoSection?.headerTwoSectionButton?.slice(0, 4)
    : headerTwoSection?.headerTwoSectionButton;

  return (
    <Row style={{ width: "100%", paddingTop: 10 }} gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} className="centerDiv">
        <ThemedInput
          label={
            <FaSearch
              size={10}
              style={{ borderRadius: 999, background: "white", padding: 10 }}
            />
          }
          placeholder="Search Flight"
          style={{
            background: "#f7f7f7",
            height: "3.2vh",
            borderRadius: 20,
            height: 30,
          }}
        />
      </Col>
      <Col
        xs={24}
        sm={12}
        md={16}
        lg={18}
        style={{ ...centerDiv, justifyContent: "right" }}
      >
        {buttonsToDisplay?.map((item) => (
          <ThemedButton
            type="button"
            style={{
              marginLeft: 10,
              paddingLeft: 40,
              paddingRight: 30,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            key={item.id}
            label={item.icon}
          >
            {item?.title}
          </ThemedButton>
        ))}
      </Col>
    </Row>
  );
}
