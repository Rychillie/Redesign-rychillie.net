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
    <E.Row className={"bigMarginBottom column"}>
      <E.Left>
        <Avatar />
      </E.Left>
      <E.Right>
        <T.Title className={"margin"}>Rychillie Umpierre de Oliveira</T.Title>
        <T.Text>
          I am a young student interested in technology, games and codes. I have
          always sought to improve my knowledge and seek the most current,
          regardless of whether it is known or not, I have always tried to be in
          the midst of something new and different.
        </T.Text>
        <T.Text>
          My greatest desire is to be part of things, to be involved, to be able
          to leave my name in history is my goal, to be known!
        </T.Text>
      </E.Right>
    </E.Row>
    <E.Section>
      <E.Row className={"marginBottom"}>
        <T.Title>— Contact</T.Title>
      </E.Row>
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
