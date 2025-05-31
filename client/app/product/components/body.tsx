"use client"
import Images from "./images";
import "./responsive.css"

function Body() {
	return (
		<div className="mainBody"
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
