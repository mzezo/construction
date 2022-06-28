import ContactUsBlock from "@/components/ContactUsBlock/ContactUsBlock"
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Services() {
  return (
    <div className="page-content bg-white">

      <div className="content-block">
        <div
          className="section-full content-inner-2 video-full overlay-black-dark"
          style={{
            backgroundImage: "url(/images/background/bg11.jpg)",
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container-fluid">
            <div className="video-content-box wow fadeInRight">
              <div className="video-play">
                <a
                  href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                  className="popup-youtube video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <h2>
                Interior <span>design</span>
              </h2>
              <h6>Architecture agency</h6>
              <p>
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim
                8-bit hella,{" "}
              </p>
              <a
                href="project-detail-1.html"
                className="btn radius-xl btn-lg outline outline-2 black btn-aware"
              >
                Read More<span></span>
              </a>
            </div>
          </div>
        </div>
        <div className="section-full">
          <div className="portfolio-carousel flex">
            <div className="item">
              <div className="dlab-box portfolio-bx style2">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img
                      src="/images/portfolio/portfolio-box3/pic1.jpg"
                      alt=""
                    />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/portfolio/portfolio-box3/pic1.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                    <div className="overlay-icon align-b text-white">
                      <div className="text-white text-left port-box">
                        <h3 className="title">
                          <a href="project-detail-1.html">
                            Residential Care Project in Paris
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="dlab-box portfolio-bx style2">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img
                      src="/images/portfolio/portfolio-box3/pic2.jpg"
                      alt=""
                    />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/portfolio/portfolio-box3/pic2.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                    <div className="overlay-icon align-b text-white">
                      <div className="text-white text-left port-box">
                        <h3 className="title">
                          <a href="project-detail-2.html">
                            Concert Hall in new york
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="dlab-box portfolio-bx style2">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img
                      src="/images/portfolio/portfolio-box3/pic3.jpg"
                      alt=""
                    />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/portfolio/portfolio-box3/pic3.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                    <div className="overlay-icon align-b text-white">
                      <div className="text-white text-left port-box">
                        <h3 className="title">
                          <a href="project-detail-3.html">
                            Residential Care Project in Paris
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="dlab-box portfolio-bx style2">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img
                      src="/images/portfolio/portfolio-box3/pic4.jpg"
                      alt=""
                    />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/portfolio/portfolio-box3/pic4.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                    <div className="overlay-icon align-b text-white">
                      <div className="text-white text-left port-box">
                        <h3 className="title">
                          <a href="project-detail-4.html">
                            Modern Hotel in London
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactUsBlock />
      </div>
    </div>
  )
}

export default Services

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common"
			])),
		},
	};
};