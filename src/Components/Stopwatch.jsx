import React, { useEffect, useState, useRef } from "react";
import style from "../styles/Stopwatch.module.css";

export default function Stopwatch() {
  /* 
              States 
  */
  const [running, setRunning] = useState(false);
  const [elasped, setElapsed] = useState(0);
  const startTimeRef = useRef(0);
  const timeOutId = useRef(null);

  useEffect(() => {
    if (running) {
      timeOutId.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 100);
    }

    return () => clearInterval(timeOutId.current);
  }, [running]);

  /*
              Constants & Functions of my component 
  */

  const start = () => {
    setRunning(true);
    startTimeRef.current = Date.now() - elasped;
  };

  const stop = () => setRunning(false);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  const formatTime = () => {
    let hours = Math.floor(elasped / 3600000);
    let minutes = Math.floor((elasped % 3600000) / 60000);
    let seconds = Math.floor(((elasped % 3600000) % 60000) / 1000);
    let milliseconds = Math.floor((((elasped % 3600000) % 60000) % 1000) / 10);


    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    return ` ${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  /*
            Rendering
  */
  return (
    <div className={style.container}>
      <div className={style.display}> {formatTime()}</div>
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
