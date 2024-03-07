import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts.heading}`,
    body: "Inter",
  },
});

export default theme;
