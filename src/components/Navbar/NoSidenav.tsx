import { NAV_LINKS } from "@/constants";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SidenavDropdown from "./SidenavDropdown";

function NoSidenav({ pathname }: { pathname: string }) {
  const [navActive, setNavActive] = useState(false);

  const getTitle = () => pathname.split("-").join(" ").replace("/", "");

  const { locale, asPath } = useRouter();
  const router = useRouter();

  const { t } = useTranslation();

  const parseTranslationText = (text: string) =>
    t(text.toLowerCase().split(" ").join("-"));

  useEffect(() => {
    if (navActive) document.querySelector("body")?.classList.add("no-scroll");
    else document.querySelector("body")?.classList.remove("no-scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navActive]);

  const handleLangCLicked = (lang: string) => {
    router.push(asPath, undefined, {
      locale: lang,
    })
  }

  return (
    <>
      <header
        className="site-header header header-transparent header-archia mo-left"
        dir="ltr"
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container">
              {/* logo */}
              <div className="logo-header mostion">
                <Link href="/">
                  <a>
                    <img className="logo" src="/images/logo-white.png" alt="" />
                  </a>
                </Link>
              </div>

              {/* responsive nav button */}
              <button
                onClick={() => setNavActive(!navActive)}
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              {/* phone number */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul>
                    <li>
                      <div className="contact-info">
                        <i className="fas fa-phone-alt"></i>
                        <span>{t("Phone")}</span>
                        <h4 className="m-b0">003 746 87 92</h4>
                      </div>
                    </li>
                    {/* <li>
                      <a
                        id="quik-search-btn"
                        href="javascript:;"
                        className="search-btn"
                      >
                        <i className="fas fa-search"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>

              {/* search icon */}
              <div className="dlab-quik-search">
                <form action="#">
                  <input
                    name="search"
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Keyword ..."
                  />
                  <span id="quik-search-remove">
                    <i className="ti-close"></i>
                  </span>
                </form>
              </div>

              <div
                className="header-nav navbar-collapse collapse justify-content-end mo-nav hidden md:block"
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="" />
                    </a>
                  </Link>
                </div>

                <ul className="nav navbar-nav">
                  {NAV_LINKS.map((ele, index) => (
                    <li>
                      <Link key={index} href={!ele.links ? ele.href : "#"}>
                        <a>
                          {parseTranslationText(ele.text)} {ele.links && ">"}
                          {/* TODO: ADD ICON */}
                        </a>
                      </Link>

                      {ele.links && (
                        <ul className="sub-menu">
                          {ele?.links?.map((childLink, index) => (
                            <li key={index} onClick={() => handleLangCLicked(childLink.href)}>
                              {/* <Link href={childLink.href}> */}
                                <a className="dez-page">
                                  {parseTranslationText(childLink.text)}
                                </a>
                              {/* </Link> */} 
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                dir={locale === "ar" ? "rtl" : "ltr"}
                className={`fixed w-full ${
                  locale === "ar" && "text-right"
                } transition-all duration-300 top-[80px] bg-white flex flex-col h-full md:hidden ${
                  navActive ? "left-0" : "-left-full"
                }`}
              >
                {NAV_LINKS.map((ele, index) => (
                  <Link key={index} href={!ele.links ? ele.href : "#"}>
                    <a
                      className="group w-full px-6 py-4 hover:bg-gray-200 text-xl text-black"
                      onClick={() => setNavActive(false)}
                    >
                      <span>
                        {parseTranslationText(ele.text)} {ele.links && ">"}
                      </span>
                      {ele.links && (
                        <div className="hidden group-hover:flex flex-col pl-3 mt-3 space-y-3">
                          {ele?.links?.map((childLink, index) => (
                            <Link key={index} href={childLink.href}>
                              <a>{parseTranslationText(childLink.text)}</a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className="dlab-bnr-inr dlab-bnr-inr-lg overlay-primary-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white capitalize">
              {t(getTitle().toLowerCase().split(" ").join("-"))}
            </h1>
            <p>{t("stay-informed")}</p>
            <div className="breadcrumb-row" dir="ltr">
              <ul className="list-inline">
                <li>
                  <Link href="/">
                    <a>
                      <i className="fas fa-home"></i>
                    </a>
                  </Link>
                </li>
                <li>{t("pages")}</li>
                <li>{t(getTitle().toLowerCase().split(" ").join("-"))}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoSidenav;
