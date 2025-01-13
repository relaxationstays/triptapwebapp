import React from "react";
import withFrame from "../../../components/Frames/Frames";
import { AboutSection } from "../../../data/Data";

const ChildComponent = ({ title }) => {
  return <div></div>;
};

const EnhancedChild = withFrame(ChildComponent);

const AboutUs = () => {
  return (
    <div>
      <EnhancedChild
        title={AboutSection.name1}
        titleBreak={AboutSection.name2}
      />
    </div>
  );
};

export default AboutUs;
