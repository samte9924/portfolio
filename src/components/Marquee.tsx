import ReactIcon from "./icons/ReactIcon";
import Css from "./icons/Css";
import Html from "./icons/Html";
import JavaScript from "./icons/JavaScript";
import MySql from "./icons/MySql";
import Node from "./icons/Node";

const content = [
  <Html />,
  <Css />,
  <JavaScript />,
  <ReactIcon />,
  <Node />,
  <MySql />,
];

function Marquee() {
  return (
    <div
      className="marquee"
      style={
        {
          "--total": content.length,
          "--duration": "10s",
        } as React.CSSProperties
      }
    >
      {content.map((item, idx) => (
        <div
          key={idx}
          className="item"
          style={{ "--position": idx + 1 } as React.CSSProperties}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
