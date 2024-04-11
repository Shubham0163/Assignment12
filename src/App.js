import React, { Component } from "react";
import {QUESTIONS} from "./questions";
import QuestionComponent from './QuestionComponent';
class App extends Component {
  state = {
  };


  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
  <QuestionComponent/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
