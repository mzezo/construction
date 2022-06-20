function BlogEntry({ name, description, href, image, date }: { name: string, description: string, href: string, image: any, date: string }) {
  return (
    <div className="item">
      <div className="blog-post blog-grid style1">
        <div className="blog-media">
          <img className="max-h-[230px] bg-cover" src={image?.data?.attributes?.url || "images/blog/card/pic1.jpg"} alt="" />
        </div>
        <div className="dlab-post-text">
          <div className="dlab-post-title">
            <h4 className="post-title font-weight-600">
              <a href={href}>{name}</a>
            </h4>
          </div>

          <p className="">
            {description}
          </p>
          <div className="dlab-post-meta">
            <ul>
              <li className="post-date">
                <i className="far fa-clock"></i> {date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogEntry
