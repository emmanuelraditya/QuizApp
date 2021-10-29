import React from "react";
import styles from "./Quiz.module.css";



function Quiz1(props) {
  
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    
          <form className={styles.form}>
              <p>Question 1 </p>
              <div className={styles.checkBox}>
              <label class="checkbox-inline"><input type="checkbox" id="checked" onclick={props.check} />Opsi 1</label>
              <label class="checkbox-inline"><input type="checkbox" id="checked" onclick="check();" />Opsi 2</label>
              <label class="checkbox-inline"><input type="checkbox" id="checked" onclick="check();" />Opsi 3</label>
              </div>
            <button id={styles.nextButton} onClick={props.next} type="submit">
              next
            </button>

          </form>
  );
}

export default Quiz1;
