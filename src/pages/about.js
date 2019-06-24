import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection";
import Infoblock from "../components/Reuseable/Infoblock";
import DualInfoblock from "../components/Reuseable/DualInfoblock";
import Teamphotosection from "../components/About/Teamphotosection";


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline" 
      subtitle=""
      heroClass="about-background" 
      />
      <DualInfoblock heading="A Message from CEO"/>
      <Infoblock heading="About Our Vision"/>
      <Teamphotosection/>
  </Layout>
)


export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage;
