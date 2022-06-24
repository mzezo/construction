import BlogDetails from "@/components/BlogDetails/BlogDetail"
import BlogLayoutContainer from "@/components/BlogDetails/BlogLayoutContainer"
// import CommentSection from "@/components/BlogDetails/CommentSection"
// import RelatedPosts from "@/components/BlogDetails/RelatedPosts"
import { getData } from "@/services/getData"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function BlogDetailsPage() {

  const {
		query: { id },
	} = useRouter();

  const [blogData, setBlogData] = useState<any>({});

  useEffect(() => {
    getData(`/blogs/${id}?populate=*`).then((data) => {
      setBlogData(data?.data?.data);
    });

  }, [])

  return (
    <BlogLayoutContainer>
      <BlogDetails blog={blogData?.attributes}/>
      {/* <RelatedPosts /> */}
      {/* <CommentSection /> */}
    </BlogLayoutContainer>
  )
}

export default BlogDetailsPage
