import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./TopBar/TopBar";

const StyledHeader = styled.div`
	background-color: green;
	height: 23vh;
	background-image: linear-gradient(
		to right,
		rgba(119, 119, 119, 0.801),
		rgba(53, 52, 52, 0.801)
	);
	position: relative;

	@media (max-width: 1024px) {
		height: 13vh;
		width: 97vw;
	}

	@media (max-width: 768px) {
		height: 13vh;
		width: 100vw;
	}
`;

const StyledBar = styled(TopBar)`
	position: absolute;
	bottom: 0;
	background-color: #2b2b2b;
`;

const StyledButton = styled.button`
	height: 7vh;
	background-color: white;
	width: 20rem;
	margin-right: 5px;
	color: white;
	background-color: #2b2b2b;
	border: none;
	font-size: 2rem;

	&:hover {
		background-color: #1b1b1b;
	}

	&:focus {
		outline: 0;
		background-color: #1b1b1b;
	}

	@media (max-width: 768px) {
		width: 10rem;
		height: 3vh;
		font-size: 1rem;
	}

	@media (max-width: 450px) {
		width: 8rem;
		height: 3vh;
		font-size: 1rem;
	}

	@media (max-width: 325px) {
		font-size: 0.8rem;
	}
`;

const StyledImage = styled.img`
	height: 100px;
	width: 125px;
	position: absolute;
	border-radius: 50%;

	left: 200px;
	top: 20px;

	@media (max-width: 768px) {
		height: 50px;
		width: 60px;
		left: 50px;
		top: 30px;
	}

	@media (max-width: 450px) {
		left: 20px;
		top: 15px;
	}

	@media (max-width: 361px) {
		top: 5px;
	}
`;

const StyledTitle = styled(Link)`
	font-size: 4rem;
	text-decoration: none;
	color: white;

	position: absolute;
	left: 350px;
	top: 30px;

	@media (max-width: 768px) {
		font-size: 2rem;
		left: 120px;
		top: 30px;
	}

	@media (max-width: 450px) {
		left: 100px;
		top: 15px;
	}

	@media (max-width: 361px) {
		top: 10px;
	}
`;

const StyledParagraph = styled.p`
	position: absolute;
	left: 350px;
	top: 80px;
	font-size: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1rem;
		left: 120px;
		top: 54px;
	}

	@media (max-width: 450px) {
		top: 40px;
		left: 100px;
	}

	@media (max-width: 361px) {
		top: 35px;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledImage
				src={`https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_960_720.png`}
			/>
			<StyledTitle to={`/`}>FootInScore</StyledTitle>
			<StyledParagraph>
				Get the latest news from the World of Football!
			</StyledParagraph>
			<div className="center">
				<h4 />
			</div>
			<StyledBar>
				<StyledButton autoFocus>Pilka Nozna</StyledButton>
				<StyledButton>Koszykowka</StyledButton>
				<StyledButton>Siatkowka</StyledButton>
				<StyledButton>E-Sport</StyledButton>
				<StyledButton>Hokej</StyledButton>
				<StyledButton>Tenis</StyledButton>
			</StyledBar>
		</StyledHeader>
	);
};

export default Header;
