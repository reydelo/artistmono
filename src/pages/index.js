import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NeckTat from '../images/neck-tat.jpg'
import FlorenciasLegs from '../images/florencias-legs.jpg'
import InasLipoma from '../images/inas-lipoma.jpg';
import LegsOfADancer from '../images/legs-of-a-dancer.jpg';
import Marcela from '../images/marcela.jpg';
import ToweringIntoHeights from '../images/towering-into-heights-lost-in-clouds.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={NeckTat} />
    <img src={InasLipoma} />
    <img src={LegsOfADancer} />
    <img src={FlorenciasLegs} />
    <img src={ToweringIntoHeights} />
    <img src={Marcela} />
  </Layout>
)

export default IndexPage
