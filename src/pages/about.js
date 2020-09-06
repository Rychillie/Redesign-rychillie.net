import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Avatar from "../components/Avatar"
import Form from "../components/Form"
import Social from "../components/Social"

import * as T from "../components/styles/typography"
import * as E from "../components/styles/elements"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <E.Section>
      <Avatar />
    </E.Section>
    <E.Section>
      <T.Title>— Contact</T.Title>
      <E.Contact>
        <E.Left>
          <T.Text>
            Talk to me through my social networks or the contact form, no need
            to worry because I will get back to you as soon as possible.
          </T.Text>
          <Social />
        </E.Left>
        <E.Right>
          <Form />
        </E.Right>
      </E.Contact>
    </E.Section>
  </Layout>
)

export default AboutPage
