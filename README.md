import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Comment out the below lines to create your functional component

// const FunctionalComponent = () => {
//    return (
//    <div className="main">
//       <h1 className="heading">Hello World from FunctionalComponent</h1>
//    </div>
//    )
// };

//Name 
//City

// const NewFunctionalComponent = () => {
//   return (
//     <div className="main">
//       <h1 className="name">Kenneth</h1>
//       <h1 className="city">Oakland</h1>
//     </div>
//   )
// }
// Comment out the below lines to create your class-based component

class ClassComponent extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    return (
      <div>
          <div className="main">
            <h1 className="heading">Hello World from ClassComponent</h1>
          </div>
      </div>
    )
  }
}

class PersonalComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="main">
          <h1 className="name">Kenneth</h1>
          <h1 className="location">Oakland</h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <PersonalComponent />,
  document.getElementById('root')
);

