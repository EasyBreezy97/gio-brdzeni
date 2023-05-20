import styles from "../styles/Home.module.css";
import Info from "../components/Info";
import PhasesGrid from "../components/PhraseGrid";
import ScrollTop from "../components/ScrollTop";
import { useEffect } from "react";
import { phraseOfTheDay } from "../utils/phraseOfDay";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.API_URL);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
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
