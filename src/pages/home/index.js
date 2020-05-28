import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./view/siderbar";
import QuestionPage from "../question";
import UserPage from "../users";
import QuizPage from "../quiz";

export default function HomePage() {
  return (
    <div className="main-app">
      <div className="left">
        <SideBar />
      </div>

      <div className="mid">
        <nav>
          <h1>Quiz Dashboard</h1>
        </nav>
        <br />
        <br />
        <Switch>
          <Route path="/home" exact />
          <Route path="/home/question" exact component={QuestionPage} />
          <Route path="/home/quiz" exact component={QuizPage} />
          <Route path="/home/users" exact component={UserPage} />
        </Switch>
      </div>

      <div className="right"></div>
    </div>
  );
}
