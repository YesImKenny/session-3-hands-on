import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Name extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
    // console.log(this.props);
    const name = this.props.name;
    return (
       <div>
          <p>{name}</p>
       </div>
    )
  }
}

export default Name;