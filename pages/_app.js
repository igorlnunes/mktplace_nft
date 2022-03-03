import "bootswatch/dist/minty/bootstrap.min.css";

import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis'
import Head from "next/head";
import React from "react";
function App({ Component, pageProps}) {
  return ( 
    <React.Fragment>
    <MoralisProvider appId='eAWOARkkM4Zj0Dc0m9o1aRhx2NlrGQaWCPp6CzYb'
    serverUrl='https://v8z1fiagonfe.usemoralis.com:2053/server'>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      {<Component {...pageProps}/>}
    </MoralisProvider>
    </React.Fragment>
  );
  }

export default App
