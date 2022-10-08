import './App.css';
import React from 'react';
import videoCover from "./videos/Cover.mp4";
import background3 from "./images/background3.png";
import mala1 from "./images/elements/mala1.png";
import mala2 from "./images/elements/mala2.png";
import mala3 from "./images/elements/mala3.png";
import hangingFlower1 from "./images/elements/hangingFlower1.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textDisplay: false};
    this.transitionContext = this.transitionContext.bind(this);
  }

  transitionContext() {
    this.setState({textDisplay: true});
  }
  render() {
    return (
        <div className="App">
          <div id="cover" className={this.state.textDisplay ? 'hide' : ''}>
            <video playsInline autoPlay muted
                   className={this.state.textDisplay ? 'hide coverVideo' : 'coverVideo'}
                   onEnded={this.transitionContext}
            >
              <source src={videoCover} type="video/mp4"/>
            </video>
          </div>
          {this.state.textDisplay &&
              <Invite/>
          }
        </div>
    )
  };
}

function Invite() {
  return(
      <div className="invite">
        <img src={background3} alt="" className="coloredBackground"/>
        <div className="animatedBackground">
          <div className="malaLayer">
            <img src={mala1} alt="" className="mala mala1"/>
            <img src={mala2} alt="" className="mala mala2"/>
            <img src={mala3} alt="" className="mala mala3"/>
          </div>
          <div className="hangingFlowerLayer">
            <img src={hangingFlower1} alt="" className="hangingFlower hF1"/>
          </div>
        </div>
      </div>
  )
}

export default App;
