import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Slideshow = ({images}) => {
	//Array of Images
	const current = new Date()

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<FaChevronLeft size={36} color={'#FF7A08'} />
		),
		nextArrow: (
			<FaChevronRight size={36} color={'#FF7A08'} />
		),
	};
   return (
		<div className="slide-container">
			<Zoom scale={0.4}>
			{
				images.map((item, index) => <img key={index} style={{width: "100%"}} src={'http://localhost:3005' + item.my_url_slide} alt="{item.titulo}" />)
			}
			</Zoom>
		</div>
   )
}

export default Slideshow