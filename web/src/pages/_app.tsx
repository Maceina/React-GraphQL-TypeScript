import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
// 1
export default MyApp;
