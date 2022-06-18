import BlogDetails from "@/components/BlogDetails/BlogDetail"
import BlogLayoutContainer from "@/components/BlogDetails/BlogLayoutContainer"
import CommentSection from "@/components/BlogDetails/CommentSection"
import RelatedPosts from "@/components/BlogDetails/RelatedPosts"

function BlogDetailsPage() {
  return (
    <BlogLayoutContainer>
      <BlogDetails />
      <RelatedPosts />
      <CommentSection />
    </BlogLayoutContainer>
  )
}

export default BlogDetailsPage
