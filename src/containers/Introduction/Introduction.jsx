/** @format */

import * as React from "react";
import "./Introduction.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import introPhoto from "./introPhoto.PNG";
import introPhoto2 from "./introPhoto2.PNG";
import introPhoto3 from "./introPhoto3.PNG";
import introPhoto4 from "./introPhoto4.PNG";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Fade from "@mui/material/Fade";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Introduction = () => {
	return (
		<>
			<Box sx={{ margin: "10vh", flexGrow: 1, pointerEvents: "none" }}>
				<Grid
					container
					spacing={1}>
					<Grid xs></Grid>

					<Grid xs={"auto"}>
						<Grid
							item
							container
							direction="row"
							alignItems="center"
							justifyContent="center">
							<Grid
								xs={"auto"}
								sx={{
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Box sx={{ display: "flex" }}>
									<Fade
										in={true}
										appear={true}
										timeout={1500}>
										{
											<img
												style={{ borderRadius: "50%" }}
												src={introPhoto}
												width="350px"
												height="auto"
												alt="ProfileImage"></img>
										}
									</Fade>
								</Box>{" "}
							</Grid>{" "}
						</Grid>

						<Grid xs={12}>
							<Fade
								in={true}
								appear={true}
								timeout={1500}>
								<Typography
									variant="h3"
									component="h3"
									textAlign={"center"}
									sx={{ marginTop: "30px" }}>
									Nice to Meet You, I'm Yussof
								</Typography>
							</Fade>

							<Fade
								in={true}
								appear={true}
								timeout={1500}>
								<Typography
									sx={{ marginTop: "20px" }}
									variant="h4"
									component="h4">
									I Want to Help You Build Your Dreams. One Line of Code At a
									Time.
								</Typography>
							</Fade>
						</Grid>
					</Grid>
					<Grid xs></Grid>
				</Grid>
				<Grid
					container
					spacing={3}>
					<Grid xs></Grid>

					<Grid xs></Grid>
				</Grid>
			</Box>
		</>
		//   <div className="home">
		//   <div className="about">
		//     <h2> Nice to Meet You, I'm Yussof</h2>

		//     <div className="prompt">
		//     <p>I Want to Help You Build Your Dreams, One Line of Code At a Time.</p>

		//     </div>
		//   </div>

		//   <div className="skills">
		//     <h1> Skills</h1>
		//     <ol className="list">
		//       <li className="item">
		//         <h2> Front-End</h2>
		//         <span>
		//           Skills I mean Bullshit I mean Skills
		//         </span>
		//       </li>
		//       <li className="item">
		//         <h2>WHat do you study</h2>
		//         <span>
		//           Mayn I be studying bitches
		//         </span>
		//       </li>
		//       <li className="item">
		//         <h2>Languages</h2>
		//         <span>Bullshit</span>
		//       </li>
		//     </ol>
		//   </div>
		// </div>
	);
};

export default Introduction;
