import { useTranslation } from "next-i18next"

function Footer() {
  const { t } = useTranslation("common")

  return (
    <>
      <footer className="site-footer archi-footer mt-10">
        <div
          className="footer-top"
          style={{
            backgroundImage: `url(images/background/bg5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "0 -150px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-12 d-flex">
                <div className="footer-logo align-self-center">
                  <img src="/images/logo-white.png" alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="widget widget-info">
                  <h6 className="title text-primary text-uppercase">
                    {t("call-us")}
                  </h6>
                  <p>
                    <span className="font-weight-600">{t("phone")}:</span> +1
                    564 345-750-421
                  </p>
                  <p>
                    <span className="font-weight-600">{t("fax")}:</span> +1 564
                    354-755-432
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="widget widget-info">
                  <h6 className="title text-primary text-uppercase">
                    {t("contact-us")}
                  </h6>
                  <p>support@youremail.com</p>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="widget widget-info">
                  <h6 className="title text-primary text-uppercase">
                    {t("our-address")}
                  </h6>
                  <p>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="col-12 text-center">
              <p>
                Crafted With <span className="heart"></span> By DexignZone
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
