import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={314}
    height={70}
    viewBox="0 0 314 70"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="300" rx="3" ry="3" width="280" height="24" />
    <rect x="0" y="340" rx="10" ry="10" width="280" height="84" />
    <rect x="0" y="450" rx="3" ry="3" width="90" height="27" />
    <rect x="130" y="443" rx="30" ry="30" width="150" height="44" />
    <circle cx="40" cy="35" r="20" />
    <rect x="75" y="15" rx="0" ry="0" width="91" height="14" />
    <rect x="75" y="35" rx="0" ry="0" width="215" height="14" />
    <rect x="215" y="15" rx="0" ry="0" width="75" height="14" />
  </ContentLoader>
);

export default Loader;
