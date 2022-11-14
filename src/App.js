/** @format */

import React from "react";
import { render } from "react-dom";
import {
	BrowserRouter,
	Route,
	Routes,
	RouteMatch,
	Switch,
} from "react-router-dom";
import { Article, Project, Navbar } from "./components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Unstable_Grid2";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
	Introduction,
	Biography,
	Projects,
	Blogging,
	Freelance,
	ContactMe,
} from "./containers";
import "./App.css";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid
				xs={12}
				sx={{
					fontFamily: "sans-serif",

					color: "white",
				}}>
				<div>
					<Navbar></Navbar>
				</div>

				<Routes>
					<Route
						path="/*"
						element={<Introduction />}
					/>
					<Route
						path="/Biography"
						element={<Biography />}
					/>
					<Route
						path="/Projects"
						element={<Projects />}
					/>
					{/* <Route path='/Skills' element={< />} /> */}
					<Route
						path="/Freelance"
						element={<Freelance />}
					/>
					<Route
						path="/ContactMe"
						element={<ContactMe />}
					/>
				</Routes>
			</Grid>
		</ThemeProvider>
	);
};

// <div className='App'>
//   <div>
//   <Navbar />
//  </div>
//  <div>
//  <Introduction>

//  </Introduction>
//    <Biography>

//    </Biography>
//    <Projects>

//    </Projects>
//    <Blogging>

//    </Blogging>
//    <Freelance>

//    </Freelance>
//    <ContactMe>

//    </ContactMe>
//  </div>
// </div>

export default App;
