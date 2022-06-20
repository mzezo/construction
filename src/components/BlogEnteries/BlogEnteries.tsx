import { getData } from "@/services/getData";
import { useState, useEffect } from "react";
import BlogEntry from "./BlogEntry"
import fakeData from "./fakeData.json"

function BlogEnteries() {

  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    getData('/blogs?populate=*').then((data) => { 
      setBlogs(data?.data?.data)
    })
  }, [])
  return (
    <div className="section-full bg-white content-inner-1">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="head-title m-b10">Blog Enteries</h2>
          <p>19+ years’ experience</p>
        </div>

        <div className="blog-carousel grid grid-cols-2 gap-5 md:gap-8 md:grid-cols-3">
          {blogs?.slice(0, 6).map((ele:any) => (
            <BlogEntry key={ele?.id} {...ele?.attributes} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogEnteries
