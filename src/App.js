import React from 'react';
import './App.css';
import Home from './views/home';
import { Provider } from 'react-redux';
import store from './state';
import { Route, BrowserRouter } from 'react-router-dom';
import MatchDetails from './views/match-details';
import LeagueDetails from './views/league-details';
import LeagueSchedule from './views/league-schedule';
import Timetable from './views/timetable';
import Header from './components/header';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <Route exact path="/details/:matchId" component={MatchDetails} />
                <Route exact path="/leagues/:leagueId" component={LeagueDetails} />
                <Route exact path="/schedule/" component={LeagueSchedule} />
                <Route exact path="/timetable/" component={Timetable} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
