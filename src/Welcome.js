import * as React from 'react'
import * as ReactDOM from 'react-dom'

/*
You will create a functional component that accepts three props **welcome**, **tutor** and **course**
* Export your component
* The goal is to print something like *Welcome to React from Ask Apps* on the screen
* Import the newly created component to App.js and try to render your component to the screen below your Name and Greeting components
* Convert Welcome to a class-based component and try to render to the screen
*/

// const Welcome = (props) => {
//    return (
//      <div>
//         <h1>{props.welcome}</h1>
//      </div>
//    )
// };

class Welcome extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    // console.log(this.props);
    const welcome = this.props.welcome;
    const tutor = this.props.tutor;
    const course = this.props.course;
    return (
       <div>
          <p>{welcome} to the {tutor} {course} party!</p>
       </div>
    )
  }
}

export default Welcome;