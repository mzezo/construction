import Document, { Head, Html, Main, NextScript } from 'next/document';
import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
        <link type="text/css" rel="stylesheet" href="/css/animate/animate.css" />
        <link type="text/css" rel="stylesheet" href="/css/animate/animate.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/scrollbar.css" />

          <script type="text/javascript" src="/js/custom.js"></script>
          <script type="text/javascript" src="/js/custom.min.js"></script>
          <script type="text/javascript" src="/js/dz.ajax.js"></script>
          <script type="text/javascript" src="/js/dz.carousel.js"></script>
          <script type="text/javascript" src="/js/dz.carousel.min.js"></script>
          <script type="text/javascript" src="/js/html5shiv.min.js"></script>
          <script type="text/javascript" src="/js/jquery.min.js"></script>
          <script type="text/javascript" src="/js/jquery.star-rating-svg.js"></script>
          <script type="text/javascript" src="/js/map.script.js"></script>
          <script type="text/javascript" src="/js/progressbar.min.js"></script>
          <script type="text/javascript" src="/js/respond.min.js"></script>
          <script type="text/javascript" src="/js/rev.slider.js"></script>
          <script type="text/javascript" src="/js/wow.js"></script>
          <script type="text/javascript" src="/js/popper.min.js"></script>
          <script type="text/javascript" src="/js/bootstrap.bundle.min.js"></script>
          <script type="text/javascript" src="/js/bootstrap-select.min.js"></script>
          <script type="text/javascript" src="/js/jquery.bootstrap-touchspin.js"></script>
          <script type="text/javascript" src="/js/owl.carousel.js"></script>
          <script type="text/javascript" src="/js/scrollbar.min.js"></script>

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
