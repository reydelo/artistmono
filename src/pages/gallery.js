import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IgnacioTrapezius from "../images/ignacio-trapezius.jpg"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <h1>Gallery</h1>
    <h3>Ignacio trapezius</h3>
    <img src={IgnacioTrapezius} alt="Ignacio's trapezius" />
    <p>
      “Ignacio trapezius” is an adaptation of one of my drawings. I like using a
      triangle as a symbol, signifying a variety of trinities it tears down our
      simplistic view of the world in dualistic terms. My use of gradient in
      this piece symbolises ever progressing change and development.
    </p>
  </Layout>
)

export default GalleryPage
