import "../styles/global.css"
import "../styles/skin/color/skin-1.css"
import "../styles/skin/color/skin-2.css"
import "../styles/skin/color/skin-3.css"
import "../styles/skin/color/skin-4.css"
import "../styles/skin/skin-1.css"
import "../styles/skin/skin-2.css"
import "../styles/skin/skin-3.css"
import "../styles/skin/skin-4.css"
// import '../styles/dark.css';
import "../styles/global.css"
import "../styles/light.css"
import "../styles/plugins.css"
import "../styles/split-slider.css"
import "../styles/star-rating-svg.css"
import "../styles/style.css"
// import '../styles/style.min.css';
import "../styles/templete.css"
// import '../styles/templete.min.css';
import "../plugins/font-awesome/css/all.css"

import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import NoSidenav from "@/components/Navbar/NoSidenav"
import Footer from "@/components/Footer/Footer"
import { getDirection } from "@/hooks/useDirections"
import { useEffect } from "react"
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname, locale } = useRouter()
	const dir = getDirection(locale);

	useEffect(() => {
    console.log("getDirection", dir)
		document.documentElement.dir = dir;
	}, [dir]);

  return (
    <>
      {pathname !== "/" && <NoSidenav pathname={pathname} />}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(MyApp);
