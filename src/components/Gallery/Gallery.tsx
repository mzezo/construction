import { useState, useEffect } from "react"
import GalleryImage from "./GalleryImage"
import { getData } from "../../services/getData"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

function Gallery({ title }: any) {
  const [category, setCategory] = useState("")
  const [projects, setProjects] = useState<any>([{ id: 1 }])
  const [filteredprojects, setFilteredProjects] = useState<any>([{ id: 1 }])
  const [categories, setCategories] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { locale } = router

  const { t } = useTranslation("common")

  useEffect(() => {
    getData(`/projects?populate=*&locale=${locale}`).then((data) => {
      setProjects(data?.data?.data)
      setFilteredProjects(data?.data?.data)
      setLoading(false)
    })

    getData(`/categories?populate=*&locale=${locale}`).then((data) =>
      setCategories(data?.data)
    )
  }, [locale])

  useEffect(() => {
    if (category) {
      const projectsArr = [...projects]
      const filteredProjects = projectsArr?.filter(
        (pro: any) =>
          pro?.attributes?.category?.data?.attributes?.name == category
      )
      setFilteredProjects(filteredProjects)
    }
  }, [category])

  {
    loading && <div>...Loading</div>
  }

  return (
    <div className="section-full bg-white content-inner-2" id="projects">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="head-title m-b10">{title || t("design-projects")}</h2>
          <p>19+ {t("years-experience")}</p>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="site-filters filter-style2 clearfix m-b20">
              <ul>
                {categories?.data?.slice(0, 4)?.map((item: any) => (
                  <li onClick={() => setCategory(item?.attributes?.name)}>
                    <button
                      className={`transition-colors duration-150 uppercase font-semibold tracking-widest 
                          ${
                            category === item?.attributes?.name
                              ? "text-gray-500"
                              : "text-black"
                          }`}
                      onClick={() => setCategory(item?.attributes?.name)}
                    >
                      <span>{item?.attributes?.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <ul
            id="masonry"
            className="dlab-gallery-listing gallery mfp-gallery text-center row p-l0 sp10"
          >
            {filteredprojects &&
              filteredprojects
                ?.slice(0, 6)
                .map((ele: any) => (
                  <GalleryImage key={ele?.id} id={ele.id} {...ele?.attributes} />
                ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Gallery
