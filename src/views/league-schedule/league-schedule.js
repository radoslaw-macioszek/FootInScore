import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Button from "../../components/Button/Button";
import styled from "styled-components";

import {
	loadSchedulesAction,
	nextSchedule,
	previousSchedule,
} from "../../state/schedules/schedules.reducer";

import "./league-schedule.css";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

import MiddleBar from "../../components/MiddleBar/MiddleBar";

const StyledButtons = styled.div`
	display: flex;
	position: absolute;
	top: 295px;
	left: 29vw;

	@media (max-width: 1030px) {
		top: 270px;
		left: 300px;
	}

	@media (max-width: 768px) {
		top: 170px;
		left: 100px;
	}
`;

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-top: 10rem;
	font-size: 2rem;

	@media (max-width: 768px) {
		margin-left: 1rem;
		margin-top: 3rem;
		font-size: 1.8rem;
	}
	@media (max-width: 420px) {
		margin-left: 1rem;
		margin-top: 3rem;
		font-size: 1rem;
	}
`;

const StyledHeader = styled.p`
	font-size: 2.5rem;
	margin: 0 10px;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

const StyledCenter = styled.span`
	margin: 0 50px;
`;

const StyledLi = styled.li`
	width: 700px;
	list-style: none;
	display: flex;

	@media (max-width: 768px) {
		width: 500px;
	}
	@media (max-width: 420px) {
		width: 400px;
	}
`;

const RightSpan = styled.span`
	width: 300px;
	display: flex;
	justify-content: flex-end;

	@media (max-width: 768px) {
		width: 200px;
	}
	@media (max-width: 420px) {
		width: 150px;
	}
`;

const LeftSpan = styled.span`
	width: 300px;
	@media (max-width: 768px) {
		width: 200px;
	}
	@media (max-width: 420px) {
		width: 150px;
	}
`;

const StyledArrows = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	margin-bottom: 2rem;
	margin-top: 5rem;

	@media (max-width: 768px) {
	}
`;

const StyledButton = styled(Button)`
	height: 20px;
	width: 25px;
	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	font-size: 1rem;
	padding: 0;
`;

const LeagueSchedule = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.schedulesReducer.loading);
	const schedules = useSelector((state) => state.schedulesReducer.data.matches);
	const schedulesInfo = useSelector((state) => state.schedulesReducer.data);
	const competitions = useSelector((state) => state.standingsReducer.data.data);
	const next = useSelector((state) => state.schedulesReducer.nextMatchday);

	useEffect(() => {
		dispatch(loadSchedulesAction());
	}, [dispatch]);

	if (isLoading) {
		return <Loader className="loader" type="ThreeDots" />;
	}

	return (
		<div>
			<StyledButtons>{competitions && <MiddleBar />}</StyledButtons>
			<StyledWrapper>
				<StyledArrows>
					<StyledButton onClick={() => dispatch(previousSchedule())}>
						<IoMdArrowBack className="icon" />
					</StyledButton>
					<StyledHeader>
						{schedulesInfo &&
							schedulesInfo.filters &&
							schedulesInfo.filters.matchday}
						. kolejka
					</StyledHeader>
					<StyledButton onClick={() => dispatch(nextSchedule())}>
						<IoMdArrowForward className="icon" />
					</StyledButton>
				</StyledArrows>
				<ul>
					{schedules &&
						schedules.map((match) => (
							<StyledLi key={match.id}>
								<RightSpan>{match.homeTeam.name}</RightSpan>
								<strong>{match.score.fullTime.homeTeam}</strong>
								<StyledCenter>-</StyledCenter>
								<strong>{match.score.fullTime.awayTeam}</strong>
								<LeftSpan>{match.awayTeam.name}</LeftSpan>
							</StyledLi>
						))}
				</ul>
			</StyledWrapper>
		</div>
	);
};

export default LeagueSchedule;
