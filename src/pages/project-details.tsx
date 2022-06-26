import { useEffect, useState } from "react"
import FadeInAnimate from "@/components/UI/FadeInAnimate"
import { getData } from "@/services/getData"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

function Project({ projectData }: any) {

  const { t } = useTranslation("common")

  return (
    <div className="section-full content-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-b30">
            <div className="section-head style1">
              <p className="pre-title">YEAR {projectData.date.split("-")[0]}</p>
              <h2>
                {projectData.name}
              </h2>
            </div>
            <p className="m-b30">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack.
            </p>
            <p className="m-b30">
              {projectData.description}
            </p>
            <a
              href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
              className="popup-youtube m-r20 video btn outline outline-2 button-lg black radius-xl btn-aware btn-video"
            >
              <i className="fas fa-play"></i>
              <span></span>
            </a>
            <a
              href="contact-us-1.html"
              className="btn outline outline-2 button-lg black radius-xl btn-aware"
            >
              {t("contact-us")}
              <span></span>
            </a>
          </div>
          <div className="col-lg-7">
            <div
              className="m-b30 wow fadeIn mfp-gallery"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-box portfolio-bx style2 project-media">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img src="/images/projects/img3.jpg" alt="" />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/projects/img3.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-user"></i>
                  <strong>CLIENT</strong> {projectData.client}
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-user"></i>
                  <strong>ARCHITECT</strong>Jimmy Smith
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-location-pin"></i>
                  <strong>LOCATION</strong> {projectData.location}
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-ruler-alt-2"></i>
                  <strong>SIZE</strong>1,200m<sup>2</sup>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-home"></i>
                  <strong>TYPE</strong>Residential Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectDetails() {
  const [projects, setProjects] = useState<any>([])

  const { t } = useTranslation("common")

  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    getData(`/projects?populate=*&locale=${locale}`).then((data) => {
      setProjects(data?.data?.data)
      console.log(projects)
    })
  }, [])

  return (
    <div className="page-content">
      <div className="section-full content-inner-2">
        <div className="container">
          <div className="row">
            <FadeInAnimate className="col-lg-12 wow fadeInUp mfp-gallery">
              <div className="dlab-box portfolio-bx style2 project-media">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img src="/images/projects/img1.jpg" alt="" />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/projects/img1.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInAnimate>
          </div>
        </div>
      </div>

      <FadeInAnimate
        className="section-full content-inner-2 overlay-primary-middle wow fadeIn"
        style={{
          backgroundImage: "url(/images/projects/img2.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 video-bx">
              <div className="video-play play-bg-primary">
                <a
                  href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                  className="popup-youtube video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInAnimate>

      <div className="section-full content-inner-1">
        <div className="container">
          <div className="row our-gallery mfp-gallery">
            <FadeInAnimate className="col-lg-12 col-md-12 col-sm-12 m-b30 wow fadeInUp">
              <div className="dlab-box portfolio-bx style2 project-media">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img src="/images/gallery/pic5.jpg" alt="" />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/gallery/pic5.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInAnimate>
            <FadeInAnimate className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeInLeft">
              <div className="dlab-box portfolio-bx style2 project-media">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img src="/images/gallery/gallery-6/pic3.jpg" alt="" />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/gallery/gallery-6/pic3.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInAnimate>
            <FadeInAnimate className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeInRight">
              <div className="dlab-box portfolio-bx style2 project-media">
                <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                  <a href="javascript:void(0);">
                    {" "}
                    <img src="/images/gallery/gallery-6/pic4.jpg" alt="" />{" "}
                  </a>
                  <div className="overlay-bx">
                    <a
                      href="images/gallery/gallery-6/pic4.jpg"
                      className="mfp-link"
                      title="Title Come Here"
                    >
                      <i className="ti-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInAnimate>
          </div>
        </div>
      </div>

      {projects.map((ele: any, index: number) => (
        <Project key={index} projectData={ele.attributes}  />
      ))}
    </div>
  )
}

export default ProjectDetails
