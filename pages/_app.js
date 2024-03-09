import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
 return (
  <div className="h-full">
   <Head>
    <title>Study IGER</title>
   </Head>
   <Component {...pageProps} />
  </div>
 );
}

export default MyApp;
