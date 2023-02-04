import styled from "styled-components";
import { justifyContent } from "@/UI/Flex/constants/justifyContent";
import { alignItems } from "./constants/alignItems";

type Justify =
	| "center"
	| "between"
	| "around"
	| "evenly"
	| "start"
	| "end"
	| "stretch";

type Items = "center" | "start" | "end";

export interface StyledFlexProps {
	direction?: string | undefined;
	gap?: string;
	items?: Items;
	justify?: Justify;
}

export const StyledFlex = styled.div<StyledFlexProps>`
	display: flex;
	flex-direction: ${props => (props.direction ? props.direction : "row")};
	gap: ${props => (props.gap ? `${props.gap}rem` : "0")};
	justify-content: ${props =>
		props.justify ? justifyContent[props.justify] : "initial"};
	align-items: ${props => (props.items ? alignItems[props.items] : "initial")};
`;
