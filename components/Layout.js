import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>გიოს ბრძნული გამონათქვამები</title>
        <meta
          property="og:title"
          content="გიოს ბრძნული გამონათქვამები"
          key="title"
        />
        <meta
          name="og:description"
          content="დაეუფლე სიბრძნეს გიო ღონღინიოსთან ერთად"
        />
        <meta name="og:image" content="/assets/nirvana_gio.png" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
