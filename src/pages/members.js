import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Post from "../components/Posts/Member"

import * as T from "../components/styles/typography"
import * as E from "../components/styles/elements"

const MembersPage = () => (
  <Layout>
    <SEO title="Members" />
    <E.Section>
      <T.Title>— Latest</T.Title>
      <E.ListPosts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </E.ListPosts>
    </E.Section>
  </Layout>
)

export default MembersPage
