import styles from "./Part4.module.css";

function Part4() {
  return (
    <>
      <div className={styles.Part4} style={{ marginBottom: "20px" }}>
        <button
          type="button"
          class="btn btn-outline-secondary"
          disabled
          style={{
            marginRight: "20px",
            color: "black",
            fontWeight: "700",
            border: "1px solid black",
          }}
        >
          Send Otp
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          disabled
          style={{
            fontWeight: "700",
            color: "white",
            border: "2px solid black",
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <footer>
          <p>
            *By clicking “Submit”, I give my consent to Revolt Intellicorp
            Private Limited and its authorised service providers to hold my
            personal data and communicate with me by e-mail, WhatsApp, SMS or
            phone call for Notify purposes.
          </p>
        </footer>
      </div>
    </>
  );
}
export default Part4;
