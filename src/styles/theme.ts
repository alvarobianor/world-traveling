import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    myWhite: {
      "50": "#F5F8FA",
    },
    myGray: {
      "50": "#47585B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "myWhite.50",
        color: "myGray.50",
      },
    },
  },
});
