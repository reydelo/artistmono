import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NeckTat from "../images/neck-tat.jpg"
import FlorenciasLegs from "../images/florencias-legs.jpg"
import InasLipoma from "../images/inas-lipoma.jpg"
import LegsOfADancer from "../images/legs-of-a-dancer.jpg"
import Marcela from "../images/marcela.jpg"
import ToweringIntoHeights from "../images/towering-into-heights-lost-in-clouds.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The spectacle before us was indeed sublime.</h1>
    <p>
      Apparently we had reached a great height in the atmosphere, for the sky
      was a dead black, and the stars had ceased to twinkle. By the same
      illusion which lifts the horizon of the sea to the level of the spectator
      on a hillside, the sable cloud beneath was dished out, and the car seemed
      to float in the middle of an immense dark sphere, whose upper half was
      strewn with silver. Looking down into the dark gulf below, I could see a
      ruddy light streaming through a rift in the clouds
    </p>
    <img src={NeckTat} alt="Neck Tattoo" />
    <img src={InasLipoma} alt="Ina's Lipoma" />
    <img src={LegsOfADancer} alt="Legs of a dancer" />
    <img src={FlorenciasLegs} alt="Florencia's Legs" />
    <img src={ToweringIntoHeights} alt="Towering into heights" />
    <img src={Marcela} alt="Marcela" />
  </Layout>
)

export default IndexPage
