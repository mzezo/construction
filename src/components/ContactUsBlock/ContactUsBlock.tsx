function ContactUsBlock() {
  return (
    <div className="section-full content-inner-2 contact-box">
      <div className="container">
        <div className="row align-items-center m-b50">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md m-b20 m-t5">
                <a href="javascript:void(0)" className="icon-cell text-primary">
                  <i className="ti-headphone-alt"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte m-b5">Phone</h4>
                <p>
                  Phone 01:(+032) 3456 7890 <br /> Phone 02: (+032) 3427 7670
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md m-b20 m-t5">
                <a href="javascript:void(0)" className="icon-cell text-primary">
                  <i className="ti-location-pin"></i>
                </a>
              </div>

              <div className="icon-content">
                <h4 className="dlab-tilte m-b5">Address</h4>
                <p>Spring Store London Oxford Street, 012 United Kingdom</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="icon-bx-wraper m-b30 left">
              <div className="icon-md m-b20 m-t5">
                <a href="javascript:void(0)" className="icon-cell text-primary">
                  <i className="ti-email"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte m-b5">Email</h4>
                <p>
                  Supportstore@msimple.net <br /> Info@Simplenet.net
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-head text-center">
          <h2 className="m-b5">Get in touch with us</h2>
          <p>
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache fanny pack nostrud. Photo booth anim 8
          </p>
        </div>
        <div className="dzFormMsg"></div>
        <form method="post" className="dzForm" action="script/contact.php">
          <input type="hidden" value="Contact" name="dzToDo" />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-group">
                <input
                  name="dzName"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-group">
                <input
                  name="dzEmail"
                  type="email"
                  className="form-control"
                  required
                  placeholder="Your Email Address"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-group">
                <input
                  name="dzOther[Phone]"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <textarea
                  name="dzMessage"
                  rows={4}
                  className="form-control"
                  required
                  placeholder="Your message here"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <div
                  className="g-recaptcha"
                  data-callback="verifyRecaptchaCallback"
                  data-expired-callback="expiredRecaptchaCallback"
                ></div>
                <input
                  className="form-control d-none"
                  style={{ display: "none" }}
                  data-recaptcha="true"
                  required
                  data-error="Please complete the Captcha"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 text-center">
              <button
                name="submit"
                type="submit"
                value="Submit"
                className="btn radius-xl btn-lg outline outline-2 black btn-aware"
              >
                Send Message<span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUsBlock
