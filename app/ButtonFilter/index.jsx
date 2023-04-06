'use client';

import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";

export default function ButtonFilter({ name, columns = 1, children }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setActive(!active)}>
        {name}
      </button>
      {active && (
        <div className={styles.window} ref={ref} style={{ columns }}>
          {children}
        </div>
      )}
    </div>
  );
}
