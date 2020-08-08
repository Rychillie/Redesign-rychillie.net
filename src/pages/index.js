import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Apresentation from "../components/Apresentation"
import Post from "../components/Post"
import Form from "../components/Form"
import Social from "../components/Social"

import * as T from "../components/styles/typography"
import * as E from "../components/styles/elements"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Apresentation />
    <E.Section>
      <T.Title>—  Latest</T.Title>
      <E.ListPosts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </E.ListPosts>
    </E.Section>
    <E.Section>
      <T.Title>—  Contact</T.Title>
      <E.Contact>
        <E.Left>
          <T.Text>Talk to me through my social networks or the contact form, no need to worry because I will get back to you as soon as possible.</T.Text>
        <Social />
        </E.Left>
        <E.Right>
          <Form />
        </E.Right>
      </E.Contact>
    </E.Section>
  </Layout>
)

export default IndexPage
