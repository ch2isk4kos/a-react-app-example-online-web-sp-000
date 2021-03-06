import React, { Component } from 'react'; // importing from node_modules
import moment from 'moment';              // importing from node_modules
import ExampleComponent from './ExampleComponent'  // importing from directory/file
import TestComponent from './TestComponent'        // importing from directory/file

// Add your code own within the return statement

class App extends Component {
    render() {

        return (
        <div className="App">
            <header className="App-header">
                {moment().format('MMMM Do YYYY, hh:mm:ss a')}
            </header>
            <p className="App-intro">
                In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
                JSX lets us include JavaScript functions right along with the HTML, and also
                allows us to add in components, which are separate, self-contained chunks of JSX.
            </p>

            <ExampleComponent />
            <TestComponent />
        </div>
    );
  }
}

export default App;
