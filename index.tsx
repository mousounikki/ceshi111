import React from "react";
import ReactDOM from "react-dom";
import JourneyMap from "@arvinxu/journey-map";

ReactDOM.render(
  <JourneyMap
    // 替换 data 的 URL 即可
    data="https://raw.githubusercontent.com/arvinxx/user-journal-map-template/master/src/map.jm.yml"
  />,
  document.getElementById("root")
);
