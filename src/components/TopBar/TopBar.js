import styled from "styled-components";

const TopBar = styled.div`
	width: 97vw;
	height: 7vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #3b3b3b99;
	top: 153px;
	/* margin-left: 3px; */
	@media (max-width: 1040px) {
		top: 130px;
	}

	@media (max-width: 769px) {
		width: 100vw;
		height: 3vh;
		top: 102px;
	}

	@media (max-width: 450px) {
		top: 74px;
	}
	@media (max-width: 411px) {
		top: 80px;
		z-index: 999999999;
		height: 3.5vh;
	}

	@media (max-width: 375px) {
		top: 82px;
		z-index: 999999999;
	}

	@media (max-width: 361px) {
		top: 64px;
	}

	@media (max-width: 325px) {
		top: 57px;
	}
`;

export default TopBar;
