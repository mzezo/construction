import Navbar from "@/components/Navbar/Navbar";
import HomeMainBanner from "@/components/HomeMainBanner/HomeMainBanner";
import MainSlider from "@/components/MainSlider/MainSlider";
import ContactForm from "@/components/ContactForm/ContactForm";
import Gallery from "@/components/Gallery/Gallery";
import LuxurySection from "@/components/LuxurySection/LuxurySection";
import FeatureGridSection from "@/components/FeatureGridSection/FeatureGridSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import BlogEnteries from "@/components/BlogEnteries/BlogEnteries";
import Footer from "@/components/Footer/Footer";

const Index = () => {

  return (
    <>
      <Navbar />
      <HomeMainBanner />
      <MainSlider />
      <ContactForm />
      <Gallery />
      <LuxurySection />
      <FeatureGridSection />
      <Testimonials />
      <BlogEnteries />
      <Footer />
    </>
  );
};

export default Index;
