import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useState } from "react"

import SidenavDropdown from "./SidenavDropdown"

const Navbar = () => {
  const [showSidenav, setShowSidenav] = useState(false)

  const { t } = useTranslation("common")


  const toggle = () => setShowSidenav(!showSidenav)
  const router = useRouter()
  const { asPath, locale } = router

  return (
    <header className="site-header mo-left header-full header style1">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container-fluid">
            <div className="header-content-bx w-full flex justify-between">
              <div className="logo-header">
                <a href="index.html">
                  <img src="/images/logo-white.png" alt="" />
                </a>
              </div>
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul>
                    <li className="header-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="contact-no">
                      <span>+38 (097) 252 79 55</span>
                    </li>
                    <li className="">
                      <a
                        href="#"
                        className="btn radius-xl white menu-icon"
                        onClick={toggle}
                      >
                        <div className="menu-icon-in">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidenav */}
      <div
        className={`${
          locale === "ar" && "sidenav__custom"
        } capitalize header-nav navbar-collapse collapse full-sidenav content-scroll left-0 ${
          showSidenav && "active"
        }`}
      >
        <div className="logo-header">
          <a href="index.html">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
        <ul className="nav navbar-nav">
          <SidenavDropdown
            text={t("layout")}
            links={[{ text: t("home"), href: "#" }]}
          />

          <SidenavDropdown
            text={t("pages")}
            links={[
              { text: t("about-me"), href: "#" },
              { text: t("services"), href: "#" },
              { text: t("company-history"), href: "#" },
              { text: t("price-table"), href: "#" },
            ]}
          />

          <SidenavDropdown
            text={t("blog")}
            links={[{ text: t("about-me"), href: "#" }]}
          />

          <SidenavDropdown
            text={t("contact-us")}
            links={[{ text: t("about-me"), href: "#" }]}
          />
          <SidenavDropdown
            text={t("language")}
            handleCloseNav={toggle}
            links={[
              {
                text: "en",
                href: "#",
                onClick: () =>
                  router.push(asPath, undefined, {
                    locale: "en",
                  }),
              },
              {
                text: "ar",
                href: "#",
                onClick: () =>
                  router.push(asPath, undefined, {
                    locale: "ar",
                  }),
              },
            ]}
          />
        </ul>
        <div className="social-menu">
          <ul>
            <li>
              <a href="#;">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#;">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#;">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#;">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
          <p className="copyright-head">© 2020 Archia</p>
        </div>
      </div>
      <div className={`menu-close ${locale === "ar" && "menu-close__custom"} ${showSidenav && "active"}`} onClick={toggle}>
        <i className="ti-close"></i>
      </div>
    </header>
  )
}

export default Navbar
