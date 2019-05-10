import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Learn to design and code React apps</h1>
      <p>Cillum duis nisi do Lorem cillum magna proident nostrud cillum.</p>
      <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
