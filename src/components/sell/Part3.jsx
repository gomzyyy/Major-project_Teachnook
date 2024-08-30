import Part4 from "./Part4";
import styles from "./Part3.module.css";

function Part3() {
  return (
    <>
      <div className={styles.Part3}>
        <h4>Applicant Details</h4>
        <div className={styles.inputs}>
          <div style={{ padding: "0px 20px" }}>
            <input
              class="form-control"
              type="text"
              placeholder="Name"
              aria-label="readonly input example"
              readonly
            />
            <input
              class="form-control"
              type="text"
              placeholder="Age"
              aria-label="readonly input example"
              readonly
            />
          </div>
          <div style={{ padding: "0px 20px" }}>
            <input
              class="form-control"
              type="text"
              placeholder="Email"
              aria-label="readonly input example"
              readonly
            />
            <input
              class="form-control"
              type="text"
              placeholder="Mobile"
              aria-label="readonly input example"
              readonly
            />
          </div>
        </div>

        <div>
          <h4 style={{ padding: "20px 0px" }}>Existing Bussiness Details</h4>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label"
              for="flexCheckDefault"
              className={styles.dealership}
            >
              Do you own any automobile dealership?
            </label>
          </div>
        </div>

        <div className={styles.Leadership_Permises}>
          <h4 style={{ padding: "20px 0px" }}>Proposed Premises Details</h4>
          <select
            class="form-select form-select-sm"
            aria-label="Small select example"
          >
            <option selected>Select Leadership Permises</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <Part4></Part4>
      </div>
    </>
  );
}
export default Part3;
