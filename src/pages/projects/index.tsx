import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import { getData } from "@/services/getData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ProjectsGrid() {
  const [projects, setProjects] = useState<any>([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<any>([]);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    getData(`/categories?populate=*&locale=${locale}`).then((data) =>
      setCategories(data?.data?.data)
    );

    getData(`/projects?populate=*&locale=${locale}`).then((data) => {
      setProjects(data?.data?.data);
    });
  }, [locale]);

  return (
    <div className="page-content">
      <div className="content-block">
        <div className="section-full bg-white content-inner-1">
          <div className="container">
            <div className="section-head text-center">
              <p className="pre-title">PORTA VITAE MAURIS VEL</p>
              <h2 className="head-title m-b10">Our Best Projects</h2>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="site-filters filter-style1 clearfix m-b20">
                  <ul className="filters" data-toggle="buttons">
                    {categories?.slice(0, 4)?.map((item: any) => (
                      <li onClick={() => setCategory(item?.attributes?.name)} className={`btn  ${
                        category === item?.attributes?.name
                          ? "active"
                          : ""
                      }`}>
                         <input type="radio" />
                        <a>
                          <span>{item?.attributes?.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix">
            <ul
              id="masonry"
              className="dlab-gallery-listing gallery mfp-gallery text-center portfolio-bx  container grid grid-cols-2 md:grid-cols-4"
            >
              {[...projects, ...projects].map((ele:any) => (
                <PortfolioCard key={ele?.id} {...ele?.attributes} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsGrid;
