import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Lortkipanidze";
        src: url("/fonts/ka_lortkipanidze.ttf") format('truetype');
      }
      `}
  />
);

export default Fonts;
