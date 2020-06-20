import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <h3>Request a booking:</h3>
    <ReactTypeformEmbed
      popup={false}
      style={{ position: "static", height: 500 }}
      hideHeaders={true}
      hideFooter={true}
      url="https://reynadeloge.typeform.com/to/X56wVpwU"
    />
  </Layout>
)

export default ContactPage
