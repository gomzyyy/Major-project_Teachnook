import styles from "./Part1.module.css";

function Part1() {
  return (
    <>
      <div className={styles.Part1}>
        <h5>Become a Revolt Dealer</h5>
        <p>
          Revolt Motors employs a comprehensive and professional process for
          Dealership allotment. Dealer selection is done based on a variety of
          criteria including a personal meeting with the applicant. It is only
          post completion of the evaluation and selection process, that other
          formalities are considered. <br /> There are some unscrupulous
          elements posing to be employees of /agents of Revolt Motors are
          offering Dealership allotment of Revolt Motors by providing misleading
          information through fraudulent websites, emails, telephone, messages,
          etc. and demanding money in this regard. <br /> You are advised not to
          share any personal data or transfer any money to such fraudsters. We
          strongly advise you to seek clarifications by writing to us at
          <span style={{ color: "blue", fontWeight: "500" }}>
            {" "}
            ddrevolt@revoltmotors.com /{" "}
          </span>
          visiting our official website at
          <a
            href="https://www.revoltmotors.com/"
            style={{ color: "black", fontWeight: "700" }}
          >
            {" "}
            https://www.revoltmotors.com/{" "}
          </a>
          or calling us at
          <span style={{ fontWeight: "800" }}> 9873050505.</span>
        </p>
      </div>
    </>
  );
}
export default Part1;
