import { motion, useAnimation } from "framer-motion"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fadeInUp } from "src/utils/Motion/FadeInUp"
const ContactForm = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const { t } = useTranslation("common")

  const router = useRouter()
  const { locale } = router
  console.log(locale)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      {/* TODO: fix the container issue */}

      {/* CONTACT FORM */}
      <div className="section-full content-inner-2 form-content-box bg-white">
        <div className="container">
          <div className="form-box">
            <div className="row m-b40">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.4s"
                data-wow-duration="2s"
              >
                <h3 className="title">{t("the-principle")}</h3>
                <span className="sign">
                  <img src="/images/sign-2.png" alt="" />
                  {t("creative")}. {t("modern")}. {t("smart")}.
                </span>
              </div>
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeInUp(1)}
                className="col-lg-6 wow fadeInUp"
              >
                <div
                  className={`form-img ${locale === "ar" && "-left-[120px]"}`}
                >
                  <img src="/images/laptop.png" alt="" />
                </div>
              </motion.div>
            </div>
            <form className="row sp20">
              <div
                className="col-lg-4 col-md-4 wow fadeIn"
                data-wow-delay="0.6s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzName"
                    type="text"
                    required
                    className="form-control"
                    placeholder={t("name")}
                  />
                </div>
              </div>
              <div
                className="col-lg-8 col-md-8 wow fadeIn"
                data-wow-delay="0.8s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzOther[Subject]"
                    type="text"
                    required
                    className="form-control"
                    placeholder={t("business-services-consulting")}
                  />
                </div>
              </div>
              <div
                className="col-lg-5 col-md-5 wow fadeIn"
                data-wow-delay="1.0s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzEmail"
                    type="email"
                    className="form-control"
                    required
                    placeholder={t("email")}
                  />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-7 wow fadeIn"
                data-wow-delay="1.2s"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <input
                    name="dzOther[Phone]"
                    type="text"
                    required
                    className="form-control"
                    placeholder={t("phone")}
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-12 wow fadeIn"
                data-wow-delay="1.6s"
                data-wow-duration="2s"
              >
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="btn btn-lg radius-xl black"
                >
                  {t("send-to-us")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
