import Navbar from "@/components/Navbar/Navbar"
import HomeMainBanner from "@/components/HomeMainBanner/HomeMainBanner"
import MainSlider from "@/components/MainSlider/MainSlider"
import ContactForm from "@/components/ContactForm/ContactForm"
import Gallery from "@/components/Gallery/Gallery"
import LuxurySection from "@/components/LuxurySection/LuxurySection"
import FeatureGridSection from "@/components/FeatureGridSection/FeatureGridSection"
// import Testimonials from "@/components/Testimonials/Testimonials"
import BlogEnteries from "@/components/BlogEnteries/BlogEnteries"
import LatestProject from "@/components/LatestProject/LatestProject"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next"

const Index = () => {
  return (
    <>
      <Navbar />
      <HomeMainBanner />
      <MainSlider />
      <LatestProject />
      <ContactForm />
      <Gallery />
      <LuxurySection />
      <FeatureGridSection />
      {/* <Testimonials /> */}
      <BlogEnteries />
    </>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common"
			])),
		},
	};
};