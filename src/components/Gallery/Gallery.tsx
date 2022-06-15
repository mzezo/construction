import { useState } from "react"
import GalleryImage from "./GalleryImage"
import fakeData from './fakeData.json'

function Gallery() {
  const [category, setCategory] = useState(fakeData[0]?.category)

  return (
    <div className="section-full bg-white content-inner-2" id="projects">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="head-title m-b10">Design Projects</h2>
          <p>19+ years’ experience</p>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="site-filters filter-style2 clearfix m-b20">
              <ul>
                
                <li onClick={() => setCategory("exclusive suites")}>
                  <button className={`transition-colors duration-150 uppercase font-semibold tracking-widest ${category === "exclusive suites" ? "text-gray-500": "text-black"}`} onClick={() => setCategory("exclusive suites")}>
                    <span>exclusive suites</span>
                  </button>
                </li>
                
                <li onClick={() => setCategory("penthouse")}>
                  <button className={`transition-colors duration-150 uppercase font-semibold tracking-widest ${category === "penthouse" ? "text-gray-500": "text-black"}`} onClick={() => setCategory("penthouse")}>
                    <span>penthouse</span>
                  </button>
                </li>
                
                <li onClick={() => setCategory("royal apartments")}>
                  <button className={`transition-colors duration-150 uppercase font-semibold tracking-widest ${category === "royal apartments" ? "text-gray-500": "text-black"}`} onClick={() => setCategory("royal apartments")}>
                    <span>royal apartments</span>
                  </button>
                </li>
                
                <li onClick={() => setCategory("standard rooms")}>
                  <button className={`transition-colors duration-150 uppercase font-semibold tracking-widest ${category === "standard rooms" ? "text-gray-500": "text-black"}`} onClick={() => setCategory("standard rooms")}>
                    <span>standard rooms</span>
                  </button>
                </li>
              

              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <ul
            id="masonry"
            className="dlab-gallery-listing gallery mfp-gallery text-center row p-l0 sp10"
          >
            {fakeData.filter(ele => ele.category === category).map((ele, index) => (
              <GalleryImage key={index} title={ele.title} subtitle={ele.subtitle} href={ele.href} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gallery
