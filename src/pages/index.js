import React from "react"
import Layout from "../components/layout"
import { Button } from "../components/button"

export default () => (
  <Layout>
    <div style={{ color: "red" }}>
      <h1>This is our Home Page</h1>
      Hello world!
      <h2>The second heading</h2>
      <div className="container">
        <div className="row">
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
        </div>
        <Button>Styled Button</Button>
      </div>
    </div>
  </Layout>
)
