import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) { //layout do nosso mktplace
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>Metaverse Marketplace</p>
        <div className='flex mt-4'>
          <Link href="/">
            <a className="mr-6 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Asset
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>

      </nav>
      <Component {...pageProps} />
    </div>
  )
}
=======
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
>>>>>>> feat

export default App
