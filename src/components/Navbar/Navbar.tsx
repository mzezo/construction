import { NAV_LINKS } from "@/constants"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import SidenavDropdown from "./SidenavDropdown"

const Navbar = () => {
  const [showSidenav, setShowSidenav] = useState(false)

  const { t } = useTranslation("common")

  const parseTranslationText = (text: string) =>
    t(text.toLowerCase().split(" ").join("-"))

  const toggle = () => setShowSidenav(!showSidenav)
  const router = useRouter()
  const { locale } = router

  return (
    <header className="site-header mo-left header-full header style1">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container-fluid">
            <div className="header-content-bx w-full flex justify-between">
              <div className="logo-header">
                <Link href="/">
                  <a>
                    <img src="/images/logo-white.png" alt="" />
                  </a>
                </Link>
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
        } capitalize header-nav navbar-collapse collapse full-sidenav content-scroll overflow-x-hidden left-0 ${
          showSidenav && "active"
        }`}
      >
        <div className="logo-header">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <ul className="nav navbar-nav">
        {NAV_LINKS.map((ele, index) =>
            ele?.links ? ( 
              <SidenavDropdown
                key={index}
                text={parseTranslationText(ele.text)}
                handleCloseNav={toggle}
                links={ele?.links.map(e => ({ ...e, text: parseTranslationText(e.text)}))}
              />
            ) : (
              <Link href={ele.href}>
                <li>
                  <a className="transition-colors duration-200 hover:text-[#a8ca1e]">
                    {parseTranslationText(ele.text)}
                  </a>
                </li>
              </Link>
            )
          )}
         
        </ul>
        {/* <div className="social-menu">
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
        </div> */}
      </div>
      <div
        className={`menu-close ${locale === "ar" && "menu-close__custom"} ${
          showSidenav && "active"
        }`}
        onClick={toggle}
      >
        <i className="ti-close"></i>
      </div>
    </header>
  )
}

export default Navbar
