import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    debugger
    return (
      <div>
      <h1>{this.props.name} </h1>
      <h2>Speed: {this.props.speed} </h2>
      <h3>Does it Have Rockets: {this.props.hasRockets ? "Yes" : "Nope"} </h3>
      <h4>Ship Color: {this.props.colors.join(", ")} </h4>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

ReactDOM.render(<Spaceship
  name="The Enterprise"
  speed={35}
  hasRockets={true}
  colors={["Grey", "Blue"]} />,
document.getElementById("main"))

module.exports = Spaceship;
