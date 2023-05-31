import styles from "../styles/Home.module.css";
import Info from "../components/Info";
import PhasesGrid from "../components/PhraseGrid";
import ScrollTop from "../components/ScrollTop";

// This gets called on every request
export async function getServerSideProps() {
  const data = require("/mocks/frtianebi.json")
  const items = data.items
  // Pass data to the page via props
  return { props: { data :items} };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Info data={data} />
      <PhasesGrid data={data} />
      <ScrollTop />
    </div>
  );
}
