import "../styles/global.css";
import "../styles/skin/color/skin-1.css";
import "../styles/skin/color/skin-2.css";
import "../styles/skin/color/skin-3.css";
import "../styles/skin/color/skin-4.css";
import "../styles/skin/skin-1.css";
import "../styles/skin/skin-2.css";
import "../styles/skin/skin-3.css";
import "../styles/skin/skin-4.css";
// import '../styles/dark.css';
import "../styles/global.css";
import "../styles/light.css";
import "../styles/plugins.css";
import "../styles/split-slider.css";
import "../styles/star-rating-svg.css";
import "../styles/style.css";
// import '../styles/style.min.css';
import "../styles/templete.css";
// import '../styles/templete.min.css';
import "../plugins/font-awesome/css/all.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import NoSidenav from "@/components/Navbar/NoSidenav";
import Footer from "@/components/Footer/Footer";
import { getDirection } from "@/hooks/useDirections";
import { useEffect, useRef } from "react";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  const { pathname } = useRouter();
  const router = useRouter();
  const dir = getDirection(router.locale);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <>
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <>
          {pathname !== "/" && <NoSidenav pathname={pathname} />}
          <Component {...pageProps} />
          <Footer />
        </>
      </Hydrate>
    </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
