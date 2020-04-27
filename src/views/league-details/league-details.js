import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";

import { loadStandingsAction } from "../../state/standings/standings.reducer";
import { loadLeaguesAction } from "../../state/leagues/leagues.reducer";
import {
	loadLeague,
	currentSchedule,
} from "../../state/schedules/schedules.reducer";
import Table from "../../components/Table";
import LeftBar from "../../components/LeftBar/LeftBar";
import Button from "../../components/Button/Button";
import MiddleBar from "../../components/MiddleBar/MiddleBar";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledTable = styled.div`
	display: flex;

	position: absolute;
	top: 40rem;
	left: 60rem;

	@media (max-width: 1024px) {
		top: 380px;
		left: 440px;
	}

	@media (max-width: 768px) {
		top: 240px;
		left: 230px;
	}
	@media (max-width: 450px) {
		top: 160px;
		left: 140px;
	}
	@media (max-width: 425px) {
		top: 170px;
		left: 140px;
	}
`;

const StyledSmallButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	padding: 0 5px;
	margin: 5rem 0 5px 5px;
	font-size: 1.6rem;

	color: black;
	text-decoration: none;
	z-index: 999999;

	width: 7rem;
	height: 3rem;

	@media (max-width: 768px) {
		width: 3rem;
		height: 1.5rem;
		font-size: 0.8rem;
		margin-right: 1px;
		margin-top: 8px;
	}
`;

const StyledParagraph = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -13rem;
	left: 1rem;

	font-size: 5rem;
	min-width: 80rem;
	font-family: italic;

	@media (max-width: 1024px) {
		font-size: 4rem;
		height: 1.5rem;
		top: -90px;
		left: 50px;
		min-width: 20vw;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
		height: 1.5rem;
		top: -22px;
		left: 180px;
		min-width: 20vw;
	}

	@media (max-width: 450px) {
		top: -29px;
		left: auto;
	}

	@media (max-width: 416px) {
		top: -19px;
		left: auto;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 0;
`;

const LeagueDetails = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.standingsReducer.loading);

	const { leagueId } = useParams();
	const parsedLeagueId = parseInt(leagueId);

	const competitions = useSelector((state) => state.standingsReducer.data.data);
	const tableName = competitions ? competitions.competition.name : "";

	const [value, setValue] = useState(0);

	useEffect(() => {
		dispatch(loadStandingsAction(parsedLeagueId));
		dispatch(loadLeaguesAction());
	}, [dispatch, parsedLeagueId]);

	useEffect(() => {
		if (competitions) {
			dispatch(loadLeague(competitions.competition.code));
			dispatch(currentSchedule(competitions.season.currentMatchday));
		}
	}, [dispatch, competitions]);

	if (isLoading) {
		return <Loader className="loader" type="ThreeDots" />;
	}

	return (
		<StyledWrapper>
			<LeftBar />
			<StyledTable>
				<StyledDiv>{competitions && <MiddleBar />}</StyledDiv>
				<StyledParagraph>
					{tableName ? tableName : "Table"} Table
				</StyledParagraph>
				<StyledSmallButton onClick={() => setValue(0)}>All</StyledSmallButton>
				<StyledSmallButton onClick={() => setValue(1)}>Home</StyledSmallButton>
				<StyledSmallButton onClick={() => setValue(2)}>Away</StyledSmallButton>
				<Table value={value} />
			</StyledTable>
		</StyledWrapper>
	);
};

export default LeagueDetails;
