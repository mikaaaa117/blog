import { FC } from "react";
import { StyledFlex, StyledFlexProps } from "./Flex.styled";

interface FlexProps extends StyledFlexProps {
	children: React.ReactNode;
}

export const Flex: FC<FlexProps> = ({ children, ...props }) => {
	return <StyledFlex {...props}>{children}</StyledFlex>;
};
