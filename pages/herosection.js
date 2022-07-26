import React, { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";

function herosection({slides}) {
	return (
		<div>
			<Slideshow images={ slides }/>
		</div>
	);
}

export default herosection;