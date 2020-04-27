import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flag from "react-world-flags";
import styled from "styled-components";

import { loadMatchesAction } from "../../state/matches/matches.reducer";
import { loadTeamsAction } from "../../state/teams/teams.reducer";

import Button from "../Button/Button";

const MatchWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const MatchInfo = styled.div`
	display: flex;

	align-items: center;
	font-size: 1.8rem;
	padding: 5px 5px;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0;
		width: 57vw;
		margin: 5px 0;
	}

	@media (max-width: 768px) {
		width: 70vw;
		margin: 5px 0;
	}
`;

const StyledFlag = styled(Flag)`
	display: flex;
	align-items: center;
	margin-right: 5px;
`;

const MatchList = () => {
	const dispatch = useDispatch();
	const matches = useSelector((state) => state.matchesReducer.data.matches);

	useEffect(() => {
		if (!matches) {
			dispatch(loadMatchesAction());
		}
	}, [dispatch]);

	return (
		<div>
			{matches && matches.length === 0
				? "no matches available today"
				: matches &&
				  matches.map((match) => {
						const today = new Date(`${match.utcDate}`);
						let hours = today.toLocaleTimeString();
						let matchFlag = match.competition.area.code;

						return (
							<MatchWrapper key={match.id}>
								<MatchInfo>
									<StyledFlag
										code={matchFlag === "ENG" ? "GB-ENG" : matchFlag}
										height="11"
									/>
									<strong style={{ marginRight: "5px" }}>
										{match.competition.area.name}:
									</strong>
									{match.competition.name} - {`matchday: ${match.matchday}`}
								</MatchInfo>
								<Button
									onClick={() => dispatch(loadTeamsAction(match))}
									className="matches"
								>
									{`${hours}`} {match.homeTeam.name} - {match.awayTeam.name}
								</Button>
							</MatchWrapper>
						);
				  })}
		</div>
	);
};

export default MatchList;
