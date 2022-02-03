import '../styles/globals.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import Layout from '../components/layout';


function MyApp({ Component, pageProps }) {



  const theme = createTheme({
    palette: {

    },
    typography: {
      fontFamily: "Open Sans, sans-serif",
      h1: {
        fontWeight: 600
      },
      h2: {
        fontWeight: 500
      },
      h3:{
        fontWeight: 400
      },
    }
  });
  return (
    // 2. Use at the root of your app
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </ThemeProvider>


  );
}

export default MyApp;