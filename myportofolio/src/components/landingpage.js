import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../images/ayham-home.jpeg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={img}
              alt="me"
              className="ayham1-img"
            />
            <div className="banner-text">
              <h1>Web Developer</h1>
            <hr/>
              <p>HTML/CSS | Sass | Bootstrap | JavaScript | React | NodeJS </p>
            <div className="social-links">
            {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ayham-alaa-eddin-00b7a91a2/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />aa
              </a>

            {/* Github */}
              <a href="https://github.com/ayham-da" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />aa
              </a>

            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
