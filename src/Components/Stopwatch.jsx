import React from "react";
import style from "../styles/Stopwatch.module.css";

export default function Stopwatch() {
  // States

  // Constants & Functions of my component
  const start = () => {
    alert("Start button");
  };
  const stop = () => {
    alert("Stop button");
  };
  const reset = () => {
    alert("Reset button");
  };
  //   Mapinulation of the data of the component

  //  Rendering
  return (
    <div className={style.container}>
      <div className={style.display}> {` 00:00:00 `}</div>
      <div className={style.controls_buttons}>
        <button className={`${style.start} ${style.button}`} onClick={start}>
          Start
        </button>
        <button className={`${style.stop} ${style.button}`} onClick={stop}>
          Stop
        </button>
        <button className={`${style.reset} ${style.button}`} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
