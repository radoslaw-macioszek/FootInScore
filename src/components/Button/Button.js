import styled from "styled-components";

const Button = styled.button`
	background-color: #cac9c9fa;
	border: rgb(46, 44, 44);
	margin: 2px;
	border-radius: 6px;
	padding: 4px 12px;
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;

	box-shadow: 0px 10px 21px -7px #0f0f0f;
	background: linear-gradient(to bottom, #b3b2b2 5%, #abadad 100%);
	display: inline-block;
	cursor: pointer;
	font-style: italic;
	margin-bottom: 5px;

	&:hover {
		box-shadow: inset 0 0 0 2em var(--hover);
	}

	@media (max-width: 768px) {
		font-size: 1.1rem;
		padding: 4px 2px;
		margin: 0;
	}
`;

export default Button;
