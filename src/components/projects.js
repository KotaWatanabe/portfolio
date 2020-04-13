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
              <div className="grid-wrapper">
                <div className="box">
                  <img src={coffee} alt="coffee and speak"/>
                  <p> Coffee and Speak is matching web service for language teachers and students. <br/> 
                  Main programing languages are <strong>Ruby on Rails, JavaScript, HTML/CSS, PostgreSQL</strong>.<br/>
                  3 cool features. <br/>
                  1. Updating lesson status with the <strong>State machine</strong><br/>
                  2. Shwoing a location using the <strong>Google Map API </strong><br/>
                  3. Pay to the teacher using the <strong>Stripe API</strong>.
                  </p>
                  <hr/>
                  <div className="link-buttons">
                    <a href="https://github.com/KotaWatanabe/coffee-and-speak-rails"   target="_blank" rel="noopener noreferrer">
                      <button>GitHub</button>
                    </a>
                    <a href="https://coffee-and-speak-rails.herokuapp.com/"   target="_blank" rel="noopener noreferrer">
                      <button>LiveDemo</button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Jq5_KqdxmC4"   target="_blank" rel="noopener noreferrer">
                      <button>Video</button>
                    </a>
                  </div>
                </div>
                <div className="box">
                  <img src={quiz} alt="quiz" className="quiz-image"/>
                  <p>Quiz Off is an interactive quiz making and taking platform. <br/>
                  Main programing languages are <strong>Ruby on Rails, JavaScript, HTML/CSS, PostgreSQL</strong></p>
                  <hr/>
                  <div className="link-buttons">
                    <a href="https://github.com/KotaWatanabe/quiz-off"   target="_blank" rel="noopener noreferrer">
                      <button>GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
            )
        } else if(this.state.activeTab === 1){
            return (
              <div className="grid-wrapper">
              <div className="box">
                <img src={celebrityRecognition} alt="celebrity recognition"/>
                <p>
                  Celebrity-recognition is an app to find the name of celebrity from the picture. <br/>
                  To recognize the celebrity name from picture, I used Clarifai api. <br/>
                  This app is made with <strong>React</strong> for front-end, <strong>Node.js(express, knex)</strong> for back-end and <strong>PostgreSQL</strong> for database. <br/>
                  It's live on Heroku.
                </p>
                <hr/>
                <div className="link-buttons">
                  <a href="https://github.com/KotaWatanabe/Celebrity-Recognition"   target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                  </a>
                  <a href="https://celebrity-recognition.herokuapp.com/"   target="_blank" rel="noopener noreferrer">
                    <button>LiveDemo</button>
                  </a>
                </div>
              </div>
              <div className="box">
                <img src={footballfetch} alt="footballfetch"/>
                <p>
                  Football-fetch is app for the football enthusiast(like me) to check the updated standings of major European Football leagues. <br/>
                  This app is made with <strong>React</strong> and using <strong>football-data.org API</strong>.
                </p>
                <hr/>
                <div className="link-buttons">
                  <a href="https://github.com/KotaWatanabe/fetch-foot"   target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                  </a>
                  <a href="https://football-fetch.netlify.com"   target="_blank" rel="noopener noreferrer">
                    <button>LiveDemo</button>
                  </a>
                </div>
              </div>
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
                  <div className="content">{this.toggleCategories()}</div>
          </div>
          )
    }
}

export default Projects;
