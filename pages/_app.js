import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Fonts from "../components/Fonts";

// 2. Extend the theme to include custom colors, fonts, etc

const fonts = {
  heading: `'Lortkipanidze', sans-serif`,
  body: `'Lortkipanidze', sans-serif`,
};

export const theme = extendTheme({ fonts });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
