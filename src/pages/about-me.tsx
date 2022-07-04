import NoSidenav from "@/components/Navbar/NoSidenav"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Fragment } from "react"

function AboutMe() {
  const { t } = useTranslation("common")

  return (
    <Fragment>
      <NoSidenav title={t("about-me")} />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full content-inner about-me">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 m-b30">
                  <div className="row m-lr0 bg-half">
                    <div className="col-lg-6 col-md-6 align-self-center">
                      <div className="about-email-bx text-center">
                        <div className="m-b30">
                          <img src="/images/guide.png" alt="" />
                        </div>
                        <h2 className="title m-b0 text-black text-uppercase font-weight-800">
                          Free Guide
                        </h2>
                        <p className="text-black">
                          We'll email you tips to make a good impression and get
                          the offer
                        </p>
                        <form
                          className="dzSubscribe"
                          action="script/mailchamp.php"
                          method="post"
                        >
                          <div className="dzSubscribeMsg"></div>
                          <div className="form-group">
                            <input
                              name="dzEmail"
                              required
                              className="form-control"
                              placeholder="Email Address"
                              type="email"
                            />
                          </div>
                          <div className="form-group">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="btn black radius-xl btn-lg btn-block"
                            >
                              Get Started
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="about-thumb wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"
                      >
                        <img
                          className="full-img"
                          src="/images/about/pic2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 align-self-center about-me-info">
                  <h2 className="text-uppercase m-b0 title">
                    <span className="text-primary">I'M </span>Mike John
                  </h2>
                  <p className="sub-title">Blogger at start blogging online</p>
                  <div className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i>
                          <img src="/images/icon/icon-info/icon1.png" alt="" />
                        </i>
                        <strong>E-mail:</strong> ericasmile@company.com{" "}
                      </li>
                      <li>
                        <i>
                          <img src="/images/icon/icon-info/icon2.png" alt="" />
                        </i>
                        <strong>Phone:</strong>+1 256 254 84 56
                      </li>
                      <li>
                        <i>
                          <img src="/images/icon/icon-info/icon3.png" alt="" />
                        </i>
                        <strong>Location:</strong>24411 Health Center Drive,{" "}
                        <br />
                        Suite 640
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full p-t30">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 progress-bx-info m-b30">
                  <h2 className="font-40 text-black font-weight-600">
                    Our Skills <br />
                    and Expertise
                  </h2>
                  <p className="m-b0">
                    Lorem ipsum dolor sit amet, conse dipisicing elit. Ea
                    ratione optio null ius dolor maiores nulla illum Lorem ipsum
                    dolor sit amet, conse dipisic ing elit. Ea ratione optio
                    null ius dolor maiores nulla illum, Lorem ipsum dolor sit
                    amet, conse dipisicing elit. Ea ratione optio null us dolor
                    maiores nulla illum{" "}
                  </p>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="progress-section">
                    <div className="progress-bx">
                      <h6 className="title">2D Drawings</h6>
                      <div className="count-box">93%</div>
                      <div className="progress">
                        <div className="progress-bar bg-pink w-[93%]"></div>
                      </div>
                    </div>
                    <div className="progress-bx">
                      <h6 className="title">3D Modeling</h6>
                      <div className="count-box">70%</div>
                      <div className="progress">
                        <div className="progress-bar bg-red w-[70%]"></div>
                      </div>
                    </div>
                    <div className="progress-bx">
                      <h6 className="title">Moodboard</h6>
                      <div className="count-box">48%</div>
                      <div className="progress">
                        <div className="progress-bar bg-green w-[48%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 describe-about-info m-b30">
                  <h2 className="font-40 font-weight-600">
                    <i className="fas fa-user m-r15"></i>Describe About Me
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, conse dipisicing elit. Ea
                    ratione optio null ius dolor maiores nulla illum Lorem ipsum
                    dolor sit amet, conse dipisic ing elit. Ea ration e optio
                    null ius dolor maiores nulla illum, Lorem ipsum dolor sit
                    amet, conse dipisicing elit. Ea ratione optio null us dolor
                    maiores nulla illum Lorem ipsum dolor sit amet, conse
                    dipisic ing elit dipisicing elit. Ea ratione optio null ius
                    dolor maiores nulla illum Lorem ipsum dolor sit amet, conse
                    dipisic ing elit. Ea ration e optio null ius dolor maiores
                    nulla illum conse dipisicing elit. Ea ratione.
                  </p>
                  <p>
                    ione optio null ius dolor maiores nulla illum, Lorem ipsum
                    dolor sit amet ius dolor maiores nulla illum Lorem ipsum
                    dolor sit amet, conse dipisic ing elit. Ea ratio ne optio
                    null ius dolor maiores nulla illum,{" "}
                  </p>
                </div>
              </div>
              <div className="portfolio-1">
                <ul
                  id="masonry"
                  className="dlab-gallery-listing gallery-grid-4 row p-a0 gallery mfp-gallery"
                >
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img1.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Herbal Beauty Salon</h5>
                              <p>Branding and Identity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img2.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Tailoring Interior</h5>
                              <p>Branding and Brochure</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img3.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Pixflow Studio</h5>
                              <p>Branding and Identity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.8s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img4.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Designblast inc</h5>
                              <p>Web and photography</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img5.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Haeddot stone</h5>
                              <p>Branding and Identity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img6.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Educamp School</h5>
                              <p>Branding and Identity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img7.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Crop Identity</h5>
                              <p>Branding and Brochure</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.8s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect ">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img8.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">violatar Series</h5>
                              <p>Web and photography</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="card-container col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="dlab-box dlab-gallery-box">
                      <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                        <a href="javascript:void(0);">
                          {" "}
                          <img src="/images/portfolio/img8.jpg" alt="" />{" "}
                        </a>
                        <div className="overlay-bx">
                          <div className="overlay-icon align-b text-white">
                            <div className="text-white text-left port-box">
                              <h5 className="title">Johnny Cash</h5>
                              <p>Web and photography</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutMe

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  }
}
