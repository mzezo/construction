import Gallery from "@/components/Gallery/Gallery"
import NoSidenav from "@/components/Navbar/NoSidenav"

import { Fragment } from "react"
// import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import { getData } from "@/services/getData";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

function ProjectsGrid() {

  const { t } = useTranslation("common")

  // const [projects, setProjects] = useState<any>([]);
  // const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState<any>([]);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    getData(`/categories?populate=*&locale=${locale}`).then((data) =>
      // setCategories(data?.data?.data)
    );

    getData(`/projects?populate=*&locale=${locale}`).then((data) => {
      // setProjects(data?.data?.data);
    });
  }, [locale]);

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

export default ProjectsGrid;
