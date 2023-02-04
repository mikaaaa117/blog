import { FC } from "react";
import { StyledTypography, Variant } from "./Typography.styled";

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  bold?: boolean;
  color?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  bold,
  color,
  children,
}) => {
  return (
    <StyledTypography variant={variant} bold={bold} color={color}>
      {children}
    </StyledTypography>
  );
};
