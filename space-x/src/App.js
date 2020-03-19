import React from "react";
import MissionList from "./components/MissionList";
import thunk from "redux-thunk";
import MissionForm from "./components/MissionForm";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { missionReducer as reducer } from "./reducers/missionReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Space Missions</h1>
        <MissionForm />
        <MissionList />
      </div>
    </Provider>
  );
}

