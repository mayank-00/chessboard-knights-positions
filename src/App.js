import React from "react";

import ChessBoard from "./components/ChessBoard";

const App = () => {

  return (
    <div className="App">
      <div className="flex-center" >
        <h4 className="heading">Check Kinght's possible moves</h4>
      </div>
      <ChessBoard />
    </div>
  );
}

export default App;
