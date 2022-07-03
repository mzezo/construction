import { useTranslation } from "next-i18next"

function FeatureGridSection() {
  const { t } = useTranslation("common")

  return (
    <div className="section-full bg-white content-inner-2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <div className="icon-bx-wraper sr-iconbox">
              <div className="icon-lg m-b20">
                <a href="javascript:void(0)" className="icon-cell">
                  <img src="/images/icon/icon1.png" alt="" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">{t("interior-design")}</h4>
                <p>
                  <span>{t("i-have-worked")}</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="2s"
          >
            <div className="icon-bx-wraper sr-iconbox">
              <div className="icon-lg m-b20">
                <a href="javascript:void(0)" className="icon-cell">
                  <img src="/images/icon/icon2.png" alt="" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">{t("architecture")}</h4>
                <p>{t("i-have-worked")}</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="2s"
          >
            <div className="icon-bx-wraper sr-iconbox">
              <div className="icon-lg m-b20">
                <a href="javascript:void(0)" className="icon-cell">
                  <img src="/images/icon/icon3.png" alt="" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">{t("product-design")}</h4>
                <p>{t("i-have-worked")}</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <div className="icon-bx-wraper sr-iconbox">
              <div className="icon-lg m-b20">
                <a href="javascript:void(0)" className="icon-cell">
                  <img src="/images/icon/icon4.png" alt="" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">{t("accreditation")}</h4>
                <p>{t("i-have-worked")}</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="2s"
          >
            <div className="icon-bx-wraper sr-iconbox">
              <div className="icon-lg m-b20">
                <a href="javascript:void(0)" className="icon-cell">
                  <img src="/images/icon/icon5.png" alt="" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">{t("foundations")}</h4>
                <p>{t("i-have-worked")}</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="2s"
          >
            <div className="icon-bx-wraper sr-iconbox">
              <div className="icon-lg m-b20">
                <a href="javascript:void(0)" className="icon-cell">
                  <img src="/images/icon/icon6.png" alt="" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">{t("enrollment")}</h4>
                <p>{t("i-have-worked")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureGridSection
