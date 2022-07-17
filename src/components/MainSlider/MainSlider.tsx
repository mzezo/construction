import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUp } from "src/utils/Motion/FadeInUp"
import { useTranslation } from "next-i18next"

const MainSlider = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const { t } = useTranslation("common")

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp(0.8)}
      className=""
    >
      <div className="page-content bg-white">
        <div className="content-block">
          <div
            className="section-full bg-white content-inner-2 about-bx1"
            style={{
              backgroundImage: "url(/images/background/bg8.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeIn"
                  data-wow-delay="0.4s"
                  data-wow-duration="2s"
                >
                  <div className="radius-sm rs-wave">
                    <img src="/images/about/pic3.jpg" alt="" />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeIn"
                  data-wow-delay="0.6s"
                  data-wow-duration="2s"
                >
                  <div className="about-bx1-content flex flex-col items-start">
                    <div className="about-year capitalize">
                      <span>26</span>
                      <p className="px-2">
                        {t("years")}
                        <br />
                        {t("experience")}
                        <br />
                        {t("working")}
                      </p>
                    </div>
                    <h2>{t("architecure-is-a-visual-art")}</h2>
                    <p style={{textAlign: 'start'}}>{t("random-paragraph")}</p>
                    <a
                      href="film-strip.html"
                      className="btn outline outline-2 button-lg black radius-xl btn-aware m-r10 m-b10"
                    >
                      {t("view-portfolio")}<span></span>
                    </a>
                    <a
                      href="company-history.html"
                      className="btn outline outline-2 button-lg black radius-xl btn-aware m-b10"
                    >
                      {t("company-history")}<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MainSlider
