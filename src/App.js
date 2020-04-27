import React from "react";
import "./App.css";
import Home from "./views/home";
import { Provider } from "react-redux";
import store from "./state";
import { Route, BrowserRouter, Switch, withRouter } from "react-router-dom";
import LeagueDetails from "./views/league-details";
import LeagueSchedule from "./views/league-schedule";
import Timetable from "./views/timetable";
import Header from "./components/header";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path="/leagues/:leagueId"
						component={withRouter(LeagueDetails)}
					/>
					<Route exact path="/schedule/" component={LeagueSchedule} />
					{/* <Route exact path="/timetable/" component={Timetable} /> */}
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
