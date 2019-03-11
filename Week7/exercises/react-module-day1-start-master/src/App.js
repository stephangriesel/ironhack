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

// ...

// import React, { Component } from "react";
// import "./App.css";
// import "../components/User"

// class App extends Component {

//   render() {

//     return (
//       <div className="App">
//         <User firstName="Harper"/>
//       </div>
//     );

    // const formatName = (user) => {
    //   return `${user.firstName} ${user.lastName}`;
    // }
   
    // const user = {
    //   firstName: 'Harper',
    //   lastName: 'Perez',
    //   // avatarUrl:'http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png'
    // };

    // const displayAvartar = (user) => {
    //   if(user.avatarUrl){
    //     return <img src={user.avatarUrl} />
    //   } else {
    //     return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
    //   }
    // }
    
    // const element = (
    //   <h2>
    //     Hello, {formatName(user)}!
    //   </h2>
    // );
 
    // return (
    //   <div className="App">
    //     <h1> Hello Ironhackers! </h1>
    //     {element}
    //     {displayAvartar(user)}
    //   </div>
    // );
//   }
// }
}

export default App;
