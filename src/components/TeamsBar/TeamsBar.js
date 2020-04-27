import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Flag from "react-world-flags";

const StyledWrapper = styled.div`
	border-left: 10px solid rgba(59, 51, 1, 0.808);
	box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
	border-radius: 11px;

	z-index: 9999;
	display: flex;
	flex-direction: column;

	position: fixed;
	right: 4vw;
	top: 10vh;
	height: 80vh;
	width: 36vw;
	background-color: grey;

	transform: translateX(${({ isVisible }) => (isVisible ? "0" : "100%")});
	transition: transform 0.5s ease-in-out;

	@media (max-width: 768px) {
		width: 70vw;
	}
`;

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	min-height: 19rem;
	background-color: #3b3b3bfa;
	color: gold;

	@media (max-width: 768px) {
		min-height: 17rem;
	}
`;

const StyledTeamName = styled.h3`
	display: flex;
	font-size: 2.8rem;
	padding: 0 0 4rem;
	line-height: 1.2;

	max-width: 200px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 2.1rem;
		margin-top: -4rem;
	}
`;

const StyledCompetition = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 100px;
	font-size: 1.5rem;
	padding: 5px 0;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		font-size: 1.4rem;
		top: 80px;
	}
`;

const StyledBody = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 50px 22px 70px;

	font-size: 1.7rem;
	overflow: scroll;

	@media (max-width: 768px) {
		font-size: 1.3rem;
		margin: 10px 20px 70px;
	}
`;

const StyledHomeTeam = styled.ul`
	display: flex;
	flex-direction: column;

	justify-content: left;
	list-style: none;
`;

const StyledPlayer = styled.li`
	&:last-of-type {
		position: absolute;
		bottom: 18px;

		margin-top: 30px;
		font-size: 20px;
		font-weight: bold;
		margin-left: -7px;
		font-size: 1.5rem;

		@media (max-width: 768px) {
			font-size: 1.3rem;
			margin-left: -7px;
		}
	}
`;

const StyledAwayTeam = styled.ul`
	display: flex;
	flex-direction: column;

	justify-content: right;
	list-style: none;
`;

const TeamsBar = ({ isVisible }) => {
	const team1 = useSelector((state) => state.teamsReducer.team1);
	const team2 = useSelector((state) => state.teamsReducer.team2);
	const match = useSelector((state) => state.teamsReducer.match);

	const flagCode = match.competition ? match.competition.area.code : "";

	const homeLineup = team1.squad ? team1.squad : null;
	const awayLineup = team2.squad ? team2.squad : null;

	return (
		<StyledWrapper isVisible={isVisible}>
			<StyledHeader>
				<StyledTeamName>{team1.name}</StyledTeamName>
				<StyledCompetition>
					{match.competition ? match.competition.name : "Choose a game!"}
					<Flag code={flagCode === "ENG" ? "GB-ENG" : flagCode} height="20" />
					{team1.venue ? `Stadium: ${team1.venue}` : "Stadium:"}
				</StyledCompetition>
				<StyledTeamName>{team2.name}</StyledTeamName>
			</StyledHeader>
			<StyledBody>
				<StyledHomeTeam>
					{homeLineup &&
						homeLineup.map((homePlayer, index) => (
							<StyledPlayer key={homePlayer.id}>
								{homeLineup.length - 1 === index
									? `Trener: ${homePlayer.name}`
									: `${
											homePlayer.shirtNumber === null
												? "- "
												: homePlayer.shirtNumber
									  }. ${homePlayer.name}`}
							</StyledPlayer>
						))}
				</StyledHomeTeam>
				<StyledAwayTeam>
					{awayLineup &&
						awayLineup.map((awayPlayer, index) => (
							<StyledPlayer key={awayPlayer.id}>
								{awayLineup.length - 1 === index
									? `Trener: ${awayPlayer.name}`
									: `${
											awayPlayer.shirtNumber === null
												? "- "
												: awayPlayer.shirtNumber
									  }. ${awayPlayer.name}`}
							</StyledPlayer>
						))}
				</StyledAwayTeam>
			</StyledBody>
		</StyledWrapper>
	);
};

export default TeamsBar;
