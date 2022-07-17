import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, query }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, query }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
          ></link>

          <link rel="icon" href="/study-iger-logo.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
