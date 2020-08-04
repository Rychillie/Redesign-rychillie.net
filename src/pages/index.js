import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navbar from "../components/Navbar"
import Apresentation from "../components/Apresentation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Apresentation />
  </Layout>
)

export default IndexPage
