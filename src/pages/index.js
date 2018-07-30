import React from "react"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `tomato` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="Random from Unsplash" />
        <br />
        <div>
            <Link to="/page-2/">Link 2</Link>
        </div>
        <div>
            <Link to="/page-3">Link 3</Link>
        </div>
        <div>
            <Link to="/counter/">Counter</Link>
        </div>
    </div>
)