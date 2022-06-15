function BlogEntry({ title, description, href, imgSrc, footerText }: { title: string, description: string, href: string, imgSrc: string, footerText: string }) {
  return (
    <div className="item">
      <div className="blog-post blog-grid style1">
        <div className="blog-media">
          <img src={imgSrc || "images/blog/card/pic1.jpg"} alt="" />
        </div>
        <div className="dlab-post-text">
          <div className="dlab-post-title">
            <h4 className="post-title font-weight-600">
              <a href={href}>{title}</a>
            </h4>
          </div>

          <p>
            {description}
          </p>
          <div className="dlab-post-meta">
            <ul>
              <li className="post-date">
                <i className="far fa-clock"></i> {footerText}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogEntry
