import { Fragment, useEffect, useState } from "react"
import FadeInAnimate from "@/components/UI/FadeInAnimate"
import { getData } from "@/services/getData"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


function Project({ projectData }: any) {
  console.log('Project Data', projectData);
  const { t } = useTranslation("common")

  return (
    <Fragment>
      <div className="section-full content-inner">
        <div className="container">
        <div className="row">
					<div className="col-lg-12 wow fadeInUp mfp-gallery" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-box portfolio-bx style2 project-media">
							<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
								<a href="javascript:void(0);"> <img src={projectData?.images?.data?.[0]?.attributes?.url} alt="" className="object-cover my-4" style={{height: '450px'}}/> </a>
								<div className="overlay-bx">
									<a href="images/projects/img1.jpg" className="mfp-link" title="Title Come Here"><i className="ti-zoom-in"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
        <div className="row our-gallery mfp-gallery">
					<div className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-box portfolio-bx style2 project-media">
							<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
								<a href="javascript:void(0);"> <img  src={projectData?.images?.data?.[1]?.attributes?.url} alt="" style={{height: '300px'}} /> </a>
								<div className="overlay-bx">
									<a href="images/gallery/gallery-6/pic3.jpg" className="mfp-link" title="Title Come Here"><i className="ti-zoom-in"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="dlab-box portfolio-bx style2 project-media">
							<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
								<a href="javascript:void(0);"> <img  src={projectData?.images?.data?.[2]?.attributes?.url} alt="" style={{height: '300px'}}/> </a>
								<div className="overlay-bx">
									<a href="images/gallery/gallery-6/pic4.jpg" className="mfp-link" title="Title Come Here"><i className="ti-zoom-in"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
          <div className="row">
            <div className="col-lg-5 m-b30">
              <div className="section-head style1">
                <p className="pre-title">YEAR {projectData.date.split("-")[0]}</p>
                <h2>{projectData.name}</h2>
              </div>
              <p className="m-b30">
                <ReactMarkdown children={projectData.description} />
              </p>
              {/* <a
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
              </a> */}
            </div>
            <div className="col-lg-7">
              <div
                className="m-b30 wow fadeIn mfp-gallery"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-box portfolio-bx style2 project-media">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect ">
                    <a href="javascript:void(0);">
                      <img
                        src={projectData.image.data.attributes.url}
                        className="object-cover aspect-square w-full"
                        alt=""
                      />
                    </a>
                    <div className="overlay-bx">
                      <a
                        href={projectData.image.data.attributes.url}
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
                    <strong>{t("client")}</strong> {projectData.client}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                  <div className="pro-details">
                    <i className="ti ti-user"></i>
                    <strong>{t('architects')}</strong>{projectData.architect}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                  <div className="pro-details">
                    <i className="ti ti-location-pin"></i>
                    <strong>{t('location')}</strong> {projectData.location}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                  <div className="pro-details">
                    <i className="ti ti-ruler-alt-2"></i>
                    <strong>{t('size')}</strong>{projectData?.size}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 p-lr0">
                  <div className="pro-details">
                    <i className="ti ti-home"></i>
                    <strong>{t('project-type')}</strong>{projectData?.category?.data?.attributes?.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

function ProjectDetails() {
  const [project, setProject] = useState<any>({})

  // const { t } = useTranslation("common")

  const router = useRouter()
  const {
    locale,
    query: { id },
  } = router

  useEffect(() => {
    if (id) {
      getData(`/projects/${id}?populate=*&locale=${locale}`)
        .then((data) => setProject(data?.data?.data))
        .catch(() => router.push("/"))
    }
  }, [id, locale])

  return (
    <Fragment>
      <div className="page-content">
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
        {project?.attributes && <Project projectData={project.attributes} />}
      </div>
    </Fragment>
  )
}

export default ProjectDetails

export async function getStaticPaths() {
  return {
      paths: [
          {  params: { id: '1' } },
          {  params: { id: '2' } },
          {  params: { id: '3' } },
      ],
      fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common"
			])),
		},
	};
};