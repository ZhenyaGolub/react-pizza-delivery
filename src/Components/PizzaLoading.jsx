import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoading() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={470}
      viewBox="0 0 280 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="131" cy="137" r="120" />
      <rect x="0" y="273" rx="3" ry="3" width="280" height="24" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="3" ry="3" width="89" height="27" />
      <rect x="124" y="408" rx="25" ry="25" width="151" height="51" />
    </ContentLoader>
  );
}

export default PizzaLoading;
