import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoMdFootball } from "react-icons/io";
import { FaTable } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";

import styled from "styled-components";
import Button from "../../components/Button/Button";

const StyledButtonsWrapper = styled.div`
	width: 40vw;
	height: 7vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #222121;

	position: absolute;
	top: -38px;
	left: 20px;
	@media (max-width: 1024px) {
		background-color: transparent;
	}

	@media (max-width: 768px) {
		top: -83px;
		left: 63px;
		background-color: transparent;
	}

	@media (max-width: 450px) {
		top: -95px;
		left: 20px;
	}
	@media (max-width: 415px) {
		top: -65px;
		left: 20px;
	}

	@media (max-width: 361px) {
		top: -75px;
		left: 10px;
	}
`;

const StyledButton = styled(Button)`
	background-color: white;
	padding: 5px 10px;
	margin: 5px 5px;
	font-size: 1.6rem;
	display: flex;
	align-items: center;
	justify-content: center;

	color: black;
	text-decoration: none;

	width: 200px;
	height: 50px;

	@media (max-width: 1024px) {
		min-width: 16rem;
		height: 3rem;
		padding: 5px;
		font-size: 1.4rem;
		margin: 1px;
	}

	@media (max-width: 768px) {
		min-width: 10rem;
		height: 2rem;
		padding: 0;
		font-size: 0.9rem;
		margin: 1px;
	}
	@media (max-width: 450px) {
		font-size: 0.8rem;
		min-width: 9rem;
	}
`;

const MiddleBar = () => {
	const competitions = useSelector((state) => state.standingsReducer.data.data);

	return (
		<StyledButtonsWrapper>
			<StyledButton as={Link} to={`/leagues/${competitions.competition.id}`}>
				<FaTable style={{ marginRight: "5px" }} /> Standings / Tabela
			</StyledButton>
			<StyledButton as={Link} to={`/schedule/`}>
				<AiOutlineSchedule style={{ marginRight: "5px" }} /> Results / Wyniki
			</StyledButton>
			<StyledButton as={Link} to={""}>
				<IoMdFootball style={{ marginRight: "5px" }} /> Top Scorers / Strzelcy
			</StyledButton>
		</StyledButtonsWrapper>
	);
};

export default MiddleBar;
