import Gallery from "@/components/Gallery/Gallery"
import NoSidenav from "@/components/Navbar/NoSidenav"

import { Fragment } from "react"
// import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import { useTranslation } from "next-i18next";

function ProjectsGrid() {

  const { t } = useTranslation("common")

  // const [projects, setProjects] = useState<any>([]);
  // const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState<any>([]);
 

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
