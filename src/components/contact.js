import React, { Component } from 'react';
import { Grid, Cell, List,ListItem,ListItemContent } from 'react-mdl';
import profile from '../image/profile2.JPG'

class Contact extends Component {
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
              <h2>Kota Watanabe</h2>
              <img 
                src={profile} 
                alt="avatar"
                style={{height: '250px'}}/>
              <p style ={{ width: '75%', margin: 'auto', padddingTop: '1em'}}>Hi, I am Kota. I am currently working as a QA Developer/Front-End Developer at a SaaS company in Vancouver. <br/>  I love writing clean code and learning new technologies.　<br/>When I am not coding, usually I am playing football or ruuning around the Stanley Park. </p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>

                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      kota3316@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                      <i className="fa fa-linkedin" aria-hidden="true"/>
                      <a href="https://www.linkedin.com/in/kota-watanabe/"> Kota Watanabe</a>
                     
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      kota3316
                      </ListItemContent>
                    </ListItem>
      
                  </List>
                </div>

              </Cell>
            </Grid>
          </div>
          )
    }
}

export default Contact;
