import Gallery from "@/components/Gallery/Gallery"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

function Portfolio() {

  const { t } = useTranslation("common")

  return (
    <div className="page-content">
      <div className="content-block">
        <Gallery title={t("our-best-projects")} />
      </div>
    </div>
  )
}

export default Portfolio

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common"
			])),
		},
	};
};
