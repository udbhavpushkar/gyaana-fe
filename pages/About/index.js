import React from "react"
import Layout from "./../../components/Layout/index"
import styles from "./about.module.css"
import Counters from "./../../components/Counters/index"

const About = () => {
  return (
    <Layout>
      <div className={styles.newsWrapper}>
        <div className={styles.newsHeading}>
          <p>About Us</p>
        </div>
        <div className="row">
          <div style={{ padding: "20px 10px" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Welcome to Gyaana International School</h3>
            <p style={{ textAlign: "center" }}>
              On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and
              everything that was left from its origin would be the word. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten,
              then they are still using her.
            </p>
          </div>
          <Counters />
        </div>
      </div>
    </Layout>
  )
}

export default About
