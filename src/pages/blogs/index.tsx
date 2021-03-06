import BlogItem from "@/components/BlogItem/BlogItem"
import { getData } from "@/services/getData"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function BlogGrid() {
  const [blogs, setBlogs] = useState<any>([])

  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    getData(`/blogs?populate=*&locale=${locale}`).then((data) => {
      setBlogs(data?.data?.data)
    })
  }, [])

  return (
    <div className="content-block">
      <div className="section-full content-inner">
        <div className="container">
          <div className="dlab-blog-grid-3 row" id="masonry">
            {blogs.map((ele: any) => (
              <BlogItem key={ele?.id} {...ele?.attributes} id={ele?.id} />
            ))}
          </div>

          {/* <div className="pagination-bx radius clearfix text-center">
            <ul className="pagination">
              <li className="active">
                <a href="javascript:void(0);">1</a>
              </li>
              <li>
                <a href="javascript:void(0)">2</a>
              </li>
              <li>
                <a href="javascript:void(0)">3</a>
              </li>
              <li>
                <a href="javascript:void(0)">18</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BlogGrid

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common"
			])),
		},
	};
};
