import React from "react";
import styles from "./Quiz.module.css";



function Quiz2(props) {
  
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    
          <form className={styles.form}>
              <p>Question 2 </p>
              <div className={styles.checkBox}>
              <label class="checkbox-inline"><input type="checkbox" id="checked" onclick="check();" />Opsi 1</label>
              <label class="checkbox-inline"><input type="checkbox" id="checked" onclick="check();" />Opsi 2</label>
              <label class="checkbox-inline"><input type="checkbox" id="checked" onclick="check();" />Opsi 3</label>
              </div>
              <button id={styles.prevButton} onClick={props.prev} type="submit">
              prev
            </button>
            <button id={styles.nextButton} onClick={props.next} type="submit">
              next
            </button>

          </form>
  );
}

export default Quiz2;
