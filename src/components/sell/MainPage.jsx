import Part2 from "./part2/Part2";
import Part1 from"./part1/Part1";
import styles from "./MainPage.module.css";


function SellEv() {
  return (
    <>
      <div className={styles.mainpage}>
        <Part1></Part1>
        <Part2></Part2>
      </div>
    </>
  );
}
export default SellEv;
