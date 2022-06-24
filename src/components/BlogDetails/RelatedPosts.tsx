// import BlogEntry from "../BlogEnteries/BlogEntry"
// import data from "../BlogItem/fakeData.json"

function RelatedPosts() {
  return (
    <div className="related-post-bx">
      <div className="m-b30">
        <h3 className="m-b10">Related Post</h3>
        <div className="dlab-separator bg-black"></div>
      </div>
      {/* <div className="related-post grid grid-cols-2 gap-5">
        {data.slice(0, 2).map((ele, index) => (
          <BlogEntry key={index} {...ele} />
        ))}
      </div> */}
    </div>
  )
}

export default RelatedPosts
