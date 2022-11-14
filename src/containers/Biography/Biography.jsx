/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import introPhoto from "./introPhoto.PNG";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Fade from "@mui/material/Fade";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

import "./Biography.css";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function TextPaper() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width: "500px",
					height: "auto",
				},
				padding: "10px",
			}}>
			<Paper
				elevation={0}
				sx={{ padding: "20px" }}>
				<ThemeProvider theme={theme}>
					<Typography>Nice to Meet You, I'm Yussof</Typography>
					<Typography>P1</Typography>
					<Typography>Pvdfb2</Typography>
					<Typography>P3</Typography>
				</ThemeProvider>
			</Paper>
			<Paper
				elevation={0}
				sx={{ padding: "20px" }}>
				<ThemeProvider theme={theme}>
					<Typography>Nice to Meet You, I'm Yussof</Typography>
					<Typography>P1</Typography>
					<Typography>P2</Typography>
					<Typography>P3</Typography>
				</ThemeProvider>
			</Paper>
		</Box>
	);
}

function ImagePaper() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					ml: 0,
					width: "auto",
					height: "auto",
				},
			}}>
			<Paper sx={{}}>
				<CardMedia
					component="img"
					sx={{ width: "400px" }}
					image={introPhoto}
					alt="Project Image"
				/>
			</Paper>
		</Box>
	);
}

const Biography = () => {
	return (
		<Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
			<Grid
				container
				spacing={1}
				sx={{ margin: "60px", marginBottom: "50px" }}>
				<Grid xs> </Grid>
				<Grid xs={4}>
					<TextPaper>Hello</TextPaper>
				</Grid>

				<Grid>
					<ImagePaper></ImagePaper>
				</Grid>
				<Grid xs> </Grid>
			</Grid>
		</Box>
	);
};

export default Biography;
