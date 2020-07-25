import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img from '../images/ayham-home.jpeg'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={img}
                alt="me"
                style={{height: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mhd.Ayham, Alaa Eddin</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Geburtsdatum</h5>
            <p>03.07.1995</p>
            <h5>Familienstand</h5>
            <p>Lidig</p>
            <h5>Staatsangehörigkeit</h5>
            <p>Syrisch</p>
            <h5>Phone</h5>
            <p>01727512025</p>
            <h5>Email</h5>
            <p>ayham.alaaeddin@gmail.com</p>
            <h5>Web</h5>
            <p><a href="https://github.com/ayham-da" rel="noopener noreferrer" target="_blank">
            github.com/ayham-da
            </a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education
                startYear={2000}
                endYear={2013}
                schoolName="Grundschule und Gymnasium"
                schoolDescription="Abscluss: Abitur"
              />
              <Education
                startYear={2013}
                endYear={2014}
                schoolName="Damaskus University"
                schoolDescription="Ökönomie (ohne Abscluss)"
              />
              <Education
                startYear={2016}
                endYear={2017}
                schoolName="IIK Düsseldorf"
                schoolDescription="Sprach Kurs Abschluss: B1"
              /> 
              <Education
                startYear={2017}
                endYear={2018}
                schoolName="McDonald's Düsseldorf"
                schoolDescription="Shift Leadership Transitions Course (Weiterbildung) Abschluss : erfolgreic abgeschlossen"
              />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2015}
              jobName="Verkäufer"
              jobDescription="verkäufer, Kundenberatung"
              />

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Schictleiter (McDonald's Düsseldorf)"
              jobDescription="* Sichtführung , * Personalplanung , * Kasse/verkauf ,* Kundenberatung"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={75}
            />
            <Skills
              skill="HTML/CSS"
              progress={85}
            />
            <Skills
              skill="NodeJS"
              progress={30}
            />
            <Skills
              skill="React"
              progress={25}
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Fremdsprachen</h2>
            <Skills
              skill="Arabisch"
              progress={100}
            />
            <Skills
              skill="Englisch"
              progress={65}
            />
            <Skills
              skill="Deutsch"
              progress={70}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
