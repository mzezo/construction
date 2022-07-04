import BlogDetails from "@/components/BlogDetails/BlogDetail"
import BlogLayoutContainer from "@/components/BlogDetails/BlogLayoutContainer"
import NoSidenav from "@/components/Navbar/NoSidenav"
// import CommentSection from "@/components/BlogDetails/CommentSection"
// import RelatedPosts from "@/components/BlogDetails/RelatedPosts"
import { getData } from "@/services/getData"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

function BlogDetailsPage() {

  const {
		query: { id },
	} = useRouter();

  const { t } = useTranslation("common")

  const [blogData, setBlogData] = useState<any>({});

  useEffect(() => {
    getData(`/blogs/${id}?populate=*`).then((data) => {
      setBlogData(data?.data?.data);
    });

  }, [])

  return (
    <Fragment>
      <NoSidenav title={t("blogs")} />
      <BlogLayoutContainer>
        <BlogDetails blog={blogData?.attributes}/>
        {/* <RelatedPosts /> */}
        {/* <CommentSection /> */}
      </BlogLayoutContainer>
    </Fragment>
  )
}

export default BlogDetailsPage

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale!, [
// 				"common"
// 			])),
// 		},
// 	};
// };
