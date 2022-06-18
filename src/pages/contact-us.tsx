import ContactUsBlock from "@/components/ContactUsBlock/ContactUsBlock"

function ContactUs() {
  return (
    <div className="page-content bg-white">
      <div className="content-block">
        <div className="section-full content-inner-1">
          <div className="container-fluid">
            <div className="section-head text-center contact-title">
              <span>Contact us</span>
              <h2 className="head-title">Always Help You</h2>
              <p>
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim 8
              </p>
            </div>
            <div className="banner-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758277.1655481015!2d30.125318577288198!3d30.601952684778983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14562ee4122a9f9f%3A0xc6390d702e96d68f!2z2KfZg9in2K_ZitmF2YrYqSDYp9mE2LTYsdmI2YI!5e0!3m2!1sen!2seg!4v1655488734988!5m2!1sen!2seg" width="600" height="450" className="border-none w-full h-[600px]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <ContactUsBlock />
      </div>
    </div>
  )
}

export default ContactUs
