function GalleryImage({ imgSrc, title, subtitle, href }: { imgSrc?: string, title: string, subtitle: string, href: string }) {
  return (
    <li
      className="card-container col-lg-4 col-md-6 col-sm-6 royal wow fadeInUp"
    >
      <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3">
        <img src={imgSrc || "images/portfolio/portfolio-box2/pic1.jpg"} alt="" />
        <div className="overlay-bx">
          <div className="portinner">
            <div className="port-up">
              <span className="text-primary">{subtitle}</span>
              <h3 className="port-title">
                <a href="project-detail-1.html">{title}</a>
              </h3>
            </div>
            <div className="port-down">
              <a href={href} className="btn-link">
                View Detail <i className="la la-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default GalleryImage
