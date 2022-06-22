import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { getDirection } from "@/hooks/useDirections";
import { i18n } from "next-i18next";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    if (process.env.NODE_ENV !== "production") {
			i18n!?.reloadResources(locale);
		}
    console.log('__NEXT_DATA__', locale)
    return (
      <Html dir={getDirection(locale)}>
        <Head>
        <link type="text/css" rel="stylesheet" href="/css/animate/animate.css" />
        <link type="text/css" rel="stylesheet" href="/css/animate/animate.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/scrollbar.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
