import BlogSidebar from "./BlogSidebar"

function BlogLayoutContainer({ children }: { children: any }) {
  return (
    <div className="content-block">
      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-12">{children}</div>
            <div className="col-xl-4 col-lg-5 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLayoutContainer
