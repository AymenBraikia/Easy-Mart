"use client"
import "./body.css";
import Images from "./images";

function Body() {
	return (
		<div
			style={{
				position: "absolute",
				top: 80,
				left: 0,
				height: "fit-content",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				flexDirection: "column",
				rowGap: "50px",
				padding: "50px 100px",
				backgroundColor: "var(--background2)",
			}}
		>
			<Images />
		</div>
	);
}

export default Body;
