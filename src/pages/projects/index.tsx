import Gallery from "@/components/Gallery/Gallery"
import NoSidenav from "@/components/Navbar/NoSidenav"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Fragment } from "react"

function Portfolio() {

  const { t } = useTranslation("common")

  return (
    <Fragment>
      <NoSidenav title={t("projects")} />
      <div className="pt-0 page-content">
        <div className="content-block">
          <Gallery title={t("our-best-projects")} />
        </div>
      </div>
    </Fragment>
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
