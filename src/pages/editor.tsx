import type { NextPage } from 'next';
import Head from 'next/head';
import { Resume } from 'src/core/containers/Resume';
import { Sidebar } from 'src/core/containers/Sidebar';
import { LeftNav } from 'src/core/containers/LeftNav';
import { FlexHC } from 'src/styles/styles';

const Editor: NextPage = () => {
  return (
    <FlexHC>
      <Head>
        <title>Biodata Maker For Job Editor Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/draggar.css"></link>
        <meta name="theme-color" content="#05fcc5"></meta>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q6S926GZYM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q6S926GZYM');
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2305974348753248"
     crossOrigin="anonymous"></script>
      </Head>
      <div id="navbar1">
          <span>
            <b>Biodata Maker For Job</b>
          </span>
        </div>
        <br />
      <LeftNav />
      <Resume />
      <Sidebar />
    </FlexHC>
  );
};

export default Editor;
