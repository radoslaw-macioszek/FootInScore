import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLeaguesAction } from "../../state/leagues/leagues.reducer";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import LeftBar from "../../components/LeftBar/LeftBar";
import MatchList from "../../components/MatchList/MatchList";

import TeamsBar from "../../components/TeamsBar/TeamsBar";
import Button from "../../components/Button/Button";

import "./home.css";

const StyledHeading = styled.h2`
	padding: 5px 10px;
	margin: 10px 5px;
	font-size: 2.5rem;

	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

const StyledWrapper = styled.div`
	display: flex;
`;

const StyledMatches = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-left: 15rem;
	@media (max-width: 1030px) {
		margin-top: 8rem;
	}

	@media (max-width: 768px) {
		margin-left: 2rem;
	}
	@media (max-width: 325px) {
		margin-left: 1rem;
	}
`;

const StyledButtonIcon = styled(Button)`
	border-radius: 5rem;

	position: fixed;
	bottom: 4rem;
	right: 4rem;

	z-index: 100000000;

	@media (max-width: 768px) {
		font-size: 1.2rem;
		bottom: 4rem;
	}
`;

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.matchesReducer.loading);
	const [barVisible, setBarVisibility] = useState(false);

	useEffect(() => {
		dispatch(loadLeaguesAction());
	}, [dispatch]);

	if (isLoading) {
		return <Loader className="loader" type="ThreeDots" />;
	}

	return (
		<StyledWrapper>
			<LeftBar />
			<StyledMatches>
				<StyledHeading> Today's matches: </StyledHeading>
				<MatchList />
			</StyledMatches>
			<StyledButtonIcon onClick={() => setBarVisibility(!barVisible)}>
				Match Details
			</StyledButtonIcon>

			<TeamsBar isVisible={barVisible} />
		</StyledWrapper>
	);
};

export default Home;

// /v2/competitions/{id}/standings
// footballInfoScore

// handleClose={handleVisibility}
