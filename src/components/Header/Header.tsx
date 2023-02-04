import { Button } from "@/UI/Button/Button";
import { Flex } from "@/UI/Flex/Flex";
import { Typography } from "@/UI/Typography/Typography";
import Link from "next/link";
import { FC } from "react";
import { StyledHeader } from "./Header.styled";

export const Header: FC = () => {
	return (
		<StyledHeader>
			<Link href="/">
				<Typography variant="h1" bold={true}>
					TSB
				</Typography>
			</Link>
			<Flex justify="between" gap="2">
				<Link href="/login">
					<Button>Login</Button>
				</Link>
				<Link href="/register">
					<Button>Register</Button>
				</Link>
			</Flex>
		</StyledHeader>
	);
};
