import React, { useState } from "react";
import "./styles.css";

const Toggle = () => {
  const [on, setOn] = useState<boolean>(false);
  return (
    <div>
      <div
        onClick={() => setOn(!on)}
        className={`toggle ${on ? "active" : ""}`}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
};
export default Toggle;
