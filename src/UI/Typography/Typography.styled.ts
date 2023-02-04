import styled from "styled-components";
import { variants } from "./variants";

export type Variant = "h1" | "h2" | "h3" | "h4" | "subtitle";

export interface StyledTypographyProps {
	variant?: Variant;
	bold?: boolean;
	color?: string;
}

export const StyledTypography = styled.h1<StyledTypographyProps>`
	color: ${props => (props.color ? props.color : "#000")};
	font-size: ${props =>
		props.variant ? variants[props.variant] : variants.default};
	font-weight: ${props => (props.bold === true ? "500" : "400")};
	line-height: 110%;
`;
