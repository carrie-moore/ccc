import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <Header headerText="CARRIE CARTER" />
      <h2>Developer | Designer</h2>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <h1>Featured Projects</h1>
      <div>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
    </div>
  </Layout>
)