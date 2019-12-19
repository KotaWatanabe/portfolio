import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import coffee from '../image/coffee_and_speak.png'
import quiz from '../image/quiz-off.png'
import portfolio from '../image/portfolio.png'
import footballfetch from '../image/footballfetch.png'

class Projects extends Component {

      state = { 
        activeTab: 0 
      };

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'fff', height: '176px', background: `url(${coffee}) center / cover `}}></CardTitle>
                   <CardText>
                      Coffee and Speak is matching web service for language teachers and students. <br/> Main programing languages are Ruby on Rails, JavaScript, HTML/CSS,PostgreSQL. <hr/>
                      3 cool features. <br/>
                      1. Updating lesson status with the State machine <br/>
                      2. Shwoing a location using the Google Map API <br/>
                      3. Pay to the teacher using the Stripe API.

                  </CardText>
                  
                  <CardActions border>
                    <a href="https://github.com/KotaWatanabe/coffee-and-speak-rails"   target="_blank" rel="noopener noreferrer">
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://coffee-and-speak-rails.herokuapp.com/"   target="_blank" rel="noopener noreferrer">
                      <Button colored>LiveDemo</Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Jq5_KqdxmC4"   target="_blank" rel="noopener noreferrer">
                      <Button colored>Video</Button>
                    </a>
                    </CardActions> 
                    
                    <CardMenu style={{color: 'fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'fff', height: '176px', background: `url(${quiz}) center / cover `}}></CardTitle>
                   <CardText>
                   Quiz Off is an interactive quiz making and taking platform.
                   Main programing languages are Ruby on Rails, JavaScript, HTML/CSS,PostgreSQL
                  </CardText>
                  
                  <CardActions border>
                  <a href="https://github.com/KotaWatanabe/quiz-off" target="_blank" rel="noopener noreferrer">
                    <Button colored>GitHub</Button>
                  </a>
                  </CardActions> 
                  
                  <CardMenu style={{color: 'fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return (
              <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'fff', height: '176px', background: `url(${footballfetch}) center / cover `}}></CardTitle>
                <CardText>
                  Football-fetch is app for football enthusiast(like me) to check the updated standings of major European Football leagues. <br/>
                  This app is made with React and using football-data.org API.
                </CardText>
                <CardActions border>
                <a href="https://github.com/KotaWatanabe/fetch-foot" target="_blank" rel="noopener noreferrer">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://football-fetch.netlify.com"   target="_blank" rel="noopener noreferrer">
                      <Button colored>LiveDemo</Button>
                    </a>
                </CardActions> 
                
                <CardMenu style={{color: 'fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'fff', height: '176px', background: `url(${portfolio}) center / cover `}}></CardTitle>
                <CardText>
                  This portfolio is made with React. <br/>
                  I designed this website with React-MDL. <br/>
                </CardText>
                <CardActions border>
                <a href="https://github.com/KotaWatanabe/portfolio" target="_blank" rel="noopener noreferrer">
                  <Button colored>GitHub</Button>
                </a>
                </CardActions> 
                
                <CardMenu style={{color: 'fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div> 
            )
        }
    }
    
    
    render() {
        return(
          <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId }) } ripple>
                <Tab>Ruby on Rails</Tab>
                <Tab>JS(React)</Tab>
            </Tabs>

              <Grid>
                <Cell col={12}>
                  <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>
          </div>
          )
    }
}

export default Projects;
