import { useRouter } from "next/router"

// TODO: ul arrow problem
// TODO: nav responsive issue
function NoSidenav({ pathname }: { pathname: string }) {

  const router = useRouter()

  console.log(router)

  const getTitle = () => pathname.split("-").join(' ').replace('/', '')

  return (
    <>
      <header className="site-header header header-transparent header-archia mo-left">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container">
              <div className="logo-header mostion">
                <a href="index.html">
                  <img className="logo" src="/images/logo-white.png" alt="" />
                </a>
              </div>
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul>
                    <li>
                      <div className="contact-info">
                        <i className="fas fa-phone-alt"></i>
                        <span>Phone</span>
                        <h4 className="m-b0">003 746 87 92</h4>
                      </div>
                    </li>
                    <li>
                      <a
                        id="quik-search-btn"
                        href="javascript:;"
                        className="search-btn"
                      >
                        <i className="fas fa-search"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dlab-quik-search">
                <form action="#">
                  <input
                    name="search"
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Keyword ..."
                  />
                  <span id="quik-search-remove">
                    <i className="ti-close"></i>
                  </span>
                </form>
              </div>
              <div
                className="header-nav navbar-collapse collapse justify-content-end mo-nav"
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <a href="index.html">
                    <img src="/images/logo.png" alt="" />
                  </a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="#">
                      Layouts <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html" className="dez-page">
                          Home 01
                        </a>
                      </li>
                      <li>
                        <a href="index-dark.html" className="dez-page">
                          Home Dark 01
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html" className="dez-page">
                          Home 02
                        </a>
                      </li>
                      <li>
                        <a href="index-dark-2.html" className="dez-page">
                          Home Dark 02
                        </a>
                      </li>
                      <li>
                        <a href="index-3.html" className="dez-page">
                          Home 03
                        </a>
                      </li>
                      <li>
                        <a href="index-dark-3.html" className="dez-page">
                          Home Dark 03
                        </a>
                      </li>
                      <li>
                        <a href="index-4.html" className="dez-page">
                          Home 04
                        </a>
                      </li>
                      <li>
                        <a href="index-dark-4.html" className="dez-page">
                          Home Dark 04
                        </a>
                      </li>
                      <li>
                        <a href="index-5.html" className="dez-page">
                          Home 05
                        </a>
                      </li>
                      <li>
                        <a href="index-dark-5.html" className="dez-page">
                          Home Dark 05
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Pages <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about-me.html" className="dez-page">
                          About Me
                        </a>
                      </li>
                      <li>
                        <a href="about-us-1.html" className="dez-page">
                          About Us 01
                        </a>
                      </li>
                      <li>
                        <a href="about-us-2.html" className="dez-page">
                          About Us 02
                        </a>
                      </li>
                      <li>
                        <a href="services.html" className="dez-page">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="company-exhibition.html" className="dez-page">
                          Company Exhibition
                        </a>
                      </li>
                      <li>
                        <a href="company-history.html" className="dez-page">
                          Company History
                        </a>
                      </li>
                      <li>
                        <a href="price-table.html" className="dez-page">
                          Price Table
                        </a>
                      </li>
                      <li>
                        <a href="coming-soon.html" className="dez-page">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="404-page.html" className="dez-page">
                          404 Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Blog <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid.html" className="dez-page">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        <a href="blog-list.html" className="dez-page">
                          Blog Listing
                        </a>
                      </li>
                      <li>
                        <a href="blog-masonry.html" className="dez-page">
                          Blog Masonry
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html" className="dez-page">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Portfolio <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="portfolio-1.html" className="dez-page">
                          Portfolio Masonary
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-2.html" className="dez-page">
                          Portfolio Tiles Filter
                        </a>
                      </li>
                      <li>
                        <a href="carousel-showcase.html" className="dez-page">
                          Portfolio Owl Showcase
                        </a>
                      </li>
                      <li>
                        <a href="film-strip.html" className="dez-page">
                          Portfolio Flim Strip
                        </a>
                      </li>
                      <li>
                        <a href="split-slider.html" className="dez-page">
                          Portfolio Split Slider
                        </a>
                      </li>
                      <li>
                        <a href="split-slider-dark.html" className="dez-page">
                          Portfolio Split Slider Dark
                        </a>
                      </li>
                      <li>
                        <a href="project-detail-1.html" className="dez-page">
                          Project Detail 01
                        </a>
                      </li>
                      <li>
                        <a href="project-detail-2.html" className="dez-page">
                          Project Detail 02
                        </a>
                      </li>
                      <li>
                        <a href="project-detail-3.html" className="dez-page">
                          Project Detail 03
                        </a>
                      </li>
                      <li>
                        <a href="project-detail-4.html" className="dez-page">
                          Project Detail 04
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Contact Us <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="contact-us-1.html" className="dez-page">
                          Contact Us 01
                        </a>
                      </li>
                      <li>
                        <a href="contact-us-2.html" className="dez-page">
                          Contact Us 02
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="social-menu">
                  <ul>
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
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright-head">© 2022 Archia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div
        className="dlab-bnr-inr dlab-bnr-inr-lg overlay-primary-middle bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white capitalize">{getTitle()}</h1>
            <p>Stay informed on our news or events!</p>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <a href="index.html">
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li>Pages</li>
                <li>{getTitle()}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoSidenav
