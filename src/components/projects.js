import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import coffee from '../image/coffee_and_speak.png'
import quiz from '../image/quiz-off.png'
import portfolio from '../image/portfolio.png'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'fff', height: '176px', background: `url(${coffee}) center / cover `}}></CardTitle>
                   <CardText>
                      Coffee and Speak is matching web service for language teachers and students. Main programing languages are Ruby on Rails, JavaScript, HTML/CSS,PostgreSQL
                  </CardText>
                  
                  <CardActions border>
                    <a href="https://github.com/KotaWatanabe/coffee-and-speak-rails"   target="_blank" rel="noopener noreferrer">
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://coffee-and-speak-rails.herokuapp.com/"   target="_blank" rel="noopener noreferrer">
                      <Button colored>LiveDemo</Button>
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
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'fff', height: '176px', background: `url(${portfolio}) center / cover `}}></CardTitle>
                <CardText>
                  This portfolio is made with React.
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
            )
        }
    }

    
    render() {
        return(
          <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId }) } ripple>
                <Tab>Ruby on Rails</Tab>
                <Tab>React</Tab>
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
