import { getData } from "@/services/getData";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BlogEntry from "./BlogEntry"

function BlogEnteries() {

  const [blogs, setBlogs] = useState<any>([]);

  const { t } = useTranslation("common")

  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    getData(`/blogs?populate=*&locale=${locale}`).then((data) => { 
      setBlogs(data?.data?.data)
    })
  }, [])

  return (
    <div className="section-full bg-white content-inner-1">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="head-title m-b10">Blog Enteries</h2>
          <p>19+ {t("years-experience")}</p>
        </div>

        <div className="blog-carousel grid grid-cols-2 gap-5 md:gap-8 md:grid-cols-3">
          {blogs?.slice(0, 6).map((ele:any) => (
            <BlogEntry key={ele?.id} {...ele?.attributes} id={ele?.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogEnteries
