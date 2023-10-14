import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" href="../../assets/logo-small.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document