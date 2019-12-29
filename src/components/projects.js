import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import coffee from '../image/coffee_and_speak.png'
import quiz from '../image/quiz-off.png'
import celebrityRecognition from '../image/celebrity-recognition.png'
import footballfetch from '../image/football-fetch.png'

class Projects extends Component {

      state = { 
        activeTab: 0 
      };

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card className="projects-card" shadow={5} style={{minWidth: '450', margin: 'auto'}}>
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
                    

                  </Card>
                
                <Card className="projects-card" shadow={5} style={{minWidth: '450', margin: 'auto'}}>
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
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return (
              <div className="projects-grid">
                <Card className="projects-card" shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'fff', height: '176px', background: `url(${celebrityRecognition}) center / cover `}}></CardTitle>
                    <CardText>
                      Celebrity-recognition is an app to find the possible name of celebrity from the picture. <br/>
                      To recognize the celebrity name from picture, I used Clarifai api.
                      This app is made with <strong>React</strong> for front-end, <strong>Node.js(express, knex)</strong> for back-end and <strong>PostgreSQL</strong> for database.
                      It's live on Heroku.
                    </CardText>
                    <CardActions border>
                      <a href="https://github.com/KotaWatanabe/Celebrity-Recognition" target="_blank" rel="noopener noreferrer">
                        <Button colored>GitHub</Button>
                      </a>
                      <a href="https://celebrity-recognition.herokuapp.com/"   target="_blank" rel="noopener noreferrer">
                        <Button colored>LiveDemo</Button>
                      </a>
                    </CardActions> 
                </Card>
                <Card className="projects-card" shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'fff', height: '176px', background: `url(${footballfetch}) center / cover `}}></CardTitle>
                  <CardText>
                    Football-fetch is app for the football enthusiast(like me) to check the updated standings of major European Football leagues. <br/>
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
