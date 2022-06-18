
import PortfolioCard from "@/components/Portfolio/PortfolioCard"
import data from "@/components/Portfolio/fakeData.json"
import { useState } from "react"


function Portfolio() {
  const [category, setCategory] = useState("")

  return (
    <div className="page-content">
      <div className="content-block">
        <div className="section-full bg-white content-inner-1">
          <div className="container">
            <div className="section-head text-center">
              <p className="pre-title">PORTA VITAE MAURIS VEL</p>
              <h2 className="head-title m-b10">Our Best Projects</h2>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="site-filters filter-style1 clearfix m-b20">
                  <ul className="filters" data-toggle="buttons">
                    <li data-filter="" className="btn active">
                      <input type="radio" />
                      <a href="javascript:void(0)" onClick={() => setCategory("")}>
                        <span>All</span>
                      </a>
                    </li>
                    <li data-filter="abstract" className="btn">
                      <input type="radio" />
                      <a href="javascript:void(0)" onClick={() => setCategory("abstract")}>
                        <span>Abstract</span>
                      </a>
                    </li>
                    <li data-filter="food" className="btn">
                      <input type="radio" />
                      <a href="javascript:void(0)" onClick={() => setCategory("food")}>
                        <span>Food</span>
                      </a>
                    </li>
                    <li data-filter="mockup" className="btn">
                      <input type="radio" />
                      <a href="javascript:void(0)" onClick={() => setCategory("mockup")}>
                        <span>Mockup</span>
                      </a>
                    </li>
                    <li data-filter="technology" className="btn">
                      <input type="radio" />
                      <a href="javascript:void(0)" onClick={() => setCategory("technology")}>
                        <span>Technology</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix">
            <ul
              id="masonry"
              className="dlab-gallery-listing gallery mfp-gallery text-center portfolio-bx  container grid grid-cols-2 md:grid-cols-4"
            >
              {data.filter(ele => ele.category.match(category)).map((ele, index) => (
                <PortfolioCard key={index} {...ele} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
