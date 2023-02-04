import { FC } from "react";
import { StyledWrapper } from "./Container.styled";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
