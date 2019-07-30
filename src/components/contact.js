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
              <p style ={{ width: '75%', margin: 'auto', padddingTop: '1em'}}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec hendrerit nec arcu quis auctor. Nulla imperdiet lacinia quam, ut tempor leo laoreet quis. Nam sit amet velit erat. Aliquam faucibus arcu vel bibendum efficitur. In hac habitasse platea dictumst. Sed id nunc sit amet neque hendrerit hendrerit.</p>
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
