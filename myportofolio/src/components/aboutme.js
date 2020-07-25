import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../images/ayham-aboutme.jpeg'
class About extends Component {
  render() {
    return(
      <div style={{width: '100%',height:'150%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={4}>
          <img
            src={img}
            alt="me"
            className="ayham-img"
            />
            </Cell>
            <Cell col={8}>
          <div style={{width: '100%',height:'150%', margin: 'auto' , paddingTop:'2%'}} className="banner-text">
            <h1>About Me</h1>
          <hr/>
          <p>nach meinen beruflichen Erfahrungen habe ich den Entschluss gefasst mich im Bereich der lnformatik orientieren. lch freue mich, wenn Sie mir die Moglichkeit geben, mich in lhrem Unternehmen beruflich zu entwickeln. Im Anschluss an das Praktikum mochte ich eine Ausbildung zum Fachinformatiker antreten oder dirikt arbeiten, die ich gerne in lhrem Unternehmen absolviere. Wahrend meiner bisherigen Tatigkeiten ist mir aufgefallen, dass ich mich beruflich nicht mit dem mir Gebotenen zufriedengeben mochte, sondern mich neuen Herausforderungen stellen will, die ich mit Zielstrebigkeit und FleiB meistern kann. Personlich bin ich ein sehr aufgeschlossener und engagierter Mensch, der gerne und schnell Neues dazu lernt. lch habe gerne Kontakt mit Menschen und scheue mich nicht mit Ihnen zu kommunizieren, weshalb das Arbeiten im Team kein Problem darstellt. AuBerdem gehoren ein hohes MaB an Engagement, Kollegialitat sowie Belastbarkeit und Flexibilitat zu meinen Starken. lch freue mich auf lhre Ruckmeldung und auch darauf Sie in einem persbnlichen Gesprach von meinen Kompetenzen zu uberzeugen</p>

      <div className="social-links">

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ayham-alaa-eddin-00b7a91a2/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>

        {/* Github */}
        <a href="https://github.com/ayham-da" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
      </div>
          </div>
        </Cell>
      </Grid>
    </div>
      
    )
  }
}

export default About;
