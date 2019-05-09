import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Learn to design and code React apps</h1>
    <p>Cillum duis nisi do Lorem cillum magna proident nostrud cillum.</p>
    
    
    <Link to="/page-2/">Go to page two</Link>
  </Layout>
)

export default IndexPage
