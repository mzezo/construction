import ReactMarkdown from "react-markdown";

function AuthorBlock() {
  return (
    <div className="author-box blog-user m-b60">
      <div className="author-profile-info">
        <div className="author-profile-pic">
          <img src="/images/testimonials/pic1.jpg" alt="" />
        </div>
        <div className="author-profile-content">
          <h5>John Doe</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum
            ac vehicula leo dulam nullam rhoncus tortor at dignissim vehicula.
            Vestibulum ac vehicula leo dulam nullam rhoncus tortor at dignissim
            vehicula.
          </p>
          <ul className="list-inline m-b0">
            <li>
              <a href="javascript:void(0);" className="btn-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="btn-link">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="btn-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="btn-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function BlogHeader() {
  return (
    <div className="dlab-post-info">
      <div className="dlab-post-title">
        <h2 className="post-title">
          Magazine Charts the Most Fashionable New York Women in 2017
        </h2>
      </div>
      <div className="dlab-post-meta">
        <ul className="d-flex align-items-center">
          <li className="dlab-post-name">
            {" "}
            <img src="/images/testimonials/pic3.jpg" alt="" /> Posted by{" "}
            <a href="javascript:void(0)" className="site-button-link">
              Admin
            </a>
          </li>
          <li className="post-date"> 24 Sep 2017 </li>
          <li className="post-author">
            <i className="ti ti-thumb-up"></i>{" "}
            <a href="javascript:void(0)">18</a>{" "}
          </li>
          <li className="post-comment">
            <i className="ti ti-comments"></i>{" "}
            <a href="javascript:void(0)">9</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  )
}


// TODO: sync data
function BlogDetails({blog}: any) {
  return (
    <>
      <div className="blog-post blog-single blog-post-style-2 sidebar">
        {/* <BlogHeader /> */}
        <div
          className="dlab-post-media blog-single post-link wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <a href="javascript:;">
            <img 
              src={blog?.image?.data?.attributes?.url  || "/images/blog/large/pic3.jpg"} 
              alt=""
              className="h-[380px] bg-cover"
            />
          </a>
          {/* <a href="" className="post-link-in">
            MARKETING
          </a> */}
        </div>
        <div className="dlab-post-info">
          <div className="dlab-post-text text">
            <h4>
              {blog?.name}
            </h4>
            
            <ReactMarkdown children={blog?.description} />

            
           
           
          </div>
          {/* <div className="dlab-post-tags d-flex">
            <div className="post-tags">
              Tage :<a href="javascript:void(0);">Creative</a>
              <a href="javascript:void(0);">Media</a>
              <a href="javascript:void(0);">Fashion</a>
              <a href="javascript:void(0);">Photography</a>
            </div>
            <div className="share-post ml-auto">
              <ul className="slide-social">
                <li>Share:</li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      {/* <AuthorBlock /> */}
    </>
  )
}

export default BlogDetails
