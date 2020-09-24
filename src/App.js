import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greetings from './Greeting';
import Name from './Name';
import Welcome from './Welcome';

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    return (
      <Greeting message="Good Afternoon"/>
      <Name name="Kenneth"/>
      <Welcome welcome="Welcome" tutor="AskApps" course="React"/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
