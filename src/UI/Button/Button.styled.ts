import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.4rem 0.8rem;
	background-color: darkcyan;
	border-radius: 0.3rem;
	border: none;
	font-size: 0.8rem;
	transition: filter 0.2s ease, box-shadow 0.2s ease, transform 100ms ease;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
	color: white;
	&:hover {
		cursor: pointer;
		filter: brightness(1.005);
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5),
			inset 0 0 18px rgba(0, 0, 0, 0.25);
	}
	&:active {
		transform: scale(1.05);
	}
`;
