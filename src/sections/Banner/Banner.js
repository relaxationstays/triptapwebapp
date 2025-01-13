import React from "react";
import { centerDiv } from "../../styles/Format";
import ThemedText from "../../components/ThemedText/ThemedText";
import { bannerSection } from "../../data/Data";
import ThemedButton from "../../components/Button/Button";
import { FaHome } from "react-icons/fa";
import "./Banner.css";

export default function Banner() {
  return (
    <div style={{ ...centerDiv, paddingTop: "5%" }} className="lineartodown">
      <div align="center">
        <ThemedText
          style={{ fontSize: "3rem", fontWeight: "bold" }}
          className="responsive-text"
        >
          {bannerSection.text1}
        </ThemedText>
        <br />
        <ThemedText
          style={{ fontSize: "3rem", fontWeight: "bold" }}
          className="responsive-text"
        >
          {bannerSection.text2}
        </ThemedText>
        <br />
        <ThemedText
          style={{ fontSize: "3rem", fontWeight: "bold" }}
          className="text-gradient responsive-text"
        >
          {bannerSection.text3}
        </ThemedText>
        <br />

        <ThemedButton
          type="button"
          label={
            <FaHome
              size={15}
              color="black"
              style={{
                borderRadius: 999,
                background: "white",
              }}
            />
          }
          style={{
            marginLeft: 10,
            width: "50%",
            maxWidth: 200,
            padding: 10,
            background: "black",
            color: "white",
            border: "none",
            marginTop: "5vh",
            marginBottom: "10vh",
          }}
        >
          {bannerSection?.bttex}
        </ThemedButton>
      </div>
    </div>
  );
}
