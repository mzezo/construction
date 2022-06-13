import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGooglePlus, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return (
    <header className="site-header mo-left header-full header style1 ">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix ">
                <div className="container-fluid">
					<div className="header-content-bx">
						<div className="logo-header">
							<a href="index.html"><img src="images/logo-white.png" alt=""/></a>
						</div>
						<div className="extra-nav">
							<div className="extra-cell">
								<ul>
									<li className="header-social">
										<ul>
                      <li><a href="#"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
											<li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
											<li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
											<li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
										</ul>
									</li>
									<li className="contact-no"><span>+38 (097) 252 79 55</span></li>
									<li className="search-btn">
										<a href="javascript:;" className="btn radius-xl white menu-icon">
											<div className="menu-icon-in">
												<span></span>
												<span></span>
												<span></span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
		<div className="header-nav navbar-collapse collapse full-sidenav content-scroll">
			<div className="logo-header">
				<a href="index.html"><img src="images/logo.png" alt=""/></a>
			</div>
			<ul className="nav navbar-nav">	                                                                          
				<li className="active"><a href="#">Layouts <i className="fa fa-chevron-down"></i></a>
					<ul className="sub-menu">
						<li><a href="index.html" className="dez-page">Home 01</a></li>
						<li><a href="index-dark.html" className="dez-page">Home Dark 01</a></li>
						<li><a href="index-2.html" className="dez-page">Home 02</a></li>
						<li><a href="index-dark-2.html" className="dez-page">Home Dark 02</a></li>
						<li><a href="index-3.html" className="dez-page">Home 03</a></li>
						<li><a href="index-dark-3.html" className="dez-page">Home Dark 03</a></li>
						<li><a href="index-4.html" className="dez-page">Home 04</a></li>
						<li><a href="index-dark-4.html" className="dez-page">Home Dark 04</a></li>
						<li><a href="index-5.html" className="dez-page">Home 05</a></li>
						<li><a href="index-dark-5.html" className="dez-page">Home Dark 05</a></li>
					</ul>	
				</li>
				<li><a href="#">Pages <i className="fa fa-chevron-down"></i></a>
					<ul className="sub-menu">
						<li><a href="about-me.html" className="dez-page">About Me</a></li>
						<li><a href="about-us-1.html" className="dez-page">About Us 01</a></li>
						<li><a href="about-us-2.html" className="dez-page">About Us 02</a></li>
						<li><a href="services.html" className="dez-page">Services</a></li>
						<li><a href="company-exhibition.html" className="dez-page">Company Exhibition</a></li>
						<li><a href="company-history.html" className="dez-page">Company History</a></li>
						<li><a href="price-table.html" className="dez-page">Price Table</a></li>
						<li><a href="coming-soon.html" className="dez-page">Coming Soon</a></li>
						<li><a href="404-page.html" className="dez-page">404 Page</a></li>
					</ul>	
				</li>
				<li><a href="#">Blog <i className="fa fa-chevron-down"></i></a>
					<ul className="sub-menu">
						<li><a href="blog-grid.html" className="dez-page">Blog Grid</a></li>
						<li><a href="blog-list.html" className="dez-page">Blog Listing</a></li>
						<li><a href="blog-masonry.html" className="dez-page">Blog Masonry</a></li>
						<li><a href="blog-details.html" className="dez-page">Blog Details</a></li>
					</ul>
				</li>
				<li><a href="#">Portfolio <i className="fa fa-chevron-down"></i></a>
					<ul className="sub-menu">
						<li><a href="portfolio-1.html" className="dez-page">Portfolio Masonary</a></li>
						<li><a href="portfolio-2.html" className="dez-page">Portfolio Tiles Filter</a></li>
						<li><a href="carousel-showcase.html" className="dez-page">Portfolio Owl Showcase</a></li>
						<li><a href="film-strip.html" className="dez-page">Portfolio Flim Strip</a></li> 
						<li><a href="split-slider.html" className="dez-page">Portfolio Split Slider</a></li>
						<li><a href="split-slider-dark.html" className="dez-page">Portfolio Split Slider Dark</a></li>
						<li><a href="project-detail-1.html" className="dez-page">Project Detail 01</a></li>
						<li><a href="project-detail-2.html" className="dez-page">Project Detail 02</a></li>
						<li><a href="project-detail-3.html" className="dez-page">Project Detail 03</a></li>
						<li><a href="project-detail-4.html" className="dez-page">Project Detail 04</a></li>
					</ul>
				</li>
				<li><a href="#">Contact Us <i className="fa fa-chevron-down"></i></a>
					<ul className="sub-menu">
						<li><a href="contact-us-1.html" className="dez-page">Contact Us 01</a></li>
						<li><a href="contact-us-2.html" className="dez-page">Contact Us 02</a></li>
					</ul>
				</li>
			</ul>
			<div className="social-menu">
				<ul>
					<li><a href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
					<li><a href="javascript:void(0);"><FontAwesomeIcon icon={faFacebook} /></a></li>
					<li><a href="javascript:void(0);"><i className="fa fa-google-plus"></i></a></li>
					<li><a href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
				</ul>
				<p className="copyright-head">© 2020 Archia</p>
			</div>
		</div>
		<div className="menu-close">
			<i className="ti-close"></i>
		</div>
    </header>
  )
}

export default Navbar