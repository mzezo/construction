import BlogEntry from "./BlogEntry"
import fakeData from "./fakeData.json"

function BlogEnteries() {
  return (
    <div className="section-full bg-white content-inner-1">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="head-title m-b10">Blog Enteries</h2>
          <p>19+ years’ experience</p>
        </div>

        <div className="blog-carousel grid grid-cols-2 gap-5 md:gap-8 md:grid-cols-3">
          {fakeData.map((ele, index) => (
            <BlogEntry key={index} {...ele} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogEnteries
