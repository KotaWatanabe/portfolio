import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../image/profile.jpeg'

class Resume extends Component {
    render() {
        return(
          <div>
              <Grid>
                <Cell col={4}>
                  <div style={{textAlign: 'center'}}>
                    <img 
                      src={profile}
                      alt="profile" 
                      style={{height: '200px', borderRadius:'50%'}}/>
                  </div>

                  <h2 style={{padddingTop: '2em'}}>Kota Watanabe</h2>
                  <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
                  <hr style={{borderTop: '3px solid #833fb2',width: '50%' }}/>
                  <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec hendrerit nec arcu quis auctor. Nulla imperdiet lacinia quam, ut tempor leo laoreet quis. Nam sit amet velit erat. Aliquam faucibus arcu vel bibendum efficitur. In hac habitasse platea dictumst. Sed id nunc sit amet neque hendrerit hendrerit.</p>
                  <hr style={{borderTop: '3px solid #833fb2',width: '50%' }}/>
                  <h5>Email</h5>
                  <p>kota3316@gmail.com</p>
                  <hr style={{borderTop: '3px solid #833fb2',width: '50%' }}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>Right Side</Cell>
              </Grid>
          </div>
        )
    }
}

export default Resume;
