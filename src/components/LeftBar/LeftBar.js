import React from "react";
import { useSelector } from "react-redux";
import Flag from "react-world-flags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const StyledButtonsWrapper = styled.div`
	width: 15vw;
	height: 150vh;
	display: flex;
	flex-direction: column;
	background-color: #3b3b3bfa;

	margin-left: 10rem;

	@media (max-width: 1024px) {
		margin-top: 7rem;
		margin-left: 0;
		height: 148vh;
		min-width: 23vw;
		z-index: 9999999;
	}

	@media (max-width: 768px) {
		margin-left: 0;
		height: 148vh;
		min-width: 23vw;
		z-index: 9999999;
	}
`;

const StyledButton = styled(Button)`
	background-color: white;
	padding: 5px 10px;
	margin: 5px 5px;
	font-size: 1.6rem;

	color: black;
	text-decoration: none;

	@media (max-width: 768px) {
		font-size: 1rem;
		margin: 2px 2px;
		padding: 2px;

		text-align: center;
	}
`;

const StyledHeader = styled.h2`
	color: gold;
	font-size: 2rem;

	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px 0;

	@media (max-width: 768px) {
		font-size: 1.3rem;
		margin: 20px 0 7px;
		text-align: center;
	}
`;

const StyledFlag = styled(Flag)`
	margin-right: 8px;

	@media (max-width: 768px) {
		margin-right: 2px;
		height: 5;
		float: left;
	}
`;

const LeftBar = () => {
	const competitions = useSelector(
		(state) => state.leaguesReducer.data.competitions
	);

	return (
		<StyledButtonsWrapper>
			<StyledHeader> Dostepne ligi </StyledHeader>
			{competitions &&
				competitions.map((competition) => {
					const flagCode = competition.area.countryCode;
					return (
						<StyledButton
							as={Link}
							to={`/leagues/${competition.id}`}
							key={competition.id}
						>
							<StyledFlag
								code={
									flagCode === "ENG"
										? "GB-ENG"
										: flagCode === "EUR"
										? "EU"
										: flagCode
								}
								height="11"
							/>
							{competition.name}
						</StyledButton>
					);
				})}
		</StyledButtonsWrapper>
	);
};

export default LeftBar;
