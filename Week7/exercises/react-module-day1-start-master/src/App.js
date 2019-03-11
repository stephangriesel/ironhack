// App.js
import React, { Component } from "react";
// import the npm package's component
import ReactPlayer from "react-player";
import "./App.css";

class App extends Component {

render() {
  return (
    <div className="App">
      <User firstName="Harper"/>
      <User firstName="Ana"/>

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

      // see the new props!
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing
        controls
        volume="0.5"
      />
    </div>
  );
}
}

export default App;
