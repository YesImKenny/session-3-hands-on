import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Comment out the below line and click Run to get started with this exercise

var reactElementWithoutJSX = React.createElement('div', { id: 'main' }, [
    React.createElement('h1', { id: 'heading' }, 'Hello World')
  ]);
var reactElementWithJSX =

<div className="main"> <h1 className="heading">Hello World from JSX</h1> </div>

// Now that you have seen how to create an Element, try creating your own element and change the value in line 14 to our new variable

ReactDOM.render(
  reactElementWithJSX,
  document.getElementById('root')
);
