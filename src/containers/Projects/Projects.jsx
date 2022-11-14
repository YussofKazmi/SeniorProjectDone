/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Fade from "@mui/material/Fade";
import "./Projects.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import baseball from "./images/baseball.jpg";
import bioinf from "./images/bioinf.jpg";
import bitcoin from "./images/bitcoin.jpg";
import heartDisease from "./images/heartDisease.PNG";
import calculator from "./images/heartDisease.PNG";
import Divider from "@mui/material/Divider";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Projects = () => {
	return (
		<Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
			<Grid
				container
				spacing={1}
				sx={{ margin: "10px", marginBottom: "50px" }}>
				<Grid xs> </Grid>

				<Grid xs={7}>
					<Box sx={{ width: "100%" }}>
						<Stack spacing={1}>
							<Fade
								in={true}
								appear={true}
								timeout={1000}
								orientation="horizontal">
								<Typography
									sx={{ marginTop: "50px", marginBottom: "30px" }}
									variant="h4"
									component="h4">
									The Cool Stuff. Take a Look At Some of My Favorite Projects.
								</Typography>
							</Fade>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>

							<DisplayProjectsCard
								info={{
									title: "Big Data Heart Disease Classifier",
									image: heartDisease,
									descrip:
										"This project was an interesting project that took 76 attributes of data for each medical patient from a journal, and used them to feed a machine learning model that would then predict the prescence of heart disease within them",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>

							<DisplayProjectsCard
								info={{
									title: "MLB Teams Deviations Analysis",
									image: baseball,
									descrip:
										"This project delves into the world of baseball, specifically in the Major leagues. For this project, I took all the win/loss data on all the teams from each season from 1871 to 2018, and then used that data to find out 3 things:\n1. The number of games each team was expected to win tht season, based off their stats\n2.) If a team was historially lucky or unlucky based off all the post-seaosn infromation we have now\n3.) If a team had a an advantage by being at home or away for each game within each season",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>
							<DisplayProjectsCard
								info={{
									title: "Bitcoin Trading-Pattern Machine Learning Analysis",
									image: bitcoin,
									descrip:
										"This project is centered around machine learning classification tasks in relation to Bitcoin trading patterns in ransomware entities. Ransomeware is basically a program that encrypts file in such a way that the only way to get past that encryption is to pay money. Therefore it is extorition of money, and this type of attack deals in payment through bitcoin because of bitcoin’s high accessability and ease of use.",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>
							<DisplayProjectsCard
								info={{
									title: "Bioinformatics Gene Motif Calculator",
									image: bioinf,
									descrip:
										"This project breaks into the world of Bioinformatics which is a relatively new field combining data science and biology, essentially. One big theme in Bioinformatics, is analyzing genetic codes and finding patterns in the code such as genetic motifs (a repeated phrase of a gene code in in the form of its four bases). Gene motifs are short and recurring which signifies that maybet here is some type of biological logic or function present there that can be further investigated.",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>
						</Stack>
					</Box>
				</Grid>
				<Grid xs></Grid>
			</Grid>
		</Box>
	);
};

function DisplayProjectsCard({ info }) {
	return (
		<Fade
			in={true}
			appear={true}
			timeout={3000}
			orientation="horizontal">
			<Card
				sx={{
					display: "flex",
					backgroundColor: "black",
					color: "white",
				}}>
				<CardMedia
					component="img"
					sx={{ width: 400 }}
					image={info.image}
					alt="Project Image"
				/>
				<CardActionArea>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<CardContent sx={{ flex: "1 0 auto", color: "white" }}>
							<Typography
								component="div"
								variant="h5">
								{info.title}
							</Typography>
							<Typography
								variant="subtitle1"
								color="white"
								component="div">
								{info.descrip}
							</Typography>
						</CardContent>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								pl: 1,
								pb: 1,
							}}></Box>
					</Box>
				</CardActionArea>
			</Card>
		</Fade>
	);
}

function ProjectCard({ info }) {
	return (
		<Card sx={{ maxWidth: 375, backgroundColor: "black" }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="240"
					image={info.image}
					alt="Project Photo"
				/>

				<CardContent sx={{ maxHeight: "200px" }}>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						{info.title}
					</Typography>
					<Typography
						overflow={"auto"}
						variant="body2"
						color="white">
						{info.descrip}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					color="error">
					Share
				</Button>
			</CardActions>
		</Card>
	);
}

function ExtraProjects() {
	let info = [
		{
			title: "Big Data Heart Disease Classifier",
			image: heartDisease,
			descrip:
				"This project was an interesting project that took 76 attributes of data for each medical patient from a journal, and used them to feed a machine learning model that would then predict the prescence of heart disease within them",
		},
		{
			title: "MLB Teams Deviations Analysis",
			image: baseball,
			descrip:
				"This project delves into the world of baseball, specifically in the Major leagues. For this project, I took all the win/loss data on all the teams from each season from 1871 to 2018, and then used that data to find out 3 things:\n1. The number of games each team was expected to win tht season, based off their stats\n2.) If a team was historially lucky or unlucky based off all the post-seaosn infromation we have now\n3.) If a team had a an advantage by being at home or away for each game within each season",
		},
		{
			title: "Bitcoin Trading-Pattern Machine Learning Analysis",
			image: bitcoin,
			descrip:
				"This project is centered around machine learning classification tasks in relation to Bitcoin trading patterns in ransomware entities. Ransomeware is basically a program that encrypts file in such a way that the only way to get past that encryption is to pay money. Therefore it is extorition of money, and this type of attack deals in payment through bitcoin because of bitcoin’s high accessability and ease of use.",
		},
		{
			title: "Bioinformatics Gene Motif Calculator",
			image: bioinf,
			descrip:
				"This project breaks into the world of Bioinformatics which is a relatively new field combining data science and biology, essentially. One big theme in Bioinformatics, is analyzing genetic codes and finding patterns in the code such as genetic motifs (a repeated phrase of a gene code in in the form of its four bases). Gene motifs are short and recurring which signifies that maybet here is some type of biological logic or function present there that can be further investigated.",
		},
		{
			title: "Calculator Mobile Application",
			image: calculator,
			descrip: "Calculator App With Kotlin",
		},
	];
	return info.map((project) => {
		<Grid xs={3}>
			<ProjectCard info={project}></ProjectCard>
		</Grid>;
	});
}

export default Projects;
