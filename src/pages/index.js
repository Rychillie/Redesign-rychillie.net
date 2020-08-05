import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Navbar from "../components/Navbar"
import Apresentation from "../components/Apresentation"
import Post from "../components/Post"

import * as T from "../components/styles/typography"
import * as E from "../components/styles/elements"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Apresentation />
    <E.Main>
      <T.Title>—  Latest</T.Title>
      <E.ListPosts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </E.ListPosts>
    </E.Main>
    <E.Main>
      <T.Title>—  Portfolio</T.Title>
      <E.ListPosts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </E.ListPosts>
    </E.Main>
  </Layout>
)

export default IndexPage
