import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greetings from './Greeting';
import Name from './Name';

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    return (
      <Greeting message="Good Afternoon"/>
      <Name name="Kenneth"/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
