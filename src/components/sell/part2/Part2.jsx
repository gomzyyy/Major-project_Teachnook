import Part3 from "../Part3"
import styles from "./Part2.module.css";

function Part2() {
  return (
    <>
      <div className={styles.Part2}>
        <h4 style={{ paddingTop: "0px" }}>Location Applied for</h4>
        <div className={styles.selection1}>
          <div style={{ marginRight: "40px" }}>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option selected>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option selected>Choose City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className={styles.selection2}>
          <select
            class="form-select form-select-sm"
            aria-label="Small select example"
          >
            <option selected>District</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <Part3></Part3>
    </>
  );
}
export default Part2;
