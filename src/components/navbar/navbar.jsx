/** @format */

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import "./navbar.css";
import { Typography } from "@mui/material/styles/createTypography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Stack
				sx={{ padding: "20px", paddingLeft: "40px" }}
				spacing={3}
				direction="row">
				<Link
					style={{ textDecoration: "none" }}
					to="/*">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Home
					</Button>
				</Link>

				<Link
					style={{ textDecoration: "none" }}
					to="/Biography">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						About Me
					</Button>
				</Link>
				<Link
					style={{ textDecoration: "none" }}
					to="/Projects">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Projects
					</Button>
				</Link>
				<Link
					style={{ textDecoration: "none" }}
					to="/Freelance">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Freelance
					</Button>
				</Link>
				<Link
					style={{ textDecoration: "none" }}
					to="/Goals">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Goals
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};

export default Navbar;
