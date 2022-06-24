import { useRouter } from 'next/router';
import { useState } from 'react';

import SidenavDropdown from './SidenavDropdown';

const Navbar = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  const toggle = () => setShowSidenav(!showSidenav);
  const router = useRouter();
	const { asPath } = router;

  return (
    <header className="site-header mo-left header-full header style1">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container-fluid">
            <div className="header-content-bx w-full flex justify-between">
              <div className="logo-header">
                <a href="index.html">
                  <img src="/images/logo-white.png" alt="" />
                </a>
              </div>
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul>
                    <li className="header-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="contact-no">
                      <span>+38 (097) 252 79 55</span>
                    </li>
                    <li className="">
                      <a
                        href="#"
                        className="btn radius-xl white menu-icon"
                        onClick={toggle}
                      >
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
      <div
        className={`header-nav navbar-collapse collapse full-sidenav content-scroll ${
          showSidenav && 'active'
        }`}
      >
        <div className="logo-header">
          <a href="index.html">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
        <ul className="nav navbar-nav">
          <SidenavDropdown
            text="Layout"
            links={[{ text: 'Home', href: '#' }]}
          />

          <SidenavDropdown
            text="Pages"
            links={[
              { text: 'About me', href: '#' },
              { text: 'Services', href: '#' },
              { text: 'Compnay history', href: '#' },
              { text: 'Price table', href: '#' },
            ]}
          />

          <SidenavDropdown
            text="blog"
            links={[{ text: 'About me', href: '#' }]}
          />

          {/* <SidenavDropdown
            text="Portfolio"
            links={[{ text: 'About me', href: '#' }]}
          /> */}

          <SidenavDropdown
            text="Contact Us"
            links={[{ text: 'About me', href: '#' }]}
          />
          <SidenavDropdown
            text="Language"
            handleCloseNav={toggle}
            links={[{ 
              text: 'en',
              href: '#',
              onClick: () => router.push(asPath, undefined, {
              locale: 'en',
            })},
            { text: 'ar',
              href: '#',
              onClick: () => router.push(asPath, undefined, {
                locale: 'ar',
            })},]}
          />
        </ul>
        <div className="social-menu">
          <ul>
            <li>
              <a href="#;">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#;">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#;">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#;">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
          <p className="copyright-head">© 2020 Archia</p>
        </div>
      </div>
      <div className={`menu-close ${showSidenav && 'active'}`} onClick={toggle}>
        <i className="ti-close"></i>
      </div>
    </header>
  );
};

export default Navbar;
