import React from "react";
import GenBox from "./GenBox";
import styles from "./BoxList.module.css";
export default function ({ boxesNum }) {
  let boxlst =
    boxesNum == 0 ? (
      <div>no box!</div>
    ) : (
      Array(boxesNum)
        .fill(0)
        .map((x, index) => <GenBox key={index} index={index} />)
    );
  return <div className={styles.defaults}>{boxlst}</div>;
}
