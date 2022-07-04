import NoSidenav from "@/components/Navbar/NoSidenav"
import FadeInAnimate from "@/components/UI/FadeInAnimate"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Fragment } from "react"

function CompanyHistory() {

  const { t } = useTranslation("common")

  return (
    <Fragment>
      <NoSidenav title={t("compant-history")}  />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full content-inner-1">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="animation-jet">
                    <img src="/images/jet.png" alt="" />
                  </div>
                  <h3 className="m-b30">
                    Looking for an agency near you but not{" "}
                    <span className="text-red">finding what you want?</span>{" "}
                    <br />
                    We understand how to work with you.
                  </h3>
                  <a
                    href="javascript:void(0);"
                    className="btn black outline outline-2 radius-xl"
                  >
                    More Information
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full content-inner-1">
            <div className="container">
              <div className="row">
                <FadeInAnimate className="col-md-12 wow fadeInRight">
                  <div className="history-box right">
                    <div className="history-details">
                      <div className="history-head">
                        <h2>2018</h2>
                        <h3>Online Network Connection Monitor</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conse dipisicing elit. Ea
                        ratione optio null ius dolor maiores nulla illum,{" "}
                      </p>
                    </div>
                    <div className="history-media">
                      <img
                        src="/images/projects/project-slide/img1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </FadeInAnimate>
                <FadeInAnimate className="col-md-12 wow fadeInLeft">
                  <div className="history-box">
                    <div className="history-details">
                      <div className="history-head">
                        <h2>2016</h2>
                        <h3>Online Network Connection Monitor</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conse dipisicing elit. Ea
                        ratione optio null ius dolor maiores nulla illum,{" "}
                      </p>
                    </div>
                    <div className="history-media">
                      <img
                        src="/images/projects/project-slide/img2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </FadeInAnimate>
                <FadeInAnimate className="col-md-12 wow fadeInRight">
                  <div className="history-box right">
                    <div className="history-details">
                      <div className="history-head">
                        <h2>2014</h2>
                        <h3>Online Network Connection Monitor</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conse dipisicing elit. Ea
                        ratione optio null ius dolor maiores nulla illum,{" "}
                      </p>
                    </div>
                    <div className="history-media">
                      <img
                        src="/images/projects/project-slide/img3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </FadeInAnimate>
                <FadeInAnimate className="col-md-12 wow fadeInLeft">
                  <div className="history-box">
                    <div className="history-details">
                      <div className="history-head">
                        <h2>2012</h2>
                        <h3>Online Network Connection Monitor</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, conse dipisicing elit. Ea
                        ratione optio null ius dolor maiores nulla illum,{" "}
                      </p>
                    </div>
                    <div className="history-media">
                      <img
                        src="/images/projects/project-slide/img1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </FadeInAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CompanyHistory

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  }
}
