/** @format */

import React from "react";
import ReactDOM from "react-dom"; //allows us to hook our react application to index.html
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
	<div
		style={{
			height: "100vh",
			width: "100%s",
			fontFamily: "sans-serif",

			color: "white",
			backgroundColor: "black",
			paddingBottom: "200px",
		}}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</div>,

	document.getElementById("root")
);
