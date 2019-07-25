import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import profile from '../image/profile.jpeg'


class Landing extends Component {
    render() {
        return(
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
             <Cell col={12}>
             <div className="profile-header">
               <h1>Kota Watanabe</h1>
             </div>
             {/* <img src={profile}  alt="profile" className="profile-image" /> */}
               <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr/>

                <p>HTML/CSS | Ruby on Rails | JavaScript | React | React Native | NodeJS | Express | PostgreSQL</p>

                <div className="social-links">
                  <a href="https://www.linkedin.com/in/kota-watanabe/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin-square" 
                    aria-hidden="true" />
                  </a>
   

                  <a href="https://github.com/KotaWatanabe" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github-square" 
                    aria-hidden="true" />
                  </a>


                  <a href="https://www.youtube.com/watch?v=Jq5_KqdxmC4" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-youtube-square" 
                    aria-hidden="true" />
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
